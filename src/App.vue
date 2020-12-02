<template>
  <div class="container">
    <Header></Header>
    <!-- On prévoit que cette zone (entre header et footer) est la partie dynamique de l'app => selon la page demandée, on affiche un composant différent -->
    <!-- C'est ici que VueRouter instanciera le composant correspondant à la route courante -->
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Carousel3d from 'vue-carousel-3d';
import Header from  "./components/Header";
import Footer from "./components/Footer";
// import userService from "./services/UserService"; 

export default Vue.extend({
  data() {
    return {
    };
  },
  components: {
    Header,
    Footer,
    Carousel
  }
});

Vue.use(Carousel3d);
</script>