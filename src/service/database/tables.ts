export interface DatabaseTables {
    match: MatchTable
    player_team: PlayerTeamTable
}

export interface MatchTable {
    match_id: string,
    owner_id: string,
    win: number,
    team_one_id: number
    team_two_id: number
}

//todo: gross
export interface PlayerTeamTable {
    match_id: string,
    team_id: number,
    player_id: string
}