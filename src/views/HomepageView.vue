<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1>Carousel</h1>
        <Carousel></Carousel>
    </main>
</template>

<script>
import Carousel from '../components/Carousel';

export default {
    components: {
        Carousel
    }
}
</script>