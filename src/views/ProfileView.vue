<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="container">
        <Header></Header>
        <ProfileForm></ProfileForm>
        <Footer></Footer>
    </main>
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import ProfileForm from '../components/ProfileForm';
export default {
    components: {
        ProfileForm,
        Header,
        Footer,
    }
}
</script>

<style lang="scss" scoped>

</style>