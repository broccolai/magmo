import { NextApiRequest, NextApiResponse } from 'next';

export interface MagmoApiRequest extends NextApiRequest {
  session: any;
}

export type MagmoApiResponse = NextApiResponse;
