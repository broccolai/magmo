import { DestinyHistoricalStatsActivity } from 'bungie-api-ts/destiny2';
import { DestinyAccount } from './destiny/types';
import { ACTIVITY_ROUTE } from 'src/pages/api/activity.json';

export const apiLoadActivity = async (account: DestinyAccount) => {
  const requestData = {
    account: account,
  };

  const response = await fetch(ACTIVITY_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  }).then((response) => response.json());

  return response.activity as DestinyHistoricalStatsActivity[];
};
