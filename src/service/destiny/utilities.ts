import type { PlatformErrorCodes, ServerResponse } from 'bungie-api-ts/destiny2';

export class HttpStatusError extends Error {
  status: number;
  responseBody: string | undefined;

  constructor(response: Response, responseBody?: string) {
    super(responseBody ?? response.statusText);
    this.status = response.status;
    this.responseBody = responseBody;
  }
}

export class BungieError extends Error {
  code: PlatformErrorCodes | undefined;
  status: string | undefined;
  endpoint: string;

  constructor(response: Partial<Pick<ServerResponse<unknown>, 'Message' | 'ErrorCode' | 'ErrorStatus'>>, request: Request) {
    super(response.Message ?? 'Unknown Bungie Error');
    this.name = 'BungieError';
    this.code = response.ErrorCode;
    this.status = response.ErrorStatus;
    this.endpoint = request.url;
  }
}
