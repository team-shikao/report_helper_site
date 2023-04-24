import { newtClient } from '$lib/server/newt'

/** @type {import('./$types').PageServerLoad} */
export const get = (async (id) => {
    const resPage = await newtClient.getContent({
        appUid: 'page-386698',
        modelUid: 'single-page',
        contentId: id
    })
    return resPage;
})