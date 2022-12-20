import prismaClient from 'db';
import SvelteKitAuth from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	// @ts-ignore
	adapter: PrismaAdapter(prismaClient),
	debug: true,
	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}),
	],
	session: {
		strategy: 'database',
	},
});
