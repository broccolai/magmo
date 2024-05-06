import { DestinyHistoricalStatsActivity } from 'bungie-api-ts/destiny2';
import { StatsResponse } from './destiny/trials-report.ts';
import {DestinyAccount, Match} from './destiny/types';
import { jsonRequest, jsonRequestNew } from './utilities';

export const apiLoadActivity = async (account: DestinyAccount) => {
  const requestData = jsonRequest({
    account: account,
  });

  const response = await fetch('/api/activity.json', requestData).then((response) => response.json());

  return response.activity as DestinyHistoricalStatsActivity[];
};

export const apiMatchesAgainstAccount = async (account: DestinyAccount, target: DestinyAccount) => {
  const requestData = jsonRequest({
    account: account,
    target: target,
  });

  const response = await fetch('/api/matches-against-account.json', requestData).then((response) => response.json());

  return response as { matches: Match[] };
};

export const trialsStats = async (account: DestinyAccount) => {
  const requestData = jsonRequestNew('POST', {
    account: account,
  });

  const response: StatsResponse = await fetch('/api/trials-stats.json', requestData).then((response) => response.json());

  return response.results[0];
};
