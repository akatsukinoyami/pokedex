import { gql } from "@urql/svelte";

// Fetching ids for 
export const PokemonQuery = gql`
  query Pokemon($pokemonId: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $pokemonId}}) {
      id
      name
      height
      weight
      base_experience
      pokemon_v2_pokemonabilities {
        id
        pokemon_v2_ability {
          id
          name
        }
      }
      pokemon_v2_pokemonforms {
        id
        form_name
      }
      pokemon_v2_pokemonitems {
        id
        pokemon_v2_item {
          id
          cost
          name
        }
      }
      pokemon_v2_pokemonstats {
        id
        pokemon_v2_stat {
          id
          name
        }
        base_stat
      }
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;
