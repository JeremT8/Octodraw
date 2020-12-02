<template>
  <div id="carousel">
            <carousel-3d>
              <slide v-for="(slide, i) in slides" :index="i" v-bind:key="slide.id">
                <img src="https://placehold.it/360x270">
              </slide>
            </carousel-3d>
          </div>
</template>

<script>
import axios from 'axios';
import Carousel3d from 'vue-carousel-3d';

export default {
    // toutes les data doivent être déclarées avec une valeur (être non nulles) pour éviter les erreurs dans le template
    data() {
        return { 
            slides: []
        }
    },
};   

<style lang="scss" scoped>

</style>