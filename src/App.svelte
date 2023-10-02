<script lang="ts">
  import "bulma/css/bulma.min.css";
  import { Router, Route } from "svelte-navigator";
  import { setContextClient } from '@urql/svelte';
  
  import Navbar from "./components/Navbar.svelte";
  import PokemonIndex from "./pages/Index.svelte";
  import PokemonShow from "./pages/Show.svelte";
  import { client } from "./urql.setup";
  
  setContextClient(client);
</script>

<Router primary={false}>
  <Navbar />
  <main class="container">
    <Route path="/"><PokemonIndex /></Route>
    <Route path="/:pokemonId"><PokemonShow /></Route>
  </main>
</Router>
