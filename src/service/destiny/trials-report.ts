export interface PlayerStats {
  displayName: string;
  kills: number;
  deaths: number;
}

export interface StatsResponse {
  count: number;
  results: PlayerStats[];
}
