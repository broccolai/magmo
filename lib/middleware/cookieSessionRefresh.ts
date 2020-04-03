import { MagmoApiRequest, MagmoApiResponse } from '../../typings/Api';

export default (handler: (req: MagmoApiRequest, res: MagmoApiResponse) => void) => (
  req: MagmoApiRequest,
  res: MagmoApiResponse,
) => {
  if (req.session) {
    req.session.nowInMinutes = Math.floor(Date.now() / 60e3);
  }
  handler(req, res);
};
