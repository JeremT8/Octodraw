<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1></h1>
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

.main-container {
    background-color: #f0f;
    margin: 5% 35%;
    
    
    
}




</style>