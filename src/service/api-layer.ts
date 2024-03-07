import { DestinyHistoricalStatsActivity } from 'bungie-api-ts/destiny2';
import { ACTIVITY_ROUTE } from 'src/pages/api/activity.json';
import { MATCHES_AGAINST_ACCOUNT_ROUTE } from 'src/pages/api/matches-against-account.json';
import { TRIALS_STATS_ROUTE } from '../pages/api/trials-stats.json.ts';
import { DestinyAccount } from './destiny/types';
import { jsonRequest, jsonRequestNew } from './utilities';
import { StatsResponse } from './destiny/trials-report.ts';

export const apiLoadActivity = async (account: DestinyAccount) => {
  const requestData = jsonRequest({
    account: account,
  });

  const response = await fetch(ACTIVITY_ROUTE, requestData).then((response) => response.json());

  return response.activity as DestinyHistoricalStatsActivity[];
};

export const apiMatchesAgainstAccount = async (account: DestinyAccount, target: DestinyAccount) => {
  const requestData = jsonRequest({
    account: account,
    target: target,
  });

  const response = await fetch(MATCHES_AGAINST_ACCOUNT_ROUTE, requestData).then((response) => response.json());

  return response as { matches: number };
};

export const trialsStats = async (account: DestinyAccount) => {
  const requestData = jsonRequestNew('POST', {
    account: account,
  });

  const response: StatsResponse = await fetch(TRIALS_STATS_ROUTE, requestData).then((response) => response.json());

  return response.results[0];
};
