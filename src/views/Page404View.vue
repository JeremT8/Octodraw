<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1>404</h1>
        <div class='image404'></div>
        <Page404></Page404>
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


.image404 {
  background-image: url("../assets/images/618egtClBSL._AC_SX450_.jpg");
}

</style>

