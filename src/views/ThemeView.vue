<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <HeaderConnected></HeaderConnected>
        <Theme></Theme>
        <FooterConnected></FooterConnected>
    </main>
</template>

<script>
import HeaderConnected from  "../components/HeaderConnected";
import FooterConnected from "../components/FooterConnected";
import Theme from '../components/Theme';

export default {
    components: {
        Theme,
        HeaderConnected,
        FooterConnected,
    }
}

</script>

<style lang="scss" scoped>

</style>