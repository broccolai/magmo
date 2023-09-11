export interface DestinyAccount {
  name: string;
  identifer: number;
}

export interface MatchesPlayed {
  target: DestinyAccount,
  wins: [],
  loses: []
}