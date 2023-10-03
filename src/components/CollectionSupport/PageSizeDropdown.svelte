<script lang="ts">
  import { onDestroy } from "svelte";
  import { pageStore, pageSizeStore } from "../../stores";
  import { 
    POKEMON_LIST_1x, 
    POKEMON_LIST_2x, 
    POKEMON_LIST_3x, 
    POKEMON_LIST_4x 
  } from "../../constants";

  export let 
    className = "",
    active = false, 
    pageSize = POKEMON_LIST_1x;

  const unsubscribe = pageSizeStore.subscribe(value => pageSize = value);

  function setSize(size: number){
    active = false;
    pageStore.set(0);
    pageSizeStore.set(size);
  }
  $: localStorage.setItem('pageSize', pageSize.toString());

  onDestroy(unsubscribe)
</script>

<div class="dropdown is-up {active ? "is-active" : ""} {className}">
  <div class="dropdown-trigger">
    <button class="button" 
      aria-haspopup="true" aria-controls="dropdown-menu"
      on:click={() => active = !active}
    >
      <span>Items: {pageSize}</span>
    </button>
  </div>
  
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      {#each [POKEMON_LIST_1x, POKEMON_LIST_2x, POKEMON_LIST_3x, POKEMON_LIST_4x] as size}
        <button 
          class="dropdown-item button is-info {size !== pageSize && "is-inverted"}" 
          on:click={() => setSize(size)}
        >{size}</button>
      {/each}
    </div>
  </div>
</div>