import { APIRoute, APIContext } from 'astro';
import { loadActivity } from 'src/service/destiny/bungie-api';
import { DestinyAccount } from 'src/service/destiny/types';

export const ACTIVITY_ROUTE = '/api/activity.json';

export const POST: APIRoute = async ({ request }: APIContext) => {
  console.log(request);
  const body = await request.json();
  const account = body.account as DestinyAccount;

  const activity = await loadActivity(account);

  return new Response(JSON.stringify({ activity }), {
    status: 200,
  });
};
