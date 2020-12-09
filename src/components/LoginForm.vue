<template>
  <form class="formlogin" v-on:submit.prevent="onFormSubmit">
    <fieldset>
      <div class="field">
        <h1 style="text-align: center">WE ARE WAITING FOR YOU</h1>
        <label for="name">Identifiant :</label>
        <input class="field__input" type="text" placeholder="Identifiant" v-model="username"/>
        <div class="error-message">{{ errors.username }}</div>
      </div>
      <div class="field">
        <label for="name">Mot de passe :</label>
        <input class="field__input" type="password" placeholder="Mot de passe" v-model="password"/>
        <div class="error-message">{{ errors.password }}</div>
        <button class="button">OCTOSUBMIT</button>
        <p>Aren't you part of your family yet ? <span class="underline">Come quickly !</span></p>
      </div>
    </fieldset>
  </form>
  
</template>

<script>
import userService from '../services/UserService';
export default {
    data() {
        return {
            username: '',
            password: '',
            errors: {
                username: '',
                password: '',
            }
        };
    },
    
    methods: {
        onFormSubmit(event) {
            // voir RegisterForm pour le fonctionnement de la validation
            this.errors = {
                username: '',
                password: ''
            };
            if (this.username.length === 0) {
                this.errors.username = "Le nom d'utilisateur ne peut pas être vide !";
            }
            if (this.password.length === 0) {
                this.errors.password = "Le mot de passe ne peut pas être vide !";
            }
            let hasErrors = false; // au début, pas d'erreur recensée
            for (const property in this.errors) {
              if (this.errors[property] !== '') {
                hasErrors = true;
              }
            }
            if (hasErrors) {
                return;
            }  
            
            // connectuser retourne la promesse d'axios
            userService.connectUser(this.username, this.password)
            .then(() => {
              // on exécute ce code lorsque la promesse retournée par axios.post() dans userUservice est résolue
              // au sein d'un composant, on peut utiliser this.$router pour avoir accès à l'instance du router passée à VueJS dans index.js
              // => on redirige vers la home
              this.$router.push('/');
            });
        }
    }
};
</script>

<style lang="scss" scoped>


.formlogin {
    border-radius: 15px;
    padding: 40px;
    width: 350px;
    height: 150px;
    background-image: linear-gradient(to right, #0d2578 , #0d2638);
    color: white;
}


.error-message {
  color: #e53120;
  margin-top: 1rem;
}

.field {
     text-align: center;
     margin: auto;
     padding:0px;
     margin-top: 1rem;
     color: black;
     display: block;
}


input {
      border-radius: 20px;
      padding-left: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      width: 70%;
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  input {
    width: 85%;
  }
}

label {
  color: #ecf4e9;
  text-align: right;
  display: inline-block;
  width:20%;
}


/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  label {
    width: 50%;
    text-align: center;
  }
}

.button {
  border: none;
  color: #ecf4e9;
  border-radius: 30px;
  background-image: linear-gradient(to right, #e53120 , #ab3120);
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .button {
    margin-top: 1rem;
  }
}

.underline{
  border-bottom: 1px solid #ecf4e9;
}

h1 {
    font-family: "Comfortaa Bold";
    color: #ecf4e9;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    margin: auto;
    display: block;
    margin-bottom: 2rem;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  h1 {
    font-size: 1.5rem;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h1 {
    font-size: 1rem;
  }
}

p {
  text-align: center;
  font-family: Helvetica, sans-serif;
  color: #ecf4e9;
  margin-bottom: 2rem;
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  p {
    width: 80%;
    display: block;
    margin: auto;
    margin-bottom: 2rem;
  }
}

</style>