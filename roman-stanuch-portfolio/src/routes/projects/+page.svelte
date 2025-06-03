<script>
    import Header from "$lib/reusable/header.svelte";
    import Billboard from "$lib/reusable/billboard.svelte";
</script>

<Header></Header>

<div style="height: 2vh;"></div>

<Billboard
    title="Projects"
    mainText="This page will feature some of the projects I have made on my own time. Until it is fleshed out, please check out my GitHub by clicking the logo below!"
></Billboard>

<div style="margin:2vh; display:flex; justify-content: center;">
    <a href="https://github.com/Roman-Stanuch" target="_blank">
        <img src="/images/GithubLogo.svg" alt="Logo" style="width: 25vw;" />
    </a>
</div>
