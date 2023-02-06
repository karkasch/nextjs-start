// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getUsers, addUser } from '../../../lib/db/users';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ name: string | null; }>
) {
  console.log('REQ', req.query);

  if (req.query['op'] === 'add') {
    console.log('Adding...');
    const result = await addUser('Arik', Date.now());
    res.status(200).json({ name: result });
    return;
  }

  const users = await getUsers();

  res.status(200).json({ name: JSON.stringify(users) });
}
