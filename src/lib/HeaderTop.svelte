<script>
    import { browser } from '$app/environment';

    import { filePath } from '$lib/download';

    let scroll_y = 0;

    if ( browser ){
        window.addEventListener('scroll', () => scroll_y = window.scrollY);
    }

    function download() {setInterval(function () {window.location.assign('/download');}, 1000);}
</script>
<header class="{scroll_y > 10 ? '' : 'bgOFF'}">
    <a href="/" class="pageTitle">レポートお助け君</a>
    <div id="headerLinks">
        <a
            href="/how-to/use"
            class="headerLinkButton"
        >
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15ZM12.25 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-.75 1.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0Z"/></svg><!--
                --><span class="linkText">使い方</span>
            </div>
        </a>
        <a
            href="/how-to/install"
            class="headerLinkButton"
        >
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8.75A2.75 2.75 0 0 0 9.25 9.5a.75.75 0 0 0 1.493.102l.007-.102a1.25 1.25 0 1 1 2.5 0c0 .539-.135.805-.645 1.332l-.135.138c-.878.878-1.22 1.447-1.22 2.53a.75.75 0 0 0 1.5 0c0-.539.135-.805.645-1.332l.135-.138c.878-.878 1.22-1.447 1.22-2.53A2.75 2.75 0 0 0 12 6.75Z"/></svg>
                <span class="linkText"><span>インストール方法</span></span>
            </div>
        </a>
        <a
            href="{filePath}"
            download
            id="headerDownloadButton"
            on:click={download}
        >
            <svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 20.5h13.498a.75.75 0 0 1 .101 1.493l-.101.007H5.25a.75.75 0 0 1-.102-1.494l.102-.006h13.498H5.25Zm6.633-18.498L12 1.995a1 1 0 0 1 .993.883l.007.117v12.59l3.294-3.293a1 1 0 0 1 1.32-.083l.094.084a1 1 0 0 1 .083 1.32l-.083.094-4.997 4.996a1 1 0 0 1-1.32.084l-.094-.083-5.004-4.997a1 1 0 0 1 1.32-1.498l.094.083L11 15.58V2.995a1 1 0 0 1 .883-.993L12 1.995l-.117.007Z"/></svg>
            ダウンロード
        </a>
    </div>
</header>


<style>
    header {
        z-index: 1000;
        transition: ease .3s; 
        display: flex;
        justify-content: space-between;
        position: fixed; top: 0; left: 0;
        background-color: #ffffff;
        width: calc(100% - 15px);
        height: 60px;
        padding: 0 0 0 15px;
    }
    header.bgOFF {transition: ease .3s;  background-color: transparent;}
    header a.pageTitle {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.4rem;
        transition: ease .3s;
        line-height: 60px;
        color: #121212;
    }
    header.bgOFF a.pageTitle {transition: ease .3s; color: #ffffff}


    header div#headerLinks {display: flex;}
    header div#headerLinks a {
        transition: ease .3s;
        margin-left: 1px;
        height: 60px;
        text-align: center; text-decoration: none;
        color: #121212; background-color: #F8F8F8;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    header div#headerLinks a.headerLinkButton {width: 85px;}
    header div#headerLinks a.headerLinkButton,
    header div#headerLinks a.headerLinkButton span{
        line-height: 1;
        font-size: .6rem;
        text-align: center;
        color: #121212;
    }
    header div#headerLinks a.headerLinkButton svg,
    header div#headerLinks a.headerLinkButton span {display: block;}
    header div#headerLinks a.headerLinkButton svg {margin: 0 auto;}
    header div#headerLinks a.headerLinkButton:hover,
    header div#headerLinks a.headerLinkButton:hover span {transition: ease .3s; color: #ffffff;}
    header div#headerLinks a.headerLinkButton:hover {background-color: rgb(29, 197, 255);}
    header div#headerLinks a.headerLinkButton:hover svg {transition: ease .3s; fill: #ffffff;}

    header div#headerLinks a#headerDownloadButton {background-color: rgb(29, 197, 255); color: #ffffff; padding: 0 15px;}
    header div#headerLinks a#headerDownloadButton:hover svg {height: 20px;}


    @media (max-width: 550px) {
    header div#headerLinks {display: none;}
    }
</style>