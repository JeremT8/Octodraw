<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <ContactForm></ContactForm>
    </main>
</template>

<script>

import ContactForm from '../components/ContactForm';

export default {
    components: {
        ContactForm
    }
}

</script>