import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '../../../lib/session';

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    // get user from database then:
    req.session.user = {
      id: 230,
      admin: true,
      name: 'Derek S',
    };
    await req.session.save();
    res.send({ ok: true });
  },
  sessionOptions,
);
