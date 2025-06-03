<script lang="ts">
    let { title, mainText, imageSource, link = "" } = $props();
</script>

<div id="mainBox">
    <h1 id="title">{title}</h1>
    <a href={link} target="_blank">
        <img id="image" src={imageSource} alt="Project" />
    </a>
    <p id="mainText">{mainText}</p>
</div>

<style>
    #mainBox {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #dc5f00;
        border-radius: 25px;
        width: 25vw;
        height: fit-content;
        padding: 2vw;
    }

    #title {
        font-size: 2em;
        text-align: center;
    }

    #image {
        width: 20vw;
        margin-top: 1vh;
        margin-bottom: 1vh;
    }

    #mainText {
        font-size: 1.5em;
        text-align: center;
    }

    @media only screen and (min-width: 1200px) {
        #image {
            width: 15vw; 
        }
    }

    @media only screen and (max-width: 600px) {
        #mainBox {
            width: 90vw;
            padding: 4vw;
        }

        #image {
            width: 20vh;
        }
    }
</style>
