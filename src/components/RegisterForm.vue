<template>
  <div>
    <!-- On écoute l'événement "submit" pour gérer nous-même la soumission -->

    <!-- affichage conditionnel : Si registrationSucces vaut true, on n'affiche pas le formulaire => v-if / v-else -->
    <div class="success-message" v-if="registrationSuccess">
      <h2>Félicitations ! :tada:</h2>
      <p>Inscription confirmée !</p>
      <div class="success-message__nav">
        <router-link class="button" to="/">Retour à l'accueil</router-link>
      </div>
    </div>
    <!-- v-else interdit à ce formulaire de s'afficher si la condition du v-if précédent est true -->
    <form v-on:submit.prevent="onFormSubmit" v-else>
      <fieldset>
        <div class="field" v-bind:class="{ 'field--error': !!errors.firstname }">
          <input
            class="field__input"
            type="text"
            placeholder="Prenom"
            v-model="firstname"
          />
          <div class="error-message">{{ errors.firstname }}</div>
        </div>
        <div class="field" v-bind:class="{ 'field--error': !!errors.firstname }">
          <input 
            class="field__input" 
            type="text"
            placeholder="Nom"
            v-model="lastname"
          />
          <div class="error-message">{{ errors.lastname }}</div>
        </div>
        <div class="field" v-bind:class="{ 'field--error': !!errors.firstname }">
          <input
            class="field__input"
            type="text"
            placeholder="Adresse e-mail"
            v-model="email"
          />
          <div class="error-message">{{ errors.email }}</div>
        </div>
      </fieldset>
      <fieldset>
        <div class="field" v-bind:class="{ 'field--error': !!errors.firstname }">
          <input 
            class="field__input"
            type="text"
            placeholder="Identifiant"
            v-model="username"
          />
          <div class="error-message">{{ errors.username }}</div>
        </div>
        <div class="field" v-bind:class="{ 'field--error': !!errors.firstname }">
          <input
            class="field__input"
            type="password"
            placeholder="Mot de passe"
            v-model="password"
          />
          <div class="error-message">{{ errors.password }}</div>
        </div>
        <div class="field" v-bind:class="{ 'field--error': !!errors.firstname }">
          <input
            class="field__input"
            type="password"
            placeholder="Confirmez le mot de passe"
            v-model="confirmPassword"
          />
          <div class="error-message">{{ errors.confirmPassword }}</div>
        </div>
      </fieldset>
      <div class="error-message" v-if="registrationFailure">
        <strong>Une erreur s'est produite lors de l'inscription : </strong>
        {{ registrationFailureMessage }}
      </div>
      <button class="button">OCTOSUBMIT</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      // attention, on déclare les valeurs par défaut, '' (string vide pour les strings => si on fait un traitement (lecture de la data) et que la valeur est null, on déclenche un erreur 
        return {
            firstname: 'john',
            lastname: 'doe',
            email: 'hal@pague.com',
            username: 'kraken_hal',
            password: '123456',
            confirmPassword: '123456',
            // on déclare tout l'objet (avec les propriétés enfant, même nulles ou '')
            errors: {
              firstname: '',
              lastname: '',
              email: '',
              username: '',
              password: '',
              confirmPassword: ''
            },
            registrationSuccess: false,
            registrationFailure: false,
            registrationFailureMessage: ''
        }
    },
    methods: {
        // pas besoin de faire event.preventDefault car déjà fait dans le v-on
        onFormSubmit(event) {
            // on retire les erreurs de la validation précédente en réinitialisant la data errors :
            this.errors = {
              firstname: '',
              lastname: '',
              email: '',
              username: '',
              password: '',
              confirmPassword: ''
            };
            // on efface le statut d'échec de l'inscription
            this.registrationFailure = false;
            // on vérifie que tous les champs obligatoires sont bien remplis
            const fieldNames = [
              'firstname',
              'lastname',
              'email',
              'username',
              'password',
              'confirmPassword'
            ];
            // pour chaque nom de champ, on vérifie que la data de ce champ n'est pas vide
            for (const fieldName of fieldNames) {
              // on récupère une data grâce à son nom de façon dynamique avec this[fieldName]
              if (this[fieldName].length === 0) {
                this.errors[fieldName] = "Ce champ ne peut pas être vide !";
              }
            }
            // une fois validés l'ensemble des champs de façon générique, on fait les vérifications spécifiques
            // les valeurs saisies dans les champs du formulaire sont affectées à des datas() dans ce composant
            // <input> avec le v-model="firstname" sera lié à la data "firstname"
            if (this.firstname.length < 2) {
                this.errors.firstname = "Le prénom ne peut pas être vide.";
            }
            if (this.lastname.length < 2) {
                this.errors.lastname = "Le nom ne peut pas être vide.";
            }
            if (this.email.length < 6 || this.email.indexOf('@') === -1) {
              this.errors.email = "L'email fourni n'est pas au bon format";
            }
            // le nom d'utilisateur ne doit pas contenir d'espaces
            if (this.username.indexOf(' ') > -1) {
              this.errors.username = 'Le nom d\'utilisateur ne doit pas contenir d\'espace. Utilisez "_" à la place.';
            }
            // on vérifie la corrspondance entre le mot de passe et sa confirmation
            if (this.password !== this.confirmPassword) {
              // on peut affecter la même valeur à deux variables d'un coup avec variable1 = variable2 = valeur;
              this.errors.password = this.errors.confirmPassword = "Le mot de passe et sa confirmation ne correspondent pas.";
            }
            // si les données sont OK
            // => on ne veut pas du comportement par défaut d'un formulaire HTML à la soumission (changement de page ou rafraîchissement)
            // => on prépare les données
            // => on les envoie au serveur
            // = AXIOS !
            // url :
            const registerUserURL = 'http://ec2-35-153-93-141.compute-1.amazonaws.com/projet-o-ctodraw/wp-json/wp/v2/users/inscription';
            const registerUserData = {
              "firstname":this.firstname,
              "lastname":this.lastname,
              "username": this.username,
              "email": this.email,
              "password": this.password
            };

            console.log(registerUserData);
            // on déclenche l'appel à l'API seulement si on a pas d'erreur !
            // on boucle sur l'objet this.errors pour vérifier que chaque valeur est une chaîne vide
            let hasErrors = false; // au début, pas d'erreur recensée
            for (const property in this.errors) {
              if (this.errors[property] !== '') {
                hasErrors = true;
              }
            }
            // si une ou plusieurs erreurs recensée(s), on interrompt cette méthode
            if (hasErrors) {
              return;
            }
            
            // axios.post() renvoie une prommesse
            // => lorsque l'appel à l'API sera terminé, la promesse sera résolue (ou échouera) => on exécute le/les then() (ou le/les catch)
            // attention, on doit utiliser des fonctions fléchées avec then et catch car sinon "this" ne fera référence à notre composant
            axios.post(registerUserURL, registerUserData).then((response) => {
              // si la requête est un succès
              // on passe le statut du succes à true
              this.registrationSuccess = true;
              // on vide le formulaire
              this.firstname = '';
              this.lastname = '';
              this.email = '';
              this.username = '';
              this.password = '';
              this.confirmPassword = '';
            })
            .catch((error) => {
              // sinon
              this.registrationFailure = true;
              // dans le catch, le paramètre "error" contient toute la réponse à la clé "response"
              // => on peut lire le body
              this.registrationFailureMessage = error.response.data.message;
            });
        }
    }
};
</script>

<style lang="scss" scoped>

</style>