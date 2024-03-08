import { APIContext, APIRoute } from 'astro';
import { loadActivityForProfile, loadProfile } from 'src/service/destiny/bungie-api';
import { DestinyAccount } from 'src/service/destiny/types';

export const ACTIVITY_ROUTE = '/api/activity.json';

export const POST: APIRoute = async ({ request }: APIContext) => {
  const body = await request.json();
  const account = body.account as DestinyAccount;

  const { profile, profileResponse } = await loadProfile(account);
  const activity = await loadActivityForProfile(profile, profileResponse);

  return new Response(JSON.stringify({ activity }), {
    status: 200,
  });
};
