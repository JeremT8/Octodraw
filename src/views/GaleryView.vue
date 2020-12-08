<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Galery></Galery>
    </main>
</template>

<script>
import Galery from '../components/Galery';
export default {
    components: {
        Galery
    }
}

</script>