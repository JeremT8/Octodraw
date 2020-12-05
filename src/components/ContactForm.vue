<template>
  
  <div class="contactform">
      
    <b-form-group
      id="fieldset-1"
      label="Name"
      label-for="input-1"
      valid-feedback="Thank you !"
    >
      <b-form-input id="input-1" v-model="name" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-2"
      label="Email"
      label-for="input-2"
      valid-feedback="Thank you !"
    >
      <b-form-input id="input-2" v-model="email" trim></b-form-input>
    </b-form-group>

    <!-- Select -->
    <div class="mt-3">Tell us more about your subject: <strong>{{ selected }}</strong></div>
    <b-form-select v-model="selected" :options="options" ></b-form-select>

    <div class="mt-3">Put your message here</div>
    <b-form-textarea
      id="textarea"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    >
      <b-form-input v-model="message" ></b-form-input>
    </b-form-textarea>
    

    <button class="button">OCTOSUBMIT</button>
  </div>
  
</template>

<script>
export default {
    // Valeurs du computed pour les champs du b-form-group
    /**computed: {
        state() {
          return this.name.length >= 4;
          return this.email.length >= 4
        },
        invalidFeedback() {
          if (this.name.length > 0) {
            return 'Enter at least 4 characters.'
          }
          if (this.email.length > 0) {
            return 'Enter at least 4 characters.'
          }
          return 'Please enter something.'
        }
    },**/
    
    data() {
      return {
        // Valeurs ci-dessous pour les champs du b-form-select
        selected: null,
        options: [
          { 
            value: null, 
            text: 'Please select an option' 
          },
          { 
            value: 'Sketch', 
            text: 'Sketch' 
          },
          { 
            value: 'Drawing board', 
            text: 'Drawing board' 
          },
          { 
            value: 'Questions on the work of site', 
            text: 'Questions on the work of site' 
          },
          { 
            value: 'Other request', 
            text: 'Other request' 
          }
        ],
        // Valeurs ci-dessous pour les champs du b-form-group (v-model)
        name: '',
        email:'',
        message:'',
        errors: {
          name: '',
          email: '',
          message:'',
        }
      }
    },

    methods: {
        onFormSubmit(event) {
            // voir RegisterForm pour le fonctionnement de la validation
            this.errors = {
              name: '',
              email: '',
              message:'',
            };
            if (this.name.length === 0) {
                this.errors.name = "Le champ nom ne peut pas être vide !";
            }
            if (this.email.length === 0) {
                this.errors.email = "L'email ne peut pas être vide !";
            }
            if (this.message.length === 0) {
                this.errors.message = "Le message ne peut pas être vide !";
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
            // userService.connectUser(this.username, this.password)
            // .then(() => {
              // on exécute ce code lorsque la promesse retournée par axios.post() dans userUservice est résolue
              // au sein d'un composant, on peut utiliser this.$router pour avoir accès à l'instance du router passée à VueJS dans index.js
              // => on redirige vers la home
              // this.$router.push('/');
            // });
        }
    }
    
}
</script>

<style lang="scss" scoped>
.contactform{
  text-align:center;
  margin: 5% 25%;
  padding: 20px 40px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #e53120 , #ab3120);
  color: #0d2578;

  font-family: Comfortaa Medium;
}
.button{
  border: none;
  color: white;
  border-radius: 30px;
  background-image: linear-gradient(to right, #0d2578 , #0d2638);
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0 0 0;
  cursor: pointer;
}
.mt-3{
  padding-bottom: 2.5%;
}

</style>