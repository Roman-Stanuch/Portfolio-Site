<script lang="ts">
    import { base } from "$app/paths";
    let { homeDecoration = "", projectsDecoration = "", contactDecoration = "" } = $props();
    let homeButtonSelected = $state(homeDecoration);
    let projectsButtonSelected = $state(projectsDecoration);
    let contactButtonSelected = $state(contactDecoration);
</script>

<div id="mainBox">
    <div id="secondaryBox">
        <a class="headerItem {homeButtonSelected}" href="{base}/">Home</a>
        <a class="headerItem {projectsButtonSelected}" href="{base}/projects">Projects</a>
        <a class="headerItem {contactButtonSelected}" href="{base}/contact">Contact</a>
    </div>
</div>

<style>
    #mainBox {
        margin-top: 2vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        width: 100%;
        height: max(6vh, 45px);
    }

    #secondaryBox {
        display: flex;
        gap: 1px;
        justify-content: center;
        align-items: center;
        background-color: #dc5f00;
        width: 75%;
        height: 100%;
        border-radius: 25px;
    }

    .headerItem {
        font-size: 1.5em;
        text-align: center;
        text-decoration: none;
        line-height: 40px;
        background-color: transparent;
        border-color: transparent;
        width: 30%;
        height: 75%;
        border-radius: 25px;
        margin-left: 1vw;
        margin-right: 1vw;
    }

    .headerItem:hover {
        background-color: #c74900;
    }

    .headerItem.selected {
        background-color: #373A40;
    }

    .headerItem.selected:hover {
        background-color: #2d2c33;
    }

    @media only screen and (max-width: 600px) {
        #secondaryBox {
            font-size: 15px;
            width: 95%;
            border-radius: 25px;
            gap: 0;
        }

        .headerItem {
            padding: 3px;
            margin: 0;
        }
    }
</style>
