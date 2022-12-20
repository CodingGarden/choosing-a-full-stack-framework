import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prismaClient from 'db';
import * as auth from '#auth';

const runtimeConfig = useRuntimeConfig();

export default auth.NuxtAuthHandler({
  adapter: PrismaAdapter(prismaClient),
  secret: runtimeConfig.authSecret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: runtimeConfig.googleClientId,
      clientSecret: runtimeConfig.googleClientSecret,
    }),
  ],
});
