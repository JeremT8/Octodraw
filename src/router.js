import Vue from 'vue';
// on importe le routeur
import VueRouter from 'vue-router';
// on importe les services nécessaires
// import userService from './services/UserService';

// on importe les composants qui vont servir à la navigation
import HomepageView from './views/HomepageView';

// on informe VueJS qu'on va utiliser VueRouter
Vue.use(VueRouter);

// on définit nos routes
// on lie des url (path) à des composants (component)
const routes = [
  { path: '/', component: HomepageView }
];

// on instancie le routeur en lui fournissant notre array de routes
const routerInstance = new VueRouter({
  // on choisit de fonctionner en mode "historique" => pas de # dans l'url
  mode: 'history',
  routes // short for `routes: routes`
});

// lorsqu'on fait un import de ce fichier (router.js), on récupère ce qui a été exporté par ce fichier
export default routerInstance;
