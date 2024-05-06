import { APIContext, APIRoute } from 'astro';
import { DestinyAccount } from 'src/service/destiny/types';
import {fetchTrialsMatchesAgainst} from "../../service/destiny/match-service.ts";

export const MATCHES_AGAINST_ACCOUNT_ROUTE = '/api/matches-against-account.json';

export const POST: APIRoute = async ({ request }: APIContext) => {
  const body = await request.json();

  const account = body.account as DestinyAccount;
  const target = body.target as DestinyAccount;

  const matches = await fetchTrialsMatchesAgainst(account, target);

  return new Response(JSON.stringify({ matches }), {
    status: 200,
  });
};
