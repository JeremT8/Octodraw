<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Header></Header>
        <Page404 class="fondecran"></Page404>
        <Footer></Footer>
    </main>
    
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import Page404 from '../components/Page404';
export default {
    components: {
        Page404,
        Header,
        Footer,
    }
}

</script>

<style lang="scss" scoped>

</style>

