<script>
    import { filePath } from '$lib/download';

    /** @type {import('./$types').PageData} */
    export let data;

    function download() {gtag('send', 'event', '/download', 'download', 'downloadButton');}
</script>
<section id="mainContent">
    <div id="thankyou">
        <h1>ダウンロードありがとうございます!!</h1>
        <p>ダウンロードできない場合は<a href="{filePath}" download on:click={download}>こちら</a></p>
    </div>
    { @html data.page.mainContent }
</section>

<style>
    div#thankyou {
        text-align: center;
    }
</style>