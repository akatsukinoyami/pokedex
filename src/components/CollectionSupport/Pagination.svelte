<script lang="ts">
  import { onDestroy } from "svelte";
  import { runAll } from "../../functions";
  import { POKEMON_LIST_1x } from "../../constants";
  import { countStore, pageStore, pageSizeStore } from "../../stores";
  
  let 
    page: number, 
    pageSize = POKEMON_LIST_1x, 
    countOfPokemons: number = 1281; // default number before load data from backend

  const unsubscribes = [
    pageStore.subscribe(value => page = value),
    pageSizeStore.subscribe(value => pageSize = value),
    countStore.subscribe(value => countOfPokemons = value),
  ]

  $: last = Math.ceil(countOfPokemons / pageSize);
  $: localStorage.setItem('page', page.toString());
  onDestroy(() => runAll(unsubscribes));
</script>

<nav class="pagination" aria-label="pagination">
  {#if page > 0}
    <button class="button pagination-previous" on:click={ () => pageStore.set(page-1) }>Previous page</button>
  {/if}
  {#if page < last-1}
    <button class="button pagination-next" on:click={ () => pageStore.set(page+1) }>Next page</button>
  {/if}

  <ul class="pagination-list">
    {#if page > 1}<li><button class="button pagination-link" aria-label="Goto page 1" on:click={() => pageStore.set(0) }>1</button></li>{/if}
    {#if page > 2}<li><span class="pagination-ellipsis">&hellip;</span></li>{/if}
    {#if page > 0}<li><button class="button pagination-link" aria-label="Goto page { page }" on:click={ () => pageStore.set(page-1) } >{ page }</button></li>{/if}
    
    <li><button class="button pagination-link is-current" aria-label="Page { page+1 }" aria-current="page">{ page+1 }</button></li>

    {#if page < last-1}<li><button class="button pagination-link" aria-label="Goto page { page+2 }" on:click={ () => pageStore.set(page+1) }>{ page+2 }</button></li>{/if}
    {#if page < last-3}<li><span class="pagination-ellipsis">&hellip;</span></li>{/if}
    {#if page < last-2}<li><button class="button pagination-link" aria-label="Goto page { last }" on:click={ () => pageStore.set(last-1) }>{ last }</button></li>{/if}
  </ul>

</nav>