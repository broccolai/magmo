import { TRIALS_STATS_ROUTE } from '../pages/api/trials-stats.json.ts';
import { StatsResponse } from './destiny/trials-report.ts';
import { DestinyAccount } from './destiny/types';
import { jsonRequest } from './utilities';

export const trialsStats = async (account: DestinyAccount) => {
  const requestData = jsonRequest('POST', {
    account: account,
  });

  const response: StatsResponse = await fetch(TRIALS_STATS_ROUTE, requestData).then((response) => response.json());

  return response.results[0];
};
