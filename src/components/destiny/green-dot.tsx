import { createSignal } from 'solid-js';
import {DestinyAccount, Match} from 'src/service/destiny/types';
import {apiMatchesAgainstAccount} from "../../service/api-layer.ts";

const BROCCOLI_ACCOUNT: DestinyAccount = {
  name: '3 PIGS ON MY TEAM',
  identifier: 2813,
};

const LAFEUILLE_ACCOUNT: DestinyAccount = {
  name: 'jakeygrant',
  identifier: 5349,
};

export const GreenDot = () => {
  const [matches, setMatches] = createSignal<Match[]>([]);

  const printActivity = async () => {
    console.log(1)
    const response = await apiMatchesAgainstAccount(BROCCOLI_ACCOUNT, LAFEUILLE_ACCOUNT);
    console.log(3)

    setMatches(response.matches);
  };

  return (
    <div>
      <button onClick={() => printActivity()}>load broccoli data</button>
      <p>matches played: {matches().length}</p>
    </div>
  );
};
