import { getCustomToken } from '../../lib/auth/firebaseAdmin';
import commonMiddleware from '../../lib/middleware/commonMiddleware';
import { MagmoApiRequest, MagmoApiResponse } from '../../typings/Api';

const handler = async (req: MagmoApiRequest, res: MagmoApiResponse) => {
  const { token } = req.body;
  const customToken = await getCustomToken(token);

  res.status(200).json({ token: customToken });
};

export default commonMiddleware(handler);
