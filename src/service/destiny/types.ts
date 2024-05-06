export interface DestinyAccount {
  name: string;
  identifier: number;
}

export type DestinyAccountId = string

export interface Match {
  matchId: string,
  ownerId: string,
  win: boolean,
  teams: Map<number, string[]>
}

export interface MatchesPlayed {
  target: DestinyAccount;
  wins: [];
  loses: [];
}
