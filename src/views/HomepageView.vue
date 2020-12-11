<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Header></Header>
        <Carousel></Carousel>
        <Footer></Footer>
    </main> 
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import Carousel from '../components/Carousel';

export default {
    components: {
        Carousel,
        Header,
        Footer,
    }
}

</script>

<style lang="scss" scoped>

</style>