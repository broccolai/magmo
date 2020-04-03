import { DocumentContext } from 'next/document';
import { MagmoApiRequest } from './Api';
import { AuthUserInfoData } from './Generic';

export interface MagmoContext extends DocumentContext {
  customData: AuthUserInfoData;
  req: MagmoApiRequest;
}
