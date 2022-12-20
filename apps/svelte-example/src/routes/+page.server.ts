import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		items: [
			{
				name: 'im done',
				valid: true,
			},
			{
				name: 'okay',
				valid: false,
			},
		],
	};
}) satisfies PageServerLoad;
