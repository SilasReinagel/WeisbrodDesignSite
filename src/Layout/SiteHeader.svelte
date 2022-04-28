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
    background-color: transparent;
    height: 120px;
    padding: 0 16px;
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
    margin: 5px 32px;
    font-size: 1.4em;
    line-height: 22px;
    letter-spacing: 0px;
    font-weight: 500;
    text-transform: uppercase;
    transition-duration: 0.2s;
    font-family: 'century-gothic';
  }

  .navlink:hover {
    color: var(--header-color-hover);
  }

</style>
