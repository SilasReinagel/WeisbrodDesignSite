<script>
  import Hero from '../Sections/Hero.svelte';
  import Works from '../Sections/Works.svelte';
  import ContactForm from '../Sections/ContactForm.svelte';

  import company from '../static-content.js';
</script>

<div>
  <Works/>
  <Hero/>
  <ContactForm company={company}/>
</div>
