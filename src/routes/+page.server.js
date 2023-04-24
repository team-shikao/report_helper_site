import { get } from '$lib/server/page.js'
/** @type {import('./$types').PageServerLoad} */
export const load = (async () => {return {page: await get('6444f30519b83a094f253009')}})