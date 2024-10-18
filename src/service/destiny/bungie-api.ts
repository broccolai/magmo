//@ts-nocheck
import {
  BungieMembershipType,
  getProfile,
  searchDestinyPlayerByBungieName,
} from 'bungie-api-ts/destiny2';
import { httpClient, throttledHttpClient } from './bungie-http-client';
import { DestinyAccount } from './types';

const CLIENT = throttledHttpClient(httpClient);

export const loadProfile = async (account: DestinyAccount) => {
  const searchResponse = await searchDestinyPlayerByBungieName(
    CLIENT,
    {
      membershipType: BungieMembershipType.All,
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

