import { Client, fetchExchange } from '@urql/svelte';
import { cacheExchange } from '@urql/exchange-graphcache';
import { GRAPHQL_LINK } from './constants';

export const client = new Client({
  url: GRAPHQL_LINK,
  exchanges: [
    cacheExchange({
      keys: {
        pokemon_v2_pokemon_aggregate: () => null,
        pokemon_v2_pokemon_aggregate_fields: () => null,
      }}), 
    fetchExchange
]});