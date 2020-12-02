import 'reset-css';
import Vue from 'vue';
import App from 'App.vue';
import router from 'router';

/**console.log(window);

new Vue({
  el: '#example',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': window['carousel-3d'].Carousel3d,
    'slide': window['carousel-3d'].Slide
  }
});
*/


// on démarre VueJS
// On utilise App comme composant racine => createElement(App)
// on monte ce composant racine à la place de l'élément qui porte l'id "app" => $mount('#app')
// on passe le router à notre instance de VueJS
new Vue({ 
  render: createElement => createElement(App),
  router
}).$mount('#app');