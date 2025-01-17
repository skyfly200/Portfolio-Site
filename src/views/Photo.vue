<template lang="pug">
.gallery.skill
  v-toolbar(title="Skyler Fly-Wilson")
    v-btn(to="/" flat) Home
  v-carousel(:cycle="true" height="70vh")
    v-carousel-item(v-for="image in images" :key="image" :src="image")
</template>

<script>
export default {
  name: "photo",
  data: () => ({
    images: [
      "/images/features/photography/light/1.jpg",
      "/images/features/photography/light/2.jpg",
      "/images/features/photography/light/3.jpg",
      "/images/features/photography/light/4.jpg",
      "/images/features/photography/water/1.jpg",
      "/images/features/photography/water/2.jpg",
      "/images/features/photography/water/3.jpg",
      "/images/features/photography/water/4.jpg",
      "/images/features/photography/water/5.jpg",
      "/images/features/photography/texture/1.jpg",
      "/images/features/photography/landscape/1.jpg",
      "/images/features/photography/landscape/2.jpg",
      "/images/features/photography/landscape/3.jpg",
      "/images/features/photography/landscape/4.jpg",
      "/images/features/photography/landscape/5.jpg",
      "/images/features/photography/landscape/6.jpg",
      "/images/features/photography/insects/1.jpg",
      "/images/features/photography/insects/2.jpg",
      "/images/features/photography/insects/3.jpg",
      "/images/features/photography/plants/1.jpg",
      "/images/features/photography/plants/2.jpg",
      "/images/features/photography/fungi/1.jpg",
      "/images/features/photography/fungi/2.jpg",
      "/images/features/photography/fungi/3.jpg",
      "/images/features/photography/fungi/4.jpg",
      "/images/features/photography/fungi/5.jpg",
      "/images/features/photography/fungi/6.jpg",
      "/images/features/photography/fungi/7.jpg"
    ],
  })
};
</script>

<style lang="sass">
.gallery
  flex-direction: column
  text-align: center
  height: 80vh
  @media(min-width: 1000px)
    max-width: 943px
    margin: auto
  .gallery-nav
    button
      color: black
</style>
