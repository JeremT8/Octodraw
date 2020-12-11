<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Header></Header>
        <ChallengeResults></ChallengeResults>
        <Footer></Footer>
    </main>
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import ChallengeResults from '../components/ChallengeResults';

export default {
    components: {
        ChallengeResults,
        Header,
        Footer,
    }
}

</script>

<style lang="scss" scoped>

</style>