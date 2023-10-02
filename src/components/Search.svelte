<script lang="ts">
  import { onDestroy } from "svelte";
  import { pageStore, searchStore } from "../stores";

  let search: string;
  const unsubscribe = searchStore.subscribe((value) => search = value)

  $: searchLocal = search;
  $: localStorage.setItem('search', search);
  
  function searchSubmit(){
    searchStore.set(searchLocal);
    pageStore.set(0);
  }
  function searchClear(){
    searchStore.set("");
  }

  onDestroy(unsubscribe)
</script>

<div class="is-flex is-justify-content-flex-end">
  <div class="field has-addons m-0">
    <div class="control">
      <input class="input" type="text" placeholder="Search" bind:value={searchLocal}>
    </div>
    <div class="control">
      <button class="button is-info is-outlined" on:click={searchSubmit}>Search</button>
    </div>
  </div>
  <button class="button is-danger is-inverted ml-1" on:click={searchClear}>Clear</button>
</div>


