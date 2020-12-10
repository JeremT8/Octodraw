<template>
  <div class="container">
    <HeaderConnected></HeaderConnected>
    <!--<Header></Header>-->
    <!-- On prévoit que cette zone (entre header et footer) est la partie dynamique de l'app => selon la page demandée, on affiche un composant différent -->
    <!-- C'est ici que VueRouter instanciera le composant correspondant à la route courante -->
    <router-view></router-view>

    <FooterConnected></FooterConnected> 

  </div>
</template>

<script>
import Vue from 'vue';
import Header from  "./components/Header";


import HeaderConnected from "./components/HeaderConnected";


import FooterConnected from "./components/FooterConnected";

import userService from "./services/UserService"; 


export default Vue.extend({
  data() {
    return {
    };
  },
  components: {
    HeaderConnected,
    Header,
    FooterConnected,

  }
});

</script>