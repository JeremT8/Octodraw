<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <Header></Header>
        <DrawingForm></DrawingForm>
        <Footer></Footer>
    </main>
    
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import DrawingForm from '../components/DrawingForm';
export default {
    components: {
        DrawingForm,
        Header,
        Footer,
    }
}

</script>
