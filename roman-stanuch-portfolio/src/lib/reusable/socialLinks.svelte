<div id="border">
    <h1 id="title">Check out my latest work at any of the links below!</h1>
    <div id="secondaryBox">
        <a class="headerItem" href="https://github.com/Roman-Stanuch">GitHub</a>
        <a class="headerItem" href="https://www.linkedin.com/in/roman-stanuch-aa4801320/">LinkedIn</a>
        <a class="headerItem" href="https://polygonal.hashnode.dev/?source=top_nav_blog_home">Blog</a>
        <a class="headerItem" href="https://www.youtube.com/@polygonallabs">YouTube</a>
        <a class="headerItem" href="https://x.com/PolygonalLabs">Twitter</a>
    </div>
</div>

<style>
    #border {
        display: flex;
        flex-direction: column;
        margin-left: 3vw;
        margin-right: 3vw;
        background-color: #dc5f00;
        font-size: 1.5em;
        width: 90vw;
        border-radius: 25px;
        padding: 2vw;
    }

    #secondaryBox {
        display: flex;
        gap: 1px;
        margin-top: 2vh;
        width: 90vw;
        text-decoration: underline;
    }

    .headerItem {
        line-height: 40px;
        text-align: center;
        background-color: #c74900;
        border-color: transparent;
        width: 50%;
        height: 75%;
        border-radius: 25px;
        padding-top: 1vh;
        padding-bottom: 1vh;
        margin-left: 1vw;
        margin-right: 1vw;
    }

    @media only screen and (max-width: 900px) {
        #secondaryBox {
            flex-direction: column;
            gap: 2vh;
            justify-content: center;
            align-items: center;
        }

        .headerItem {
            padding: 9px;
            margin: 0;
            width: 90%;
        }

        #title {
            padding-left: 4vw;
            padding-right: 4vw;
        }
    }
</style>
