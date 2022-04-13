<script>
  export let company;
</script>

<section id="contact">
  <form class="email-form" name="contact" form-name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <h2>{company.contactPrompt}</h2>
    <div hidden aria-hidden="true">
      <label>Don’t fill this out if you're human:<input name="bot-field" /></label>
    </div>
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="name" placeholder="Your Name"/>
    <input type="email" name="email" placeholder="Your Email"/>
    <textarea name="message" placeholder="Your Message"/>
    <button type="submit"><span class="button-text">Send</span></button>
  </form>
</section>

<style>
  section {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-color: #f2bb85;
    background-image:  url("/images/background-rectangle-sand.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    padding-top: 5em;
    padding-bottom: 5em;
    min-height: 100vh;
  }

  form {
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    max-width: 80vw;
  }

  h2 {
    color: white;
    font-size: 2.4em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    text-shadow:
        -5px 6px 0 #000,
        -5px 3px 0 #000,
        -3px 6px 0 #000,
        -2px -2px 0 #000,  
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000;
  }

  .button-text {
    font-family: "Header";
    color: white;
    font-size: 1.6em;
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

  .email-form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 1em;
    margin: 1em 0;
    border-radius: 10px;
    border: #000 solid 3px; 
  }

  input:focus{
    outline: none;
    border: solid 3px;
    border-color: var(--secondary-color);
}

  ::placeholder {
    color: var(--secondary-color);
    font-weight: 700;
    opacity: 0.6;
  }

  button {
    padding: 1em;
    margin: 1em 25%;
    font-size: 1.2em;
    width: 50%;
    border-radius: 10px;
    border: #000 solid 3px;
    background-color: var(--secondary-color);
  }

  button:hover {
    background-color: var(--secondary-color-hover);
  }

  button:active {
    background-color: var(--secondary-color-press);
  }


  textarea {
    padding: 1em;
    margin: 1em 0;
    min-height: 12em;
    border-radius: 10px;
    border: #000 solid 3px; 
  }

  textarea:focus {
    outline: none;
    border: solid 3px;
    border-color: var(--secondary-color);
  }
</style>
