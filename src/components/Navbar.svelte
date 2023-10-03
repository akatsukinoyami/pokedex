<script lang="ts">
  import Search from "./Search.svelte";

  let is_active = false;
</script>

<nav class="navbar is-fixed-top has-shadow px-3" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img 
          src="/navbar_brand.png" 
          alt="Navbar Logo"
          width="112" height="28">
    </a>

    <button class="navbar-burger" on:click={() => is_active= !is_active }>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div class="navbar-menu {is_active ? "is-active" : ""}">
    <div class="navbar-start"></div>
    <div class="navbar-end">
      {#if location.pathname === "/"}
        <div class="navbar-item">
          <Search />
        </div>
      {/if}
      <div class="navbar-item">
        <a href="https://github.com/akatsukinoyami/pokedex">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            class="image is-32x32 is-max-height-100" alt="GitHub Logo"/>
        </a>
      </div>
    </div>
  </div>
</nav>

<style lang="sass">
  .is-max-height-100
    max-height: 100% !important
</style>