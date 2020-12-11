<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Header></Header>
        <Galery></Galery>
        <Footer></Footer>
    </main>
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import Galery from '../components/Galery';
export default {
    components: {
        Galery,
        Header,
        Footer,
    }
}

</script>