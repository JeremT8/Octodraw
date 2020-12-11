<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Header></Header>
        <h1 class="register-button">Qui sommes nous ?</h1>
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
    margin-top: 1rem;
    width: 50%;
    font-weight: bold;
    }

</style>
