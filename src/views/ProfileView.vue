<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="container">
        <ProfileForm></ProfileForm>
    </main>
</template>

<script>
import ProfileForm from '../components/ProfileForm';
export default {
    components: {
        ProfileForm
    }
}
</script>

<style scoped>






</style>