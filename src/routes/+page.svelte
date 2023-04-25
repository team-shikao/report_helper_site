<script>
	import ButtonDownload from '$lib/ButtonDownload.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section id="top" style="background-image: url({ data.page.topImage.src });">
    <div id="top_wave_wrap">
        <div id="topTextWrap">
            <span>あなたのレポートを</span>
            <span>一つ上の<span>グレード</span>へ</span>
        </div>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"  preserveAspectRatio="none">
            <path
                d="M 0,400 C 0,400 0,200 0,200 C 135.46666666666664,226.26666666666665 270.9333333333333,252.53333333333333 427,242 C 583.0666666666667,231.46666666666667 759.7333333333333,184.13333333333333 932,171 C 1104.2666666666667,157.86666666666667 1272.1333333333332,178.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z"
                stroke="none"
                stroke-width="0"
                fill="#ffffff"
                class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
        </svg>
    </div>
</section>
<section id="mainContent">
    { @html data.page.mainContent }
    <ButtonDownload />
</section>


<style>
    section#top {
        z-index: 100;
        padding: 80px 0 0 0;
        background-size: cover;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 250px;
        position: relative;
    }
    section#top div#topTextWrap {
        position: relative;
        height: fit-content;
        transform: translate(-2%, 40%);
        margin-left: 10%;
        background: #ffffff;
        padding: 20px 30px;
        border-radius: 0 10px 10px 10px;
    }

    section#top div#topTextWrap:before {
        position: absolute; top: 0; left: 0;
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 30px 30px 0 0;
        border-color: rgb(29, 197, 255) transparent transparent transparent;
    }
    section#top div#topTextWrap span {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 2px 0;
        width: fit-content;
    }
    section#top div#topTextWrap span span{
        padding: 0; margin: 0 2px;
        display: inline-block; color: rgb(29, 197, 255);
        font-size: 1.3rem;
    }
    section#top div#top_wave_wrap {
        width: 100%; height: 80px;
        display: flex;
    }
    section div svg {
        height: 30px;
        position: absolute;
        bottom: 0;
    }
</style>