import {DestinyAccountId, Match} from "./types.ts";
import {db} from "../database/database.ts";

export const lastLoadedMatchIdentifier = async (account: DestinyAccountId): Promise<string> => {
    const match = await db.selectFrom("match")
        .where("owner_id", "=", account)
        .orderBy("match_id desc")
        .selectAll()
        .executeTakeFirst();

    if (!match) {
        return "0";
    }

    return match.match_id
}

export const addMatches = async (matches: Match[]) => {
    //todo(perf): better batching
    matches.forEach(addMatch)
}

const addMatch = async (match: Match) => {
    const players = Array.from(match.teams).flatMap(([id, players]) =>
        players.map(player => ({match_id: match.matchId, team_id: id, player_id: player}))
    );

    await db.insertInto("player_team")
        .values(players)
        .onConflict((conflict) => conflict.doNothing())
        .execute()

    const teams = Array.from(match.teams.keys());

    if (teams.length > 2) {
        console.error("more than 2 teams detected in a trials match {}", match.matchId)
    }

    await db.insertInto("match")
        .values({
            match_id: match.matchId,
            owner_id: match.ownerId,
            win: match.win ? 1 : 0,
            team_one_id: teams[0]!!,
            team_two_id: teams[1]!!
        })
        .execute()
}

export const loadMatchesAgainst = async (account: DestinyAccountId, target: DestinyAccountId): Promise<Match[]> => {
    const matchesWithPlayer = await db.selectFrom('player_team')
        .select('match_id')
        .where('player_id', '=', target)
        .execute()
        .then((matches => matches.map(match => match.match_id)));

    const data = await db.selectFrom('match')
        .innerJoin('player_team', 'player_team.match_id', 'match.match_id')
        .where('match.owner_id', '=', account)
        .where('match.match_id', 'in', matchesWithPlayer)
        .selectAll()
        .execute();

    console.log("len", data.length)

    const matches: Record<string, Match> = {};

    data.forEach(row => {
        if (!matches[row.match_id]) {
            matches[row.match_id] = {
                matchId: row.match_id,
                ownerId: row.owner_id,
                win: row.win == 1,
                teams: new Map()
            };
        }

        const match = matches[row.match_id];
        const teamPlayers = match.teams.get(row.team_id) || [];
        teamPlayers.push(row.player_id);
        match.teams.set(row.team_id, teamPlayers);
    });

    return Object.values(matches)
}


// orderBy: {
//     id: 'desc',
// },