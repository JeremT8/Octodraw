<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <UserGalery></UserGalery>
    </main>
</template>

<script>
import UserGalery from '../components/UserGalery';
export default {
    components: {
        UserGalery
    }
}

</script>