<script>
  import Container from '../Elements/Container.svelte';
</script>

<section>
  <Container>
    <div class="row">
      <div class="flex-column">
        <h1 class="focal">Joshua Weisbrod</h1>
        <div class="img-box">
          <img src="/images/josh-w-background.png" alt="Josh Weisbrod"/>
        </div>
        <h1 class="focal">Graphic Designer</h1>
      </div>
      <div class="right">
        <h1 class="center-vh seen-on">As seen on</h1>
        <div class="hgtv">
          <img src="/images/hgtv_logo.png" alt="HGTV Logo"/>
        </div>
      </div>
    </div>
  </Container>
</section>

<style>
  section {
    min-height: 92vh;
    padding: 16px;
    background-color: #019795;
  }

  .focal {
    color: white;
    font-size: 2.4em;
    margin: 0;
    text-shadow:
        -5px 6px 0 #000,
        -5px 3px 0 #000,
        -3px 6px 0 #000,
        -2px -2px 0 #000,  
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000;
  }

  .img-box {
    width: 600px;
    max-width: 88vw;
    min-width: 300px;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin: 2em;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
  }

  .right {
    margin-top: 5em;
    margin-bottom: 5em;
    margin-left: 1.6em;
    margin-right: 1.6em;
    padding: 1.6em;
    border: #000 solid 4px;
    border-radius: 10px;
    width: 24vw;
    min-width: 280px;
  }

  .seen-on {
    color: black;
    font-family: "HGTV";
    text-transform: uppercase;
    font-size: 2.4em;
    margin-top: 6px;
    text-align: center;
  }

  .hgtv {
    max-width: 320px;
    min-width: 200px;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
  }
</style>