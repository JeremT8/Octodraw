<template>
<div>
    <!-- Using modifiers -->
    <b-button v-b-toggle.collapse-1 class="m-1">CROQUIS</b-button>

    <!-- Using value -->
    <b-button v-b-toggle.collapse-2 class="m-1">PLANCHE</b-button>

    <!-- Element to collapse -->
    <b-collapse id="collapse-1">
      <b-link class="theme_define">Theme 1 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 2 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 3 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 4 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 5 <!-- a dynamiser --></b-link>
    </b-collapse>

    <b-collapse id="collapse-2">
      <b-link class="theme_define">Theme 6 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 7 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 8 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 9 <!-- a dynamiser --></b-link>
      <b-link class="theme_define">Theme 10 <!-- a dynamiser --></b-link>
    </b-collapse>
  <div class="picture">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-img src="https://www.beautycolorcode.com/de00a5.png" alt="Image" class="rounded-0"></b-img>
    </b-card>
    
   </div> 
  </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.theme_define {
    margin-left: 15%;
    text-align: center;
}

.m-1 {
    
    width: 49%
    

}

.overflow-hidden {
    width: 200px;
    height: 200px;
}

.picture {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 15px;
    background-image: linear-gradient(to right, #ddcdccd7 , #92908f);
    padding: 40px;
    margin: 10px 40px;
}

img {
    margin-left: 0px;
    margin-bottom: 0px;
}
</style>