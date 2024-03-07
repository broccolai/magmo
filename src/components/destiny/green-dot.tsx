import { createSignal } from 'solid-js';
import { apiLoadActivity, apiMatchesAgainstAccount } from 'src/service/api-layer';
import { matchesAgainstAccount } from 'src/service/destiny/bungie-api';
import { DestinyAccount } from 'src/service/destiny/types';

const BROCCOLI_ACCOUNT: DestinyAccount = {
  name: 'broccoli',
  identifer: 679,
};

const LAFEUILLE_ACCOUNT: DestinyAccount = {
  name: 'LaFeuille',
  identifer: 3066,
};

export const GreenDot = () => {
  const [matchesPlayed, setMatchesPlayed] = createSignal(0);

  const printActivity = async () => {
    const startTime = performance.now();

    const activity = await apiMatchesAgainstAccount(BROCCOLI_ACCOUNT, LAFEUILLE_ACCOUNT);

    const endTime = performance.now();
    const duration = (endTime - startTime) / 1000;

    setMatchesPlayed(activity.matches);
  };

  return (
    <div>
      <button onClick={() => printActivity()}>load broccoli data</button>
      <p>matches played: {matchesPlayed()}</p>
    </div>
  );
};
