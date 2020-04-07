import commonMiddleware from '../../lib/middleware/commonMiddleware';
import { MagmoApiRequest, MagmoApiResponse } from '../../typings/Api';

const handler = (req: MagmoApiRequest, res: MagmoApiResponse) => {
  req.session = null;
  res.status(200).json({ status: true });
};

export default commonMiddleware(handler);
