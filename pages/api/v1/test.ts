// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ name: string; }>
) {

  const client = await clientPromise;

  const db = client.db('test1');

  const xx = db.collection('users').find({});

  res.status(200).json({ name: 'got' });
}
