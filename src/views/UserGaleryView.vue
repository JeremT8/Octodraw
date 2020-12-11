<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Header></Header>
        <UserGalery></UserGalery>
        <Footer></Footer>
    </main>
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import UserGalery from '../components/UserGalery';

export default {
    components: {
        UserGalery,
        Header,
        Footer,
    }
}

</script>

<style lang="scss" scoped>

</style>