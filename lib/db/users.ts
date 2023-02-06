import clientPromise from './mongodb'


export interface UserDocument {
  name: string;
  amount: number;
}

export const getUsers = async (): Promise<UserDocument[]> => {
  const client = await clientPromise;

  return await client
    .db('test1')
    .collection('users')
    .find<UserDocument>({})
    .toArray();
}

export const addUser = async (name: string, amount: number): Promise<string | null> => {
  const client = await clientPromise;

  const result = await client
    .db('test1')
    .collection('users')
    .insertOne({ name, amount });

  if (result.acknowledged) {
    return result.insertedId.toString();
  }

  return null;
}
