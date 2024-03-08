import { createSignal } from 'solid-js';
import { apiMatchesAgainstAccount } from 'src/service/api-layer';
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
    const activity = await apiMatchesAgainstAccount(BROCCOLI_ACCOUNT, LAFEUILLE_ACCOUNT);

    setMatchesPlayed(activity.matches);
  };

  return (
    <div>
      <button onClick={() => printActivity()}>load broccoli data</button>
      <p>matches played: {matchesPlayed()}</p>
    </div>
  );
};
