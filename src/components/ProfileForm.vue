<template class='content'>


  <div class="form-container">
    
    <div class="row">
  		<div class="col-sm-3"><!--left col-->
              

      <div class="text-center">
        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
        <h6>Changez votre photo de profil</h6>
        <input type="file" class="import-file">
      </div>
   
          
        </div><!--/col-3-->
    	<div class="col-sm-9">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home">ACCUEIL</a></li>
              </ul>

              
          <div class="tab-content">
            <div class="tab-pane active" id="home">
                <hr>
                  <form class="form" action="##" method="post" id="registrationForm">
                      <div class="form-group">
                          
                        <b-form-group
                        id="fieldset-1"
                        label="Prenom"
                        label-for="input-1"
                        valid-feedback="Thank you !"
                        >
                        <b-form-input id="input-1" v-model="FirstName" trim></b-form-input>
                        </b-form-group>
                      </div>
                      
                      <div class="form-group">
                          
                        <b-form-group
                        id="fieldset-2"
                        label="Nom"
                        label-for="input-2"
                        valid-feedback="Thank you !"
                        >
                        <b-form-input id="input-2" v-model="LastName" trim></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="form-group">
                          
                        <b-form-group
                        id="fieldset-3"
                        label="Nom d'utilisateur"
                        label-for="input-3"
                        valid-feedback="Thank you !"
                        >
                        <b-form-input id="input-3" v-model="UserName" trim></b-form-input>
                        </b-form-group>
                      </div>
          
                      <div class="form-group">
                          
                        <b-form-group
                        id="fieldset-4"
                        label="Telephone"
                        label-for="input-4"
                        valid-feedback="Thank you !"
                        >
                        <b-form-input id="input-4" v-model="Phone" trim></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="form-group">
                          
                        <b-form-group
                        id="fieldset-5"
                        label="Adresse Email"
                        label-for="input-5"
                        valid-feedback="Thank you !"
                        >
                        <b-form-input id="input-5" v-model="Email" trim></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="form-group">
                          
                        <div class="mt-3">Localisation: <strong>{{ selected }}</strong></div>
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                        
                      </div>
                      <div class="form-group">
                          
                        <b-form-group
                        id="fieldset-6"
                        label="Mot de passe"
                        label-for="input-6"
                        valid-feedback="Thank you !"
                        >
                        <b-form-input id="input-6" v-model="Password" trim></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="form-group">
                          
                        <b-form-group
                        id="fieldset-7"
                        label="Confirmer le mot de passe"
                        label-for="input-7"
                        valid-feedback="Thank you !"
                        >
                        <b-form-input id="input-7" v-model="CheckPassword" trim></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="form-group">
                           <div class="col-xs-12">
                                <br>
                              	<button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Modifier les informations</button>
                               	<button class="btn btn-lg" type="delete"><i class="glyphicon glyphicon-repeat"></i> Supprimer mon compte</button>
                            </div>
                      </div>
              	</form>
              
              <hr>
              
             </div><!--/tab-pane-->
          </div><!--/tab-content-->

        </div><!--/col-9-->
    </div><!--/row-->
</template>

  

<script>

export default {
    data() {
        return {
            FirstName:'',
            LastName:'',
            UserName:'',
            Phone:'',
            Email:'',
            Location:'',
            Password:'',
            CheckPassword:'',

            selected: null,
            options: [
                { value: null, text: 'Veuillez selectionner votre pays' },
                {
                    label: 'Europe',
                    options: [
                    { value: 'France', text: 'France' },
                    { value: 'Allemagne', text: 'Allemagne' },
                    { value: 'Italie', text: 'Italie' },
                    { value: 'Belgique', text: 'Belgique' },
                    { value: 'Pays-Bas', text: 'Pays-Bas' },
                    { value: 'Espagne', text: 'Espagne' },
                    { value: 'Portugal', text: 'Portugal' },
                    { value: 'Suisse', text: 'Suisse' },
                    { value: 'Luxembourg', text: 'Luxembourg' },
                    { value: 'Royaume Unis', text: 'Royaume Unis' },                
                    ]

                }
            ]
        }
    }
};

$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr(e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".import-file").on('change', function(){
        readURL(this);
    });
});
</script>

<style scoped>
.mt-3{
  padding-bottom: 1%;
}
.form-container{
  text-align:center;
  margin: 5% 15%;
  padding: 50px 30px 50px 30px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #e53120 , #ab3120);
  color: #0d2578;

  font-family: Comfortaa Medium;
}

.nav-tabs {
  border: none;
  color: white;
  border-radius: 30px;
  background-image: linear-gradient(to right,#0d2578 , #0d2638);
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

img {
    margin-left: 0px;
    margin-bottom: 15px;
    border-radius: 50%;

}

.import-file {
    display: flex;
    flex-direction: column;
    align-content: space-between;
}

@media screen and (max-width: 600px) {
  
  .form-container {
    text-align:center;
    margin: 45% 15%;
    
  }
}

@media screen and (min-width: 601px) {
  
  .form-container {
    text-align:center;
    margin: 15% 10%;
    
  }
}

</style>