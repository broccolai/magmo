import { APIContext, APIRoute } from 'astro';
import { loadProfile } from '../../service/destiny/bungie-api.ts';
import { DestinyAccount } from '../../service/destiny/types.ts';

export const TRIALS_STATS_ROUTE = '/api/trials-stats.json';

//todo: add middleware for error handling
export const POST: APIRoute = async ({ request }: APIContext) => {
  try {
    const body = await request.json();
    const account = body.account as DestinyAccount;

    const { profile } = await loadProfile(account);

    const trialsStats = await fetch(`https://api.trialsofthenine.com/player/${profile.membershipId}`, {
      method: 'GET',
    }).then((res) => res.json());

    return new Response(JSON.stringify(trialsStats), {
      status: 200,
    });
  } catch (error) {
    console.warn('error occured in /trials-stats endpoint', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
};
