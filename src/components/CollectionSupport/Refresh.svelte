<script lang="ts">
  import { pageStore, pageSizeStore, searchStore } from "../../stores";
  import { POKEMON_LIST_1x } from "../../constants";

  export let className = "";

  function refresh(){
      pageStore.set(0);
      pageSizeStore.set(POKEMON_LIST_1x);
      searchStore.set("");
  }
</script>

<button 
  class="button is-danger is-inverted {className}" 
  on:click={refresh}
>Refresh</button>