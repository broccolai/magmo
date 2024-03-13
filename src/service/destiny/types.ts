export interface DestinyAccount {
  name: string;
  identifier: number;
}

export type DestinyAccountId = string

export interface MatchesPlayed {
  target: DestinyAccount;
  wins: [];
  loses: [];
}
