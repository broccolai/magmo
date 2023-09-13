import { DestinyPostGameCarnageReportData } from 'bungie-api-ts/destiny2';
import { TrialsTeam } from './TrialsTeam';

export interface TrialsMatch {
  teams: [TrialsTeam, TrialsTeam];

  contains: (target: number) => boolean;
  shareTeam: (player: number, target: number) => boolean;
}

export const trialsMatchFromBungieDefinition = (pcgr: DestinyPostGameCarnageReportData) => {
  if (pcgr.teams.length !== 2) {
    throw new Error('pcgr does not appear to be a trials match');
  }

  const teams = [pcgr.teams[0], pcgr.teams[1]];
  const _mappedTeams = teams.map((_team) => {
    // team.
  });
};

class SimpleTrialsMatch implements TrialsMatch {
  teams: [TrialsTeam, TrialsTeam];
  winnerIndex: 0 | 1;

  constructor(teams: [TrialsTeam, TrialsTeam], winnerIndex: 0 | 1) {
    this.teams = teams;
    this.winnerIndex = winnerIndex;
  }

  contains = (target: number) => {
    return this.teams.flatMap((team) => team.players).includes(target);
  };

  // currently assumes the target & player are in this match.
  shareTeam = (player: number, target: number) => {
    const playersTeam = this.teams.find((team) => player in team.players);

    return playersTeam !== undefined && target in playersTeam.players;
  };
}
