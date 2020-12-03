<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1>Créer un compte</h1>
        <RegisterForm></RegisterForm>
    </main>
</template>

<script>
import RegisterForm from '../components/RegisterForm';
export default {
    components: {
        RegisterForm
    }
}
</script>