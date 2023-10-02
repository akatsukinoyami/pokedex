<script lang="ts">
    export let 
        text = "Loading...",
        size: "small" | "medium" | "large",
        color: "primary" | "link" | "info" | "success" | "warning" | "danger";
</script>

<div class="hero is-halfheight">
    <div class="hero-body is-flex-direction-column is-justify-content-center">
        {#if text}
            <p class="title">{text}</p>
        {/if}
        <progress class="progress is-{size} is-{color}" max="100"></progress>
    </div>
</div>