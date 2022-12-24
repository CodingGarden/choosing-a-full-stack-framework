import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import prismaClient from 'db';
import type { User } from '@prisma/client';
import { authOptions } from './api/auth/[...nextauth]';

type HomeProps = {
  users: null | User[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  let users = null;
  if (session?.user) {
    users = await prismaClient.user.findMany();
  }
  return {
    props: {
      users,
    },
  };
};

export default function Home({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Next.js Example</title>
        <meta name="description" content="Next.js example app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-xl">
        <h1>Hello World</h1>
        {session?.user ? <h2>{session.user.name}</h2> : <h2>NOT LOGGED IN</h2>}
        {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
      </main>
    </>
  );
}
