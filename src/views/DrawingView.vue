<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1>Drawing</h1>
        <DrawingForm></DrawingForm>
    </main>
    
</template>

<script>
import DrawingForm from '../components/DrawingForm';
export default {
    components: {
        DrawingForm
    }
}

</script>
