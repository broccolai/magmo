import { FaBrandsTeamspeak } from "@aminya/solid-icons/fa";

export interface DestinyAccount {
  name: string;
  identifer: number;
}

export interface MatchesPlayed {
  target: DestinyAccount,
  wins: [],
  loses: []
}

export interface Team {
  players: number[]
}

export interface TrialsMatch {
  teams: Team[]

  contains: (player: number) => boolean
  shareTeam: (player: number, target: number) => boolean
} 
