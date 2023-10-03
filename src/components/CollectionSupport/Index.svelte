<script>
    import PageSizeDropdown from "./PageSizeDropdown.svelte";
    import Pagination from "./Pagination.svelte";
    import Refresh from "./Refresh.svelte";
</script>

<div class="is-flex is-justify-content-space-between collection_support">
    <div class="mt-2">
        <PageSizeDropdown className="" />
        <Refresh className="" />
    </div>
    <Pagination className="" />
</div>

<style lang="sass">
    .collection_support
        @media (max-width: 750px)
            flex-direction: column-reverse
</style>