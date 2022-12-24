// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { unstable_getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next';
import prismaClient from 'db';
import type { User } from '@prisma/client';
import { authOptions } from './auth/[...nextauth]';

type Data = {
  users: User[];
};

type ErrorMessage = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorMessage>
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session?.user) {
    const users = await prismaClient.user.findMany();
    return res.status(200).json({ users });
  }
  return res.status(401).json({ message: 'Un-Authorized' });
}
