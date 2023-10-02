import { gql } from "@urql/svelte";

export const PokemonsQuery = gql`
  query Pokemons($offset: Int!, $limit: Int!, $search: String) {
    pokemon_v2_pokemon_aggregate(
      where: {name: {_iregex: $search}}
    ) {
        aggregate {
          count(columns: id)
        }
    }
    pokemon_v2_pokemon(
      offset: $offset, 
      limit: $limit, 
      where: {name: {_iregex: $search}},
      order_by: {name: asc}
    ) {
      id
      name
    }
  }
`;

