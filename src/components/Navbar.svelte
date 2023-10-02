<script lang="ts">
  import Search from "./Search.svelte";
</script>

<nav class="navbar is-fixed-top has-shadow px-3" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img 
          src="/navbar_brand.png" 
          alt="Navbar Logo"
          width="112" height="28">
    </a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
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
