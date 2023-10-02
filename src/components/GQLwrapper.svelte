<script lang="ts">
    import Progress from "./Progress.svelte";
    import Notification from "./Notification.svelte";
    import type { OperationResultStore, Pausable } from "@urql/svelte";

    export let store: OperationResultStore<any, any> & Pausable; 
    
</script>

{#if $store.fetching}
    <Progress size="large" color=success />
{:else if $store.error}
    <Notification color="danger" del_button={true}>
        {$store.error.message}
    </Notification>
{:else}
    <slot />
{/if}