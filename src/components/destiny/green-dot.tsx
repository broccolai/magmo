import { apiLoadActivity } from 'src/service/api-layer';
import { DestinyAccount } from 'src/service/destiny/types';

const BROCCOLI_ACCOUNT: DestinyAccount = {
  name: 'broccoli',
  identifer: 679,
};

export const GreenDot = () => {
  const printActivity = async () => {
    const startTime = performance.now();

    const activity = await apiLoadActivity(BROCCOLI_ACCOUNT);

    const endTime = performance.now();
    const duration = (endTime - startTime) / 1000;

    console.log('size', activity?.length);
    console.log(`printActivity took ${duration} seconds`);
  };

  return <button onClick={() => printActivity()}>load broccoli data</button>;
};
