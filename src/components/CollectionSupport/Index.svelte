<script>
    import PageSizeDropdown from "./PageSizeDropdown.svelte";
    import Pagination from "./Pagination.svelte";
    import Refresh from "./Refresh.svelte";
</script>

<div class="is-flex is-justify-content-space-between">
    <div>
        <PageSizeDropdown />
        <Refresh />
    </div>
    <Pagination />
</div>