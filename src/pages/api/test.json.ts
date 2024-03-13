import {APIRoute} from "astro";
import {lastLoadedMatchIdentifier} from "../../service/destiny/match-storage.ts";
import {fetchTrialsMatches} from "../../service/destiny/match-service.ts";

export const ACTIVITY_ROUTE = '/api/test.json';

export const POST: APIRoute = async () => {
    const results = await fetchTrialsMatches({
        name: "3 PIGS ON MY TEAM",
        identifier: 2813
    });

    return new Response(JSON.stringify({ results }), {
        status: 200,
    });
};
