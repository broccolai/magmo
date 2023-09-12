import {
  BungieMembershipType,
  DestinyHistoricalStatsActivity,
  DestinyProfileResponse,
  getActivityHistory,
  getPostGameCarnageReport,
  getProfile,
  searchDestinyPlayerByBungieName,
} from 'bungie-api-ts/destiny2';
import type { UserInfoCard } from 'bungie-api-ts/user';
import { httpClient, throttledHttpClient } from './bungie-http-client';
import { DestinyAccount } from './types';
import { batchRequest } from '../utilities';
import { post } from 'bungie-api-ts/http';

const CLIENT = throttledHttpClient(httpClient);

export const matchesAgainstAccount = async (account: DestinyAccount, target: DestinyAccount) => {
  const { profile: targetProfile } = await loadProfile(target);

  const postGameReports = await loadPostGameReports(account);

  postGameReports
    .filter((game) => {
      return game.entries.some((opponent) => opponent.player.destinyUserInfo.membershipId === targetProfile.membershipId);
    })
    .forEach((game) => {
      
    });

  for (const game of commonGames) {
  }

  return commonGames.length;
};

export const loadPostGameReports = async (account: DestinyAccount) => {
  const { profile, profileResponse } = await loadProfile(account);
  const activity = await loadActivityForProfile(profile, profileResponse);

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

export const loadProfile = async (account: DestinyAccount) => {
  const searchResponse = await searchDestinyPlayerByBungieName(
    CLIENT,
    {
      membershipType: BungieMembershipType.TigerSteam,
    },
    {
      displayName: account.name,
      displayNameCode: account.identifer,
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

  const profileResponse = profileRequest.Response;

  return { profile, profileResponse };
};

export const loadActivityForProfile = async (profile: UserInfoCard, profileResponse: DestinyProfileResponse) => {
  const { data } = profileResponse.characters;

  if (!data) {
    return;
  }

  const characterPromises = Object.keys(data).flatMap((key) => loadActivityForCharacter(profile, key));
  const resolvedCharacters = await Promise.all(characterPromises);

  return resolvedCharacters.flat();
};

const loadActivityForCharacter = async (profile: UserInfoCard, character: string) => {
  const activities: DestinyHistoricalStatsActivity[] = [];
  let page = 0;

  while (true) {
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
    page++;
  }

  return activities;
};
