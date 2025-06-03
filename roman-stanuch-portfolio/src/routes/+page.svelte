<script>
    import Header from "$lib/reusable/header.svelte";
    import Billboard from "$lib/reusable/billboard.svelte";
    import SocialLinks from "$lib/reusable/socialLinks.svelte";
    import Footer from "$lib/reusable/footer.svelte";
</script>

<Header homeDecoration="selected"></Header>

<div style="display: flex; justify-content:center; align-items:center; width:100vw; flex-direction:column; margin-top:2vh;">
    <Billboard
        title="Greetings, I'm Roman!"
        mainText="I'm currently a student studying computer science! I enjoy applying my programming skills towards creative endeavors and challenging problems. My current focus is on computer graphics and 3D applications, but I dabble in all realms of software development!"
    ></Billboard>

    <img src="./images/PolygonalLogo.png" alt="Logo" style="width: 25vw; border-radius:50%; margin-top:2vh; margin-bottom:2vh;" />

    <SocialLinks></SocialLinks>
</div>

<Footer></Footer>