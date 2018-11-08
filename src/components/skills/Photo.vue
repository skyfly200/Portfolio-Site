<template lang="pug">
  .gallery
    .slides
      .slide
        img(src="/images/bkgs/20140615_161556.jpg")
      .slide
        img(src="/images/bkgs/20140616_084526.jpg")
      .slide
        img(src="/images/bkgs/20140705_132704-d1.jpg")
      .slide
        img(src="/images/bkgs/20140729_175439.jpg")
      button(onclick="plusDivs(-1)") &#10094;
      button(onclick="plusDivs(+1)") &#10095;
</template>

<script>
export default {
  name: "photo",
  components: {}
};
</script>

<style lang="sass">
  .gallery
    text-align: center
    &.topic-expanded
      display: flex
      align-items: center
    .gallery
      .slides
        button
          color: #000
      .slide
        display: none
        img
          max-width: 100%
          max-height: 95vh
    @media (max-width: 800px)
      padding: 0px
      .video-player
        iframe
          width: 480px
          height: 360px
</style>
