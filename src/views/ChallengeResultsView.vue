<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <ChallengeResults></ChallengeResults>
    </main>
</template>

<script>
import ChallengeResults from '../components/ChallengeResults';

export default {
    components: {
        ChallengeResults
    }
}

</script>

<style lang="scss" scoped>

</style>