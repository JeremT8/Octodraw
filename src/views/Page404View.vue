<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <main class="main-container">
        <h1>404</h1>
         <img src="../assets/images/background404.jpg" id="fondecran" class="fondecran" alt=/> 
        <Page404></Page404>
    </main>
    
</template>

<script>
import Page404 from '../components/Page404';
export default {
    components: {
        Page404
    }
}

</script>

<style scoped>

/** .fondecran {
     background-image: url("../assets/images/background404.jpg"); 
    position: fixed; 
    top: 0; 
    left: 0; 
     Préserve le ratio de l'image 
    min-width: 100%;
    min-height: 100%;
    background-repeat: no-repeat;
    z-index: 1;
    
}
*/

.fondecran {
/* L'image est positionnée en fond et est centrée */
background-image:  no-repeat center center  cover; 
position: fixed; 
    top: 0; 
    left: 0; 
z-index: 1;
/* Ajout de la propriété avec les préfixes pour tous les moteurs de rendu */
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
min-width: 100%;
min-height: 100%;
}



</style>

