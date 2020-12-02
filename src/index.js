import 'reset-css';
import Vue from 'vue';
import App from 'App.vue';
import router from './router';

console.log(window);

new Vue({
  el: '#example',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': window['carousel-3d'].Carousel3d,
    'slide': window['carousel-3d'].Slide
  }
})
