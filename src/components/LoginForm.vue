<template>
  <form v-on:submit.prevent="onFormSubmit">
    <fieldset>
      <div class="field">
        <h1 style="text-align: center">WE ARE WAITING FOR YOU</h1>
        <input
          class="field__input"
          type="email"
          placeholder="Email address"
          v-model="email"
        />
        <div class="error-message">{{ errors.email }}</div>
      </div>
      <div class="field">
        <input
          class="field__input"
          type="password"
          placeholder="Mot de passe"
          v-model="password"
        />
        <div class="error-message">{{ errors.password }}</div>
        <button class="button">OCTOSUBMIT</button>
        <div style="text-align: center">Aren't you part of your family yet ? <p class="underline">Come quickly !</p></div>
      </div>
    </fieldset>
  </form>
  
</template>

<script>
import userService from '../services/UserService';
export default {
    data() {
        return {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        };
    },
    
    methods: {
        onFormSubmit(event) {
            // voir RegisterForm pour le fonctionnement de la validation
            this.errors = {
                email: '',
                password: ''
            };
            if (this.email.length === 0) {
                this.errors.email = "Le nom d'utilisateur ne peut pas être vide !";
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
            userService.connectUser(this.email, this.password)
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

.field
    {
     text-align:center;
     margin:0 auto;
     padding:0px;
    }

.button{
  border: none;
  color: white;
  border-radius: 30px;
  background-image: linear-gradient(to right, #e53120 , #ab3120);
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.underline{
  text-decoration: underline;
}
</style>