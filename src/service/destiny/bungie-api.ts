import { DestinyProfileResponse, getActivityHistory, getLeaderboardsForCharacter } from 'bungie-api-ts/destiny2';
import type { HttpClient, HttpClientConfig } from 'bungie-api-ts/http';
import * as process from 'process';
import type { UserInfoCard } from 'bungie-api-ts/user';
import { rotate } from 'astro/dist/assets/services/vendor/squoosh/impl';

const API_KEY = '??';

const client = createHttpClient();

const loadActivityForProfile = async (profile: UserInfoCard, profileResponse: DestinyProfileResponse) => {
  const { data } = profileResponse.characters;

  if (!data) {
    return;
  }

  return Object.keys(data)
    .flatMap((key) => loadActivityForCharacter(profile, key)) 
};

const loadActivityForCharacter = async (profile: UserInfoCard, character: string) => {
  const activities = []
  let page = 0;

  while (true) {
    const history = await getActivityHistory(client, {
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

    activities.push(...history.Response.activities);
    page++;

    await delay(history.ThrottleSeconds);
  }

  return activities
};

const delay = async (seconds: number) => {
  if (seconds === 0) {
    return;
  }

  await new Promise((r) => {
    setTimeout(r, seconds * 1000);
  });
};
