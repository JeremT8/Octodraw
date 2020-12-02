<template>
  <div class="container">
    <Header></Header>
    <!-- On prévoit que cette zone (entre header et footer) est la partie dynamique de l'app => selon la page demandée, on affiche un composant différent -->
    <!-- C'est ici que VueRouter instanciera le composant correspondant à la route courante -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Carousel3d from 'vue-carousel-3d';

export default Vue.extend({
  data() {
    return {
    };
  },
});

Vue.use(Carousel3d);
</script>