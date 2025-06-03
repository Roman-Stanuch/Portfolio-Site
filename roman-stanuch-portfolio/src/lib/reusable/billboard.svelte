<script lang="ts">
    let { title = "Page", mainText = "", imageSource = "Logo.png" } = $props();
</script>

<div id="Billboard">
    <div id="Border">
        <h1>{title}</h1>
        <p>{mainText}</p>
    </div>
</div>

<style>
    #Billboard {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-left: 3vw;
        margin-right: 3vw;
        gap: 5vw;
    }

    #Border {
        background-color: #dc5f00;
        font-size: 1.5em;
        width: fit-content;
        border-radius: 25px;
        padding: 2vw;
    }

    @media only screen and (max-width: 600px) {
        #Billboard {
            flex-direction: column;
            align-items: center;
        }

        #Border {
            width: 90vw;
            padding: 4vw;
        }
    }
</style>
