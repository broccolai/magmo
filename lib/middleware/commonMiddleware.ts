import { MagmoApiRequest, MagmoApiResponse } from '../../typings/Api';
import cookieSession from './cookieSession';
import cookieSessionRefresh from './cookieSessionRefresh';

export default (handler: (req: MagmoApiRequest, res: MagmoApiResponse) => void) =>
  cookieSession(cookieSessionRefresh(handler));
