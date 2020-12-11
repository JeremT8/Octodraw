<template>
  
  <div class="contactform">


  <div class="contact-effect">
    <span>O</span>
    <span>'</span>
    <span>C</span>
    <span>T</span>
    <span class="letter"></span>
    <span>D</span>
    <span>R</span>
    <span>A</span>
    <span>W</span>
</div>
<section>
  <p class="contact-link">En dessin, aucune distanciation subsiste; il sera le trait d’union entre vous et nous.</p>
  <p class="contact-quote">« Nous devenons ce que nous sommes à travers notre contact au monde, aux autres »</p>
  <p class="contact-author">Natascha Kampusch</p>
</section>

      
    <b-form-group
      id="fieldset-1"
      label="Votre nom"
      label-for="input-1"
      valid-feedback="Merci !"
    >
      <b-form-input id="input-1" v-model="name" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-2"
      label="Votre adresse E-mail"
      label-for="input-2"
      valid-feedback="Merci !"
    >
      <b-form-input id="input-2" v-model="email" trim></b-form-input>
    </b-form-group>

    <!-- Select -->
    <div class="mt-3">Parlez-nous de votre sujet: <strong>{{ selected }}</strong></div>
    <b-form-select v-model="selected" :options="options" ></b-form-select>

    <div class="mt-3">Decrivez nous votre requête :</div>
    <b-form-textarea
      id="textarea"
      placeholder="Ecrivez ici..."
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
            text: 'Selectionnez' 
          },
          { 
            value: 'Esquisse', 
            text: 'Esquisse' 
          },
          { 
            value: 'Planche de dessin', 
            text: 'Planche de dessin' 
          },
          { 
            value: 'Questions a propos du site', 
            text: 'Questions a propos du site' 
          },
          { 
            value: 'Autre demande', 
            text: 'Autre demande' 
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
  padding: 20px 40px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #0d2578 , #0d2638);

  color: #e53120;

  margin: 5% 15%;
  font-family: Comfortaa Bold;
  font-size: 1.2em;
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
  margin: 20px 0 0 0;
  cursor: pointer;

}

@media (min-width: 992px) {
  .container, .container-sm, .container-md, .container-lg {
    max-width: 1200px;
  } 
}

@media screen and (min-width: 601px) {
  .contactform {
    text-align:center;
    margin: 5% 10%;
    
  }
}

@media screen and (max-width: 600px) {
  .button {
    //font-size: 1rem;
    width: 10rem;
    text-align: center;
    padding: 10px 22px;
  }

  .contactform {
    text-align:center;
    margin: 45% 15%;

  }
}

@media screen and (min-width: 601px) {
  .button {
    //font-size: 1rem;
    width: 10rem;
    text-align: center;
    padding: 10px 22px;
  }


  .contactform {
    text-align:center;
    margin: 15% 10%;
  }
}

.mt-3{
  padding-bottom: 0.8%;
}

/* OCTODRAW CONTACT EFFECT START */

span{
	margin: 0 15px;
	animation: span 3s ease-in infinite alternate;
  font-family: "Comfortaa Bold";
  color: #ecf4e9;
}

.contact-effect{
  width: 100%;
  margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: sans-serif;
	font-size: 42px;
}

.letter{
	display: inline-flex;
	height: 26px;
	width: 20px;
	border: 4px solid #ecf4e9;
  margin-top: -0.2rem;
	border-radius: 25px;
	animation: letter 3s ease-in-out infinite alternate;
}

@keyframes span {
	0%,30%{ margin: 0 15px; }
	70%,100%{ margin: 0 5px; }
}

@keyframes letter {
	0%,30%{ width: 27px; }
	70%,100%{ width: 30vw; }
}

/* OCTODRAW CONTACT EFFECT END */

section p {
  display: flex;
  justify-content: center;
}

.contact-link {
  font-family: Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #ecf4e9;
  text-align: center;
  margin-top: 3rem;
}

.contact-quote {
  font-size: 1rem;
  font-family: Helvetica, sans-serif;
  font-style: italic;
  color: #ecf4e9;
}

.contact-author {
  font-size: 1rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  color: #ecf4e9;
  margin-bottom: 4rem;

}

</style>