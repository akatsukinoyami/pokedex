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

    <a 
      role="button" class="navbar-burger"
      on:click={() => is_active= !is_active }
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu {is_active ? "is-active" : ""}">
    <div class="navbar-start"></div>
    <div class="navbar-end">
      {#if location.pathname === "/"}
        <div class="navbar-item">
          <Search />
        </div>
      {/if}
    </div>
  </div>
</nav>
