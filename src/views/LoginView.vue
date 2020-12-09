<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <div>
        <div class="tentacule_bleue">
            <img src="../assets/images/tentacules_bleu_octodraw.svg">
        </div>
        <main class="main-blue">
            
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



.main-blue {
    border-radius: 15px;
    padding: 40px;
    width: 350px;
    height: 150px;
    background-image: linear-gradient(to right, #0d2578 , #0d2638);
    color: white;
}


.tentacule_bleue {
    width:250px;
}

img {
    margin-bottom: -5px;
    margin-left: 150px;
}

</style>
