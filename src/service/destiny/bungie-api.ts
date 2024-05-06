//@ts-nocheck
import {
  BungieMembershipType,
  DestinyHistoricalStatsActivity, DestinyPostGameCarnageReportData,
  DestinyProfileResponse,
  getActivityHistory,
  getPostGameCarnageReport,
  getProfile,
  searchDestinyPlayerByBungieName,
} from 'bungie-api-ts/destiny2';
import type { UserInfoCard } from 'bungie-api-ts/user';
import { batchRequest } from '../utilities';
import { httpClient, throttledHttpClient } from './bungie-http-client';
import { DestinyAccount } from './types';
import {interactive} from "@pandacss/dev/dist/interactive";
import * as console from "node:console";
import * as console from "node:console";
import * as console from "node:console";
import {lastLoadedMatchIdentifier} from "./match-storage.ts";
import {fetchTrialsMatches} from "./match-service.ts";

const CLIENT = throttledHttpClient(httpClient);

export const matchesAgainstAccount = async (account: DestinyAccount, target: DestinyAccount) => {
  const { profile } = await loadProfile(target);

  const matches = await fetchTrialsMatches(account);

  // postGameReports
  //   .filter((game) => {
  //     return game.entries.some((opponent) => opponent.player.destinyUserInfo.membershipId === targetProfile.membershipId);
  //   })
  //   .forEach((game) => {

  //   });

  // for (const game of commonGames) {
  // }

  return 0;
};

export const loadPostGameReports = async (loadedProfile: LoadedProfile): Promise<DestinyPostGameCarnageReportData[]> => {
  const { profile, profileData } = loadedProfile;
  const activity = await loadActivityForProfile(profile, profileData);

  console.log("about to load: ", activity?.length)

  if (!activity) {
    throw new Error('could not load activity');
  }

  const activityIds = activity.map((match) => match.instanceId);

  const { success, failures } = await batchRequest(
    activityIds,
    async (id) => {
      const res = await getPostGameCarnageReport(CLIENT, {
        activityId: id,
      });

      return res.Response;
    },
    { batchSize: 100, delay: 1000 },
  );

  console.error('failures', failures);

  return success;
};

export interface LoadedProfile {
  profile: UserInfoCard,
  profileData: DestinyProfileResponse
}

export const loadProfile = async (account: DestinyAccount): Promise<LoadedProfile> => {
  const searchResponse = await searchDestinyPlayerByBungieName(
    CLIENT,
    {
      membershipType: BungieMembershipType.All,
    },
    {
      displayName: account.name,
      displayNameCode: account.identifier,
    },
  );

  const profile = searchResponse.Response[0];

  if (!profile) {
    throw Error('could not find player');
  }

  const profileRequest = await getProfile(CLIENT, {
    destinyMembershipId: profile.membershipId,
    membershipType: profile.membershipType,
    components: [100, 200],
  });

  const profileData = profileRequest.Response;

  return { profile, profileData };
};

export const loadActivityForProfile = async (profile: UserInfoCard, profileResponse: DestinyProfileResponse) => {
  const { data } = profileResponse.characters;

  if (!data) {
    return;
  }

  const currentHighestLoad = await lastLoadedMatchIdentifier(profile.membershipId)

  console.log('current highest load', currentHighestLoad)

  const characterPromises = Object.keys(data).flatMap((key) => loadActivityForCharacter(currentHighestLoad, profile, key));
  const resolvedCharacters = await Promise.all(characterPromises);

  return resolvedCharacters.flat();
};

const loadActivityForCharacter = async (currentHighestLoad: BigInt, profile: UserInfoCard, character: string) => {
  const activities: DestinyHistoricalStatsActivity[] = [];
  let page = 0;

  while (true) {
    console.log("loading page {} for count {}", page, page * 250)
    const history = await getActivityHistory(CLIENT, {
      characterId: character,
      membershipType: profile.membershipType,
      destinyMembershipId: profile.membershipId,
      count: 250,
      mode: 84,
      page: page,
    });

    if (history.ErrorStatus !== 'Success' || !history.Response.activities) {
      break;
    }

    const mappedActivities = history.Response.activities.map((activity) => activity.activityDetails);

    activities.push(...mappedActivities);

    if (BigInt(history.Response.activities[0].activityDetails.instanceId) <= currentHighestLoad) {
      break;
    }

    page++
  }

  return activities.filter((activity) => {
    return BigInt(activity.instanceId) > currentHighestLoad
  })
};