import { DestinyHistoricalStatsActivity } from 'bungie-api-ts/destiny2';
import { ACTIVITY_ROUTE } from 'src/pages/api/activity.json';
import { DestinyAccount } from './destiny/types';
import { jsonRequest } from './utilities';
import { MATCHES_AGAINST_ACCOUNT_ROUTE } from 'src/pages/api/matches-against-account.json';

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
    target: target
  })

  const response = await fetch(MATCHES_AGAINST_ACCOUNT_ROUTE, requestData).then((response) => response.json())

  return response as { matches: number }
};
