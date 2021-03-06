import axios from 'axios';

const apiBaseURL = 'http://ec2-35-153-93-141.compute-1.amazonaws.com/projet-o-ctodraw/wp-json';

// on déclare le module
const userService = {
    token: null,
    init() {
        // si on trouve un token dans le stockage de session, on le stocke dans userService.token
        if (sessionStorage.getItem('token')) {
            userService.token = sessionStorage.getItem('token');
        }
    },
    isUserConnected() {
        // on veut renvoyer un booleen (ici avec une double inversion)
        return !!userService.token;
    },
    
    connectUser(username, password) {
        // on return la promesse d'axios pour permettre au composant qui appelera cette méthode de faire quelque chose lorsque la requête est réussie (avec .then())
        return axios.post(apiBaseURL + '/jwt-auth/v1/token', {
            // au lieu de déclarer :
            //    username: username,
            //    password: password
            // on peut raccourcir : 
            username,
            password
        })
        .then((response) => {
            // console.log('RESPONSE', response);
            // on récupère le token renvoyé l'API dans l'objet response
            userService.token = response.data.data.token;
            // on stocke le token dans les données de session du navigateur
            sessionStorage.setItem('token', userService.token);
        })
        .catch((error) => {
            console.log('ERROR', error);
        });
   }
}

// on exporte notre module
export default userService;