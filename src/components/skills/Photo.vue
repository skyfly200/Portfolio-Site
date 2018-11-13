<template lang="pug">
  .gallery.skill
    vue-flux(
      :options="fluxOptions"
      :images="fluxImages"
      :transitions="fluxTransitions"
      ref="slider")
    button(@click="$refs.slider.showImage('next')") &#10094;
    button(@click="$refs.slider.showImage('previous')") &#10095;
</template>

<script>
import { VueFlux, Transitions } from "vue-flux";

export default {
  name: "photo",
  components: {
    VueFlux
  },
  data: () => ({
    fluxOptions: {
      autoplay: true
    },
    fluxImages: [
      "http://placekitten.com/1000/800",
      "http://placekitten.com/1000/700",
      "http://placekitten.com/1000/701",
      "http://placekitten.com/1000/702",
      "http://placekitten.com/1000/900"
    ],
    fluxTransitions: {
      transitionBook: Transitions.transitionCamera
    }
  })
};
</script>

<style lang="sass">
  .gallery
    text-align: center
    height: 80vh
</style>
