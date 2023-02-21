// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getUsers, UserDocument } from '../../../lib/db/users';

// type Data = {
//   id: string;
//   name: string | null;
//   isAuthorized: boolean;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDocument[]>
) {
  // res.status(200).json({ id: '0', name: null, isAuthorized: false });

  const users = await getUsers();
  res.status(200).json(users);
}
