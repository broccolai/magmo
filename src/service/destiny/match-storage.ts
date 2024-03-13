import { PrismaClient} from '@prisma/client';
import {DestinyAccountId} from "./types.ts";
import {RawMatch} from "./match-service.ts";
import {match} from "oxide.ts";
import {DestinyPlayer} from "bungie-api-ts/destiny2";

const prisma = new PrismaClient();

export const lastLoadedMatchIdentifier = async (account: DestinyAccountId): Promise<number> => {
    //todo(josh): fix
    let accountIdAsString = parseInt(account);

    const match = await prisma.match.findFirst({
        where: {
            ownerId: accountIdAsString,
        },
        orderBy: {
            matchId: 'desc'
        }
    });

    if (!match) {
        return -1;
    }

    return match.matchId
}

export const addMatches = async (matches: RawMatch[]) => {
    let test = matches.flatMap(match => {
        let players = [... match.teams.values()];

        return players.flatMap((team) => team);
    });

    await prisma.player.createMany({
        data: test.map((player) => {
            return {
                playerId: player.id,
                name: player.name,
                identifier: player.code
            }
        }),
        skipDuplicates: true
    })

    // await prisma.match.createMany({
    //     data: matches.map(match => {
    //         return {
    //             matchId: match.matchId,
    //             win: true,
    //             teams: {
    //                 createMany: Object.entries(match.teams).map(([teamId, team]) => {
    //                     data: {
    //                         teamId: teamId,
    //                         create
    //                     }
    //                 })
    //             }
    //         }
    //     })
    // })
}

const loadPlayer = (_id: number) => {};


// orderBy: {
//     id: 'desc',
// },