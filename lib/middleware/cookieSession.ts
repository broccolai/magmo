import cookieSession from 'cookie-session';
import { MagmoApiRequest, MagmoApiResponse } from '../../typings/Api';

export const addSession = (req: MagmoApiRequest, res: MagmoApiResponse) => {
  if (!(process.env.SESSION_SECRET_CURRENT && process.env.SESSION_SECRET_PREVIOUS)) {
    throw new Error('Session secrets must be set as env vars `SESSION_SECRET_CURRENT` and `SESSION_SECRET_PREVIOUS`.');
  }

  const sessionSecrets = [process.env.SESSION_SECRET_CURRENT, process.env.SESSION_SECRET_PREVIOUS];

  const includeSession = cookieSession({
    keys: sessionSecrets,
    // TODO: set other options, such as "secure", "sameSite", etc.
    maxAge: 604800000, // week
    httpOnly: true,
    overwrite: true,
  });
  includeSession(req, res, () => {});
};

export default (handler: (req: MagmoApiRequest, res: MagmoApiResponse) => void) => (
  req: MagmoApiRequest,
  res: MagmoApiResponse,
) => {
  try {
    addSession(req, res);
  } catch (e) {
    return res.status(500).json({ error: 'Could not get user session.' });
  }
  return handler(req, res);
};
