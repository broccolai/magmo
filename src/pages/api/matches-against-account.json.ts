import { APIContext, APIRoute } from 'astro';
import { matchesAgainstAccount } from 'src/service/destiny/bungie-api';
import { DestinyAccount } from 'src/service/destiny/types';

export const MATCHES_AGAINST_ACCOUNT_ROUTE = '/api/matches-against-account.json';

export const POST: APIRoute = async ({ request }: APIContext) => {
  const body = await request.json();

  console.log('starting')

  const account = body.account as DestinyAccount;
  const target = body.target as DestinyAccount;

  const matches = await matchesAgainstAccount(account, target);

  console.log('loaded')

  return new Response(JSON.stringify({ matches }), {
    status: 200,
  });
};
