<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <div>
        <div class="tentacule_bleue">
            <img src="../assets/images/tentacules_bleu_octodraw.svg">
        </div>
    <main class="main-container">
        
        <LoginForm></LoginForm>
       
    </main>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm';
export default {
    components: {
        LoginForm
    }
}
</script>

<style>

.tentacule_bleue {
    width:250px;
}

img {
    margin-bottom: -5px;
    margin-left: 150px;
}

</style>
