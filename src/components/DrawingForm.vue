<template>
  <form v-on:submit.prevent="onFormSubmit">
          <fieldset>
            <div class="add-drawing">
              <img class="drawing" src="">
            </div>

            <div>
              <div
                class="imagePreviewWrapper"
                :style="{ 'background-image': `url(${previewImage})` }"
                @click="selectImage">
              </div>

              <input
                ref="fileInput"
                type="file"
                @input="pickFile">
            </div>


              <!-- TODO PENSEZ A AJOUTER LE SELECT POUR CHOISIR QUEL TYPE DE DESSIN C'EST -->

              
            <div class="field">
                <label class="field__label"></label>
                <input
                    class="field__input"
                    type="text"
                    placeholder="Ajouter le dessin"
                    v-model="drawing"
                />
            </div>

            <div class="field">
                <label class="field__label"></label>
                <input
                    class="field__input"
                    type="text"
                    placeholder="Nom de la création"
                    v-model="name"
                />
            </div>

            <div class="field">
                <label class="field__label"></label>
                <input
                    class="field__input"
                    type="text"
                    placeholder="Une petite citation pour accompagner ta réflexion"
                    v-model="citation"
                />
            </div>

            <div class="field">
                <label class="field__label"></label>
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
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>
