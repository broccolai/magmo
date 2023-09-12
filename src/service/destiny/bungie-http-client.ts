import { type HttpClient, type HttpClientConfig, PlatformErrorCodes, type ServerResponse } from 'bungie-api-ts/destiny2';
import { BungieError, HttpStatusError } from './utilities';
import { Unit, delay } from '../utilities';

const API_KEY = import.meta.env.BUNGIE_API_KEY;

const BUNGIE_PLATFORM_THROTTLE_CODES = [
  PlatformErrorCodes.ThrottleLimitExceededMinutes,
  PlatformErrorCodes.ThrottleLimitExceededMomentarily,
  PlatformErrorCodes.ThrottleLimitExceededSeconds,
  PlatformErrorCodes.DestinyThrottledByGameServer,
  PlatformErrorCodes.PerApplicationThrottleExceeded,
  PlatformErrorCodes.PerApplicationAnonymousThrottleExceeded,
  PlatformErrorCodes.PerApplicationAuthenticatedThrottleExceeded,
  PlatformErrorCodes.PerUserThrottleExceeded,
];

const MAX_THROTTLE = 5 * 60;

export const httpClient = async <T>(config: HttpClientConfig) => {
  let { url } = config;

  if (config.params) {
    const params = new URLSearchParams(config.params);

    url = [url, params].join('?');
  }

  const fetchOptions = new Request(url, {
    method: config.method,
    body: config.body ? JSON.stringify(config.body) : null,
    headers: {
      'X-API-Key': API_KEY,
      ...(config.body ? { 'Content-Type': 'application/json' } : undefined),
    },
    credentials: 'omit',
  });

  //todo(josh): improve error handling
  const response = await fetch(fetchOptions);
  let data: T;
  let parseError: Error | undefined;

  try {
    data = (await response.json()) as T;
  } catch (e) {
    parseError = convertToError(e);
  }

  throwBungieError(data, fetchOptions);

  await throwHttpError(response);

  if (parseError) {
    throw parseError;
  }

  // this should never happen
  if (!data) {
    throw Error('data is undefined');
  }

  return data;
};

let timesThrottled = 0;

export function throttledHttpClient(httpClient: HttpClient): HttpClient {
  return async <T>(config: HttpClientConfig): Promise<T> => {
    await throttle();

    try {
      const result = await httpClient<T>(config);

      timesThrottled = Math.floor(timesThrottled / 2);

      return result;
    } catch (e) {
      if (e.code in BUNGIE_PLATFORM_THROTTLE_CODES) {
        timesThrottled++;
      }

      throw e;
    }
  };
}

const throwHttpError = async (response: Response) => {
  if (response.status < 200 || response.status >= 400) {
    throw await toHttpStatusError(response);
  }
};

const toHttpStatusError = async (response: Response) => {
  try {
    const responseBody = await response.text();
    return new HttpStatusError(response, responseBody);
  } catch (_) {
    return new HttpStatusError(response);
  }
};

function throwBungieError<T>(serverResponse: T | undefined, request: Request) {
  if (!serverResponse || typeof serverResponse !== 'object') {
    return serverResponse;
  }

  // There's an alternate error response that can be returned during maintenance
  const errorMessage = 'error' in serverResponse && 'error_description' in serverResponse && (serverResponse.error_description as string);
  if (errorMessage) {
    throw new BungieError(
      {
        Message: errorMessage,
        ErrorCode: PlatformErrorCodes.DestinyUnexpectedError,
        ErrorStatus: errorMessage,
      },
      request,
    );
  }

  if ('ErrorCode' in serverResponse && serverResponse.ErrorCode !== PlatformErrorCodes.Success) {
    throw new BungieError(serverResponse as Partial<ServerResponse<unknown>>, request);
  }

  return serverResponse;
}

const convertToError = (e: unknown): Error => {
  if (e instanceof Error) {
    return e;
  }
  return new Error(JSON.stringify(e));
};

const throttle = async () => {
  if (timesThrottled === 0) {
    return;
  }

  const throttleDuration = Math.min(timesThrottled, MAX_THROTTLE);

  await delay(throttleDuration, Unit.SECONDS);
};
