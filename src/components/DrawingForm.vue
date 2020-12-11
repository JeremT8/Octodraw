<template>
  <form v-on:submit.prevent="onFormSubmit">
          <fieldset class="registerform">
            <div class="add-drawing">
              <img class="drawing" src="">
            </div>
            <div>
              <div
                class="imagePreviewWrapper"
                :style="{ 'background-image': `url(${previewImage})` }"
                @click="selectImage">
              </div>
          <!-- TODO PENSEZ A AJOUTER LE SELECT POUR CHOISIR QUEL TYPE DE DESSIN C'EST -->

            <div class="text-center">
              <b-button class="button_type" v-b-popover.hover.left="'Le croquis ou esquisse est [...]'" title="Croquis">
                CROQUIS
              </b-button>
              <b-button class="button_type" v-b-popover.hover.right= "'La planche de dessin est [...]'" title="Planche">
                PLANCHE
              </b-button>
            </div>

            
            <div>
              <input
                class="file"
                ref="fileInput"
                type="file"
                @input="pickFile"
                accept=".png, .jpg, .jpeg, .svg">
            </div>


            

            <div class="field">
                <label class="field__label"> Ajouter un nom à votre oeuvre</label><br>
                <input
                    class="field__input"
                    type="text"
                    placeholder="Nom de la création"
                    v-model="name"
                />
            </div>

            <div class="field">
                <label class="field__label"> Une citation pour accompagner l'oeuvre</label><br>
                <input
                    class="field__input"
                    type="text"
                    placeholder="Une petite citation pour accompagner ta réflexion"
                    v-model="citation"
                />
            </div>

            <div class="field">
                <label class="field__label"> Description de l'oeuvre</label><br>
                <input
                    class="field__input"
                    type="text"
                    placeholder="Description de l'oeuvre en mode Kiemtao"
                    v-model="description"
                />
            </div>

              <button class="button">O'CTOSUBMIT</button>
          </fieldset>
        </form>
</template>


<script>
export default {
  data() {
      return {
        previewImage: null
      };
    },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }
  }
}
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
    width: 100%;
    height: 300px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

.registerform{
  text-align:center;
  margin: 10% 25%;
  padding: 20px 40px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #e53120 , #ab3120);
  color: #0d2578;
  display: flex;
  flex-direction: column;
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
  display: flex;
  //flex-direction: row;
  justify-content: center;
  margin: 20px 0 0 40%;
  cursor: pointer;
}

p {
  margin-top: 10px;
}

.button_type {
  border: none;
  color: white;
  border-radius: 30px;
  background-image: linear-gradient(to right, #0d2578 , #0d2638);
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 25px 25px 10px 25px;
  cursor: pointer;
}


.text-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.field__input {
  border-radius: 20px;
  width: 50%;
}
.file {
  border-radius: 20px;
}
</style>
