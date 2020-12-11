<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1 class="register-button">LA O'CTOTEAM</h1>

        <div class="contact-effect">
	<span>O</span>
	<span>'</span>
	<span>C</span>
	<span>T</span>
	<span class="letter"></span>
	<span>D</span>
	<span>R</span>
  <span>A</span>
  <span>W</span>
</div>
<section>
<p class="contact-link">En dessin, aucune distanciation subsiste; il sera le trait d’union entre vous et nous.</p>
<p class="contact-quote">« Nous devenons ce que nous sommes à travers notre contact au monde, aux autres »</p>
<p class="contact-author">Natascha Kampusch</p>
</section>


        <AboutUs></AboutUs>
    </main>
</template>

<script>
import AboutUs from '../components/AboutUs';
export default {
    components: {
        AboutUs
    }
}

</script>

<style lang="scss" scoped>

    .main-container {
        margin-top: 4rem;
    }

    .register-button {
    border: none;
    color: #ecf4e9;
    border-radius: 30px;
    background-image: linear-gradient(to right, #ab3120 , #e53120);
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 32px;
    margin: auto;
    text-transform: uppercase;
    margin-top: 8rem;
    width: 50%;
    font-weight: bold;
    }

    /* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
    @media screen and (min-width: 601px) and (max-width: 991px) {
    .register-button {
        font-size: 2.5rem;
        width: 78%;
        border-radius: 40px;
        margin-top: 10rem;
    }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
    @media screen and (max-width: 600px) {
    .register-button {
        font-size: 1.2rem;
        width: 63%;
        margin-top: 7rem;
  }
}








span{
	margin: 0 15px;
	line-height: .7;
	text-shadow: 0 0 2px rgba(0, 0, 0, .45);
	animation: span 3s ease-in infinite alternate;
}
.contact-effect{
	justify-content: center;
  width: 100%;
  margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: sans-serif;
	font-size: 42px;
	background: #f7f7f7;
}
.letter{
	display: inline-flex;
	height: 26px;
	width: 20px;
	/* border: 2.5px solid #FF1EAD; */
	border: 4px solid black;
  margin-top: -0.2rem;
	border-radius: 25px;
	box-shadow:
		0 0 2px rgba(0, 0, 0, .75),
		inset 0 0 2px rgba(0, 0, 0, .45);

	animation: letter 3s ease-in-out infinite alternate;
}
@keyframes span {
	0%,30%{ margin: 0 15px; }
	70%,100%{ margin: 0 5px; }
}
@keyframes letter {
	0%,30%{ width: 27px; }
	70%,100%{ width: 30vw; }
}

.contact-quote {
    font-size: 1rem;
    font-family: Helvetica, sans-serif;
    font-style: italic;
}

.contact-author {
    font-size: 1rem;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
}






section p {
display: flex;
justify-content: center;
}

.contact-link {
    background-image: linear-gradient(
      transparent calc(65% - 5px),
      darken(red, 15%) 5px,
    );
    font-family: Helvetica, sans-serif;
    background-size: 0;
    background-repeat: no-repeat;
    text-transform: uppercase;
    transition: 0.5s ease;
  font-size: 1.2rem;
  color: red;
  text-align: center;
      margin-top: 3rem;
  }
  
  .contact-link:hover {
      background-size: 100%;
  }



</style>
