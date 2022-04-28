<script>
  import Lazy from '../Elements/Lazy.svelte';

  const screenshots = [
    '/images/works/love-your-enemies-shirt.jpg',
    '/images/works/awake-zen-truck.jpg',
    '/images/works/arizona-illustration.jpg',
    '/images/works/harley01.jpg',
    '/images/works/undefeated-love.jpg',
    '/images/works/rabbits-foot-brewing.jpg',
  ];
  const skeletonHeight = screenshots.length / 3 * 300;
</script>

<section id="works">
  <!-- <h2 class="center-vh">Works</h2> -->
  <Lazy height={skeletonHeight}>
    <div class="flex">
      {#each screenshots as image}
        <a href={image}><div class='screenshot'><img  src={image} alt='Screenshot' lazy='true'/></div></a>
      {/each}
    </div>
  </Lazy>
</section>

<style>
  section {
    /* background-color: #e0d8cd;
    background-image: url('/images/works-texture.png');
    background-size: cover;
    background-repeat: repeat-y; */
    min-height: 100vh;
    padding: 4em 2em;
  }

  .screenshot {
    max-width: 28vw;
    min-width: 300px;
    padding: 1em;
    margin-left: auto;
    margin-right: auto;
  }

  .flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    color: white;
    font-size: 2.4em;
    margin: 0 0 1em 0;
  }
</style>