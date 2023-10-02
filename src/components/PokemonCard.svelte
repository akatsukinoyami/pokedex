<script lang="ts">
  import PokemonSprite from "./PokemonSprite.svelte";
  import { BREAKPOINTS } from "../constants";

  export let pokemon: Record<string, string| number>;
</script>
    
<a href="/{pokemon.id}" 
  class="column {BREAKPOINTS.str()} is-hoverable mb-4"
>
  <PokemonSprite pokemon={pokemon} />
  <p class="title is-capitalized mt-2">{pokemon.name}</p>
</a>
  
<style lang="sass">
  .is-hoverable:hover
    cursor: pointer
    transform: scale(1.03)
    transition: all .15s ease-out 0s
</style>
    