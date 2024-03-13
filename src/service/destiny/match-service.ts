import {DestinyAccount} from "./types.ts";
import {loadPostGameReports, loadProfile} from "./bungie-api.ts";
import {addMatches} from "./match-storage.ts";

export interface PlayerTempObject {
    id: string;
    name: string;
    code: number;
}

export interface RawMatch {
    matchId: string,
    ownerId: string,
    win: boolean,
    teams: Map<number, PlayerTempObject[]>
}

export const fetchTrialsMatches = async (account: DestinyAccount) => {
    const profile = await loadProfile(account);
    const reports = await loadPostGameReports(profile);

    const ownerId = profile.profile.membershipId;

    const matches: RawMatch[] = reports.map((report) => {
        const matchId = report.activityDetails.instanceId;
        const win = true;

        const teams = new Map<number, PlayerTempObject[]>();

        report.entries.forEach((entry) => {
            let team = entry.values.team.basic.value;

            if (!teams.has(team)) {
                teams.set(team, []);
            }

            let destinyInfo = entry.player.destinyUserInfo;

            teams.get(team).push({
                id: destinyInfo.membershipId,
                name: destinyInfo.bungieGlobalDisplayName,
                code: destinyInfo.bungieGlobalDisplayNameCode ?? 0
            });
        })

        return {
            matchId,
            ownerId,
            win,
            teams
        }
    });

    addMatches(matches);

    return matches
}
