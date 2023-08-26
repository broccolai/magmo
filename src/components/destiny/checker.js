import {
  awaInitializeRequest,
  BungieMembershipType,
  getActivityHistory, getDestinyAggregateActivityStats, getPostGameCarnageReport, getProfile,
  searchDestinyPlayerByBungieName,
} from 'bungie-api-ts/destiny2';
import batchRequest from 'batch-request-js';

const API_KEY = "KEY";

console.log('green dot check debug');

function createHttpClient(
  apiKey,
  withCredentials,
) {
  return async (config) => {
    let { url } = config;

    if (config.params) {
      for (const key in config.params) {
        typeof config.params[key] === 'undefined' && delete config.params[key];
      }
      url = `${url}?${new URLSearchParams(config.params).toString()}`;
    }

    const fetchOptions = new Request(url, {
      method: config.method,
      body: config.body ? JSON.stringify(config.body) : undefined,
      headers: {
        'X-API-Key': apiKey,
        ...(config.body && { 'Content-Type': 'application/json' }),
      },
      credentials: withCredentials ? 'include' : 'omit',
    });

    const response = await fetch(fetchOptions);
    return await response.json();
  };
}

const client = createHttpClient(API_KEY, false);

const searchResponse = await searchDestinyPlayerByBungieName(
  client,
  {
    membershipType: BungieMembershipType.All,
  },
  {
    displayName: 'broccoli',
    displayNameCode: 679,
  },
);

const search = searchResponse.Response[0]

console.log('search', {
  type: search.membershipType,
  id: search.membershipId
});

const profileRequest = await getProfile(client, {
  destinyMembershipId: search.membershipId,
  membershipType: search.membershipType,
  components: [ 100, 200 ]
})

const profile = profileRequest.Response

let titan

for (let charactersKey in profile.characters.data) {
  const character = profile.characters.data[charactersKey]

  if (character.classType == 0) {
    titan = character
  }
}

let activities = []
let page = 0

while (true) {
  const history = await getActivityHistory(
    client,
    {
      characterId: titan.characterId,
      membershipType: search.membershipType,
      destinyMembershipId: search.membershipId,
      count: 250,
      mode: 84,
      page: page
    }
  )

  if (history.ErrorStatus !== 'Success' || !history.Response.activities) {
    break
  }


  console.log('recorded activity history page', {
    page: page,
    count: history.Response.activities.length
  })

  activities.push(...history.Response.activities)
  page++

  await new Promise(r => setTimeout(r, history.ThrottleSeconds * 1000));
}

await new Promise(r => setTimeout(r, 3000));

const activityIds2 = activities.map((activity) => activity.activityDetails.instanceId)

const activityIds = activityIds2

const { error, data } = await batchRequest(activityIds,  (id) => {
   return getPostGameCarnageReport(client, {
    activityId: id
  }).then((res) => res.Response)
}, { batchSize: 25, delay: 1000 })

const matchesAgainst = data.filter((data) => {
  if (!data) {
    return false
  }
  return data.entries.some((entry) => {
    return entry.player?.destinyUserInfo?.bungieGlobalDisplayName == 'LaFeuille'
  })
})

matchesAgainst.map((m) => m.teams).forEach((e) => {
  console.log(e)
})

console.log('target', 'LaFeuille')
console.log('matches found', matchesAgainst.length)

