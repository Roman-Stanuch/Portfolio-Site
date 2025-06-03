<script>
    import Header from "$lib/reusable/header.svelte";
    import Billboard from "$lib/reusable/billboard.svelte";
    import Project from "$lib/reusable/projectHighlight.svelte";
    import Footer from "$lib/reusable/footer.svelte";
</script>

<Header projectsDecoration="selected"></Header>

<div style="height: 2vh;"></div>

<Billboard
    title="Projects"
    mainText="This page features some of my personal projects. For a full list and source code, please check out my GitHub by clicking the logo below!"
></Billboard>

<div style="margin:2vh; display:flex; justify-content: center;">
    <a href="https://github.com/Roman-Stanuch" target="_blank">
        <img src="./images/GithubLogo.png" alt="Logo" style="width: 25vw; border-radius:50%;" />
    </a>
</div>

<div id="projectHolder">
    <Project
        title="Polygonal's Racing"
        mainText="A racing game made using Lua in Roblox."
        imageSource="./images/PolygonalRacingLogo.png"
        link="https://www.roblox.com/games/17249293871/Polygonals-Racing"
    ></Project>
    <Project
        title="Polydoro"
        mainText="A simple Pomodoro Timer made using Python."
        imageSource="./images/PolygonalLogo.png"
        link="https://github.com/Roman-Stanuch/Polydoro"
    ></Project>
    <Project
        title="Truth or Lie | Live or Die"
        mainText="A choose your own adventure game programmed in JavaScript."
        imageSource="./images/PolygonalLogo.png"
        link="https://truth.romanstanuch.com/"
    ></Project>
    <Project
        title="Uniting Ages"
        mainText="A timeline website displaying the social impact of different works of art."
        imageSource="./images/PolygonalLogo.png"
        link="https://unite.romanstanuch.com/"
    ></Project>
</div>

<Footer></Footer>

<style>
    #projectHolder {
        display: flex;
        gap: 1vw;
        margin-left: 1vw;
        margin-right: 1vw;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    
    @media only screen and (max-width: 600px) {
        #projectHolder {
            flex-direction: column;
            gap: 2vh;
        }
    }
</style>