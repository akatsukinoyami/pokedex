<script lang="ts">
  import { onDestroy } from 'svelte';
  import { queryStore, getContextClient } from '@urql/svelte';

  import GQLwrapper from '../components/GQLwrapper.svelte';
  import PokemonCard from '../components/PokemonCard.svelte';
  import CollectionSupport from '../components/CollectionSupport/Index.svelte';
  import { PokemonsQuery as query } from "../queries/index";
  import { countStore, pageStore, pageSizeStore, searchStore } from '../stores';
  import { runAll } from '../functions';

  let 
    page: number, 
    pageSize: number, 
    search: string,
    count: number;

  const unsubscribes: Array<() => void> = [
    pageStore.subscribe(value => page = value),
    pageSizeStore.subscribe(value => pageSize = value),
    searchStore.subscribe(value => search = value),
    countStore.subscribe(value => count = value),
  ]
  onDestroy(() => runAll(unsubscribes));

  $: pokemonsStore = queryStore({
    query,
    client: getContextClient(),
    variables: { 
      search,
      limit: pageSize,
      offset: pageSize * page, 
    }
  });
  $: pokemons = $pokemonsStore?.data?.pokemon_v2_pokemon;
  $: $pokemonsStore?.data && countStore.set($pokemonsStore?.data?.pokemon_v2_pokemon_aggregate?.aggregate?.count);
//$: console.log({ page, pageSize, search, count });

</script>

<GQLwrapper store={pokemonsStore}>
  <div class="columns is-multiline my-2">
    {#each pokemons as pokemon (pokemon.id)}
      <PokemonCard pokemon={pokemon} />
    {/each}
  </div>
  <CollectionSupport />
</GQLwrapper>
