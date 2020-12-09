<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1 class="register-button">Qui sommes nous ?</h1>
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
    margin-top: 1rem;
    width: 50%;
    font-weight: bold;
    }

</style>
