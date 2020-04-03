import commonMiddleware from '../../lib/middleware/commonMiddleware';

const handler = (req, res) => {
  //   console.log('LOGOUT API REQ ' + typeof req + ' AND RES ' + typeof res);
  req.session = null;
  res.status(200).json({ status: true });
};

export default commonMiddleware(handler);
