import 'reset-css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/main';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import './custom.scss';


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// on démarre VueJS
// On utilise App comme composant racine => createElement(App)
// on monte ce composant racine à la place de l'élément qui porte l'id "app" => $mount('#app')
// on passe le router à notre instance de VueJS
new Vue({ 
  render: createElement => createElement(App),
  router
}).$mount('#app');