<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Theme></Theme>
    </main>
</template>

<script>
import Theme from '../components/Theme';

export default {
    components: {
        Theme
    }
}

</script>

<style lang="scss" scoped>

</style>