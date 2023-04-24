<script>
    import { filePath } from '$lib/download';

    /** @type {import('./$types').PageData} */
    export let data;
</script>
<section id="mainContent">
    { @html data.page.mainContent }
</section>

<style>
    div#thankyou {
        text-align: center;
    }
</style>