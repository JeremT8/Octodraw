<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">

        <h1 class="register-button">LA O'CTOTEAM</h1>

        <AboutUs></AboutUs>
        <Footer></Footer>
    </main>
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import AboutUs from '../components/AboutUs';
export default {
    components: {
        AboutUs,
        Header,
        Footer,
    }
}

</script>

<style lang="scss" scoped>


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

</style>
