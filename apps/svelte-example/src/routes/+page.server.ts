import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		items: [
			{
				name: 'im done',
				valid: true,
				awesome: true,
			},
			{
				name: 'okay',
				valid: false,
				awesome: true,
			},
		],
	};
}) satisfies PageServerLoad;
