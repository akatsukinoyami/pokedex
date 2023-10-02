<script lang="ts">
  import { useParams } from "svelte-navigator";
  import { queryStore, getContextClient } from '@urql/svelte';

  import GQLwrapper from '../components/GQLwrapper.svelte';
  import PokemonSprite from "../components/PokemonSprite.svelte";
  import PokemonStatList from "../components/PokemonStatList.svelte";
  import { PokemonQuery as query } from "../queries/show";

  const params = useParams();
  let pokemon: Record<string, any> = {};

  $: pokemonStore = queryStore({
    query,
    client: getContextClient(),
    variables: { 
      pokemonId: $params.pokemonId 
    },
  });

  $: pokemonNew = $pokemonStore?.data?.pokemon_v2_pokemon[0]
  $: pokemon = {
    ...pokemonNew,
    abilities: pokemonNew?.pokemon_v2_pokemonabilities,
    forms: pokemonNew?.pokemon_v2_pokemonforms,
    items: pokemonNew?.pokemon_v2_pokemonitems,
    stats: pokemonNew?.pokemon_v2_pokemonstats,
    types: pokemonNew?.pokemon_v2_pokemontypes,
  };
</script>
  
<GQLwrapper store={pokemonStore}>
  <div class="tile is-ancestor p-5">
    <div class="tile is-vertical is-5">
      <PokemonSprite pokemon={pokemon} />
    </div>
    <div class="tile is-vertical is-parent">
      <article class="panel is-link is-capitalized">
        <div class="panel-heading is-flex">
          {pokemon.name} &nbsp;
          <div class="tags has-addons">
            <span class="tag">ID</span>
            <span class="tag is-primary">{pokemon.id}</span>
          </div>
        </div>
        <p class="panel-block"><strong>Height:</strong> {pokemon.height / 10} m</p>
        <p class="panel-block"><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
        {#each pokemon.stats as stat}
          <p class="panel-block"><strong>Base {stat.pokemon_v2_stat.name}:</strong> {stat.base_stat}</p>
        {/each}
        <p class="panel-block"><strong>Base Experience:</strong> {pokemon.base_experience}</p>
      </article>

      <PokemonStatList 
        color="info" 
        title="Types" 
        statList={pokemon.types} 
        receiver={(item) => item.pokemon_v2_type.name}
      />
      <PokemonStatList 
        color="warning" 
        title="Abilities" 
        statList={pokemon.abilities} 
        receiver={(item) => item.pokemon_v2_ability.name}
      />
      <PokemonStatList 
        color="success" 
        title="Forms" 
        statList={pokemon.forms} 
        receiver={(item) => item.form_name}
      />
      <PokemonStatList 
        color="danger" 
        title="Items" 
        statList={pokemon.items} 
        receiver={(item) => `${item.pokemon_v2_item.name} (${item.pokemon_v2_item.cost})`}
      />
    </div>
  </div>
</GQLwrapper>