<script lang="ts">
    export let
        color: "primary" | "link" | "info" | "success" | "warning" | "danger",
        del_button = true,
        notification = true;
</script>

{#if notification}
    <div class="notification is-{color}">
        {#if del_button}
            <button class="delete" on:click={() => notification = false}></button>
        {/if}
        <slot/>
    </div>
{/if}