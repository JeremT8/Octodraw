<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">

        <Page404 class="fondecran"></Page404>
    </main>
</template>
<script>
import Page404 from '../components/Page404';
export default {
    components: {
        Page404
    }
}
</script>
<style scoped>
</style>

