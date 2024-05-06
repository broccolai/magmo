import {APIRoute} from "astro";
import {lastLoadedMatchIdentifier} from "../../service/destiny/match-storage.ts";
import {loadProfile} from "../../service/destiny/bungie-api.ts";

export const ACTIVITY_ROUTE = '/api/test-two.json';

export const POST: APIRoute = async () => {
    const loadedProfile = await loadProfile({
        name: "3 PIGS ON MY TEAM",
        identifier: 2813
    });

    const results = await lastLoadedMatchIdentifier(loadedProfile.profile.membershipId);

    return new Response(JSON.stringify({ results }), {
        status: 200,
    });
};
