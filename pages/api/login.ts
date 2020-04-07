import { verifyIdToken } from '../../lib/auth/firebaseAdmin';
import commonMiddleware from '../../lib/middleware/commonMiddleware';
import { MagmoApiRequest, MagmoApiResponse } from '../../typings/Api';

const handler = async (req: MagmoApiRequest, res: MagmoApiResponse) => {
  if (!req.body) {
    return res.status(400);
  }

  const { token } = req.body;

  return await verifyIdToken(token)
    .then((decodedToken) => {
      req.session.decodedToken = decodedToken;
      req.session.token = token;
      return decodedToken;
    })
    .then((decodedToken) => {
      return res.status(200).json({ status: true, decodedToken });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

export default commonMiddleware(handler);
