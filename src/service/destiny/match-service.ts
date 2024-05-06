import {DestinyAccount, DestinyAccountId, Match} from "./types.ts";
import {LoadedProfile, loadPostGameReports, loadProfile} from "./bungie-api.ts";
import {addMatches, loadMatchesAgainst} from "./match-storage.ts";

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

export const fetchTrialsMatchesAgainst = async (account: DestinyAccount, target: DestinyAccount) => {
    console.log("load begin")
    const profile = await loadProfile(account);
    const targetId = await loadProfile(target).then(data => data.profile.membershipId);

    const oldMatches = await loadMatchesAgainst(profile.profile.membershipId, targetId);
    const newMatches = await fetchTrialsMatches(profile);

    const filteredMatches = newMatches.filter((match) => Array.from(match.teams.values())
        .flat()
        .includes(targetId)
    )

    return oldMatches.concat(filteredMatches)
}


export const fetchTrialsMatches = async (profile: LoadedProfile) => {
    const reports = await loadPostGameReports(profile);

    const ownerId = profile.profile.membershipId;

    const matches: Match[] = reports.map((report) => {
        const matchId = report.activityDetails.instanceId;
        const win = true;

        const teams = new Map<number, string[]>();

        report.entries.forEach((entry) => {
            let team = entry.values.team.basic.value;

            if (!teams.has(team)) {
                teams.set(team, []);
            }

            let destinyInfo = entry.player.destinyUserInfo;

            teams.get(team).push(destinyInfo.membershipId);
        })

        return {
            matchId,
            ownerId,
            win,
            teams
        }
    });

    await addMatches(matches);

    return matches
}
