<script>
    import { page } from '$app/stores';

    import { filePath } from '$lib/download';
    function download() {
        gtag('send', 'event', $page.route.id, 'download', 'downloadButton');
        setInterval(function () {window.location.assign('/download');}, 1000);
    }
</script>

<div class="downloadWrap">
    <a
        href="{filePath}"
        download
        class="downloadAppButton"
        on:click={download}
    >
        <svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 20.5h13.498a.75.75 0 0 1 .101 1.493l-.101.007H5.25a.75.75 0 0 1-.102-1.494l.102-.006h13.498H5.25Zm6.633-18.498L12 1.995a1 1 0 0 1 .993.883l.007.117v12.59l3.294-3.293a1 1 0 0 1 1.32-.083l.094.084a1 1 0 0 1 .083 1.32l-.083.094-4.997 4.996a1 1 0 0 1-1.32.084l-.094-.083-5.004-4.997a1 1 0 0 1 1.32-1.498l.094.083L11 15.58V2.995a1 1 0 0 1 .883-.993L12 1.995l-.117.007Z"/></svg>
        ダウンロード
    </a>
    <p>最新バージョンv0.1</p>
    <p>Mac OSのみ対応</p>
</div>


<style>
    div.downloadWrap {
        width: fit-content;
        display: block;
        margin: 20px auto;
    }
    div.downloadWrap a.downloadAppButton {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        border-radius: 50px;
        padding: 10px 20px;
        background-color: rgb(29, 197, 255);
        color: #ffffff;
    }
    div.downloadWrap a.downloadAppButton svg {height: 20px;}
    div.downloadWrap p {
        margin: 3px 0 0 0;
        text-align: center;
        color: #898989;
        font-size: .8rem;
    }
</style>