<script>
  let sidebarOpen = false;

  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';

  import company, { pages } from '../static-content.js';
</script>

<header>
  <a href="." class="logo">
    <div class="logo-img">
      <img src={company.logo} alt="Logo"/>
    </div>
    <!-- <h1>{company.name}</h1> -->
  </a>
  <SiteSidebar bind:open={sidebarOpen}/>
  <nav class="navbar tablet-hidden">
    {#each pages.filter(p => p.showInMainNav) as page}
      <a class="navlink decor-font" href={page.href}>{page.name}</a>
    {/each}
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background-color: var(--header-background-color);
    height: 120px;
    padding: 0 16px;
  }

  h1 {
    color: var(--header-color);
    margin: 10px;
  }

  .logo {
    display: flex;
    flex-direction: row;
    max-height: 92px;
  }

  .logo-img {
    width: 160px;
  }

  .navlink {
    color: var(--header-color);
    margin: 5px 32px;
    font-size: 1.6em;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition-duration: 0.2s;

    text-shadow:
        -5px 6px 0 #000,
        -5px 3px 0 #000,
        -3px 6px 0 #000,
        -2px -2px 0 #000,  
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000;
  }

  .navlink:hover {
    color: var(--header-color-hover);
  }

</style>
