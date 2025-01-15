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
      "/images/features/light/1.jpg",
      "/images/features/light/2.jpg",
      "/images/features/light/3.jpg",
      "/images/features/light/4.jpg",
      "/images/features/water/1.jpg",
      "/images/features/water/2.jpg",
      "/images/features/water/3.jpg",
      "/images/features/water/4.jpg",
      "/images/features/water/5.jpg",
      "/images/features/texture/1.jpg",
      "/images/features/landscape/1.jpg",
      "/images/features/landscape/2.jpg",
      "/images/features/landscape/3.jpg",
      "/images/features/landscape/4.jpg",
      "/images/features/landscape/5.jpg",
      "/images/features/landscape/6.jpg",
      "/images/features/insects/1.jpg",
      "/images/features/insects/2.jpg",
      "/images/features/insects/3.jpg",
      "/images/features/plants/1.jpg",
      "/images/features/plants/2.jpg",
      "/images/features/fungi/1.jpg",
      "/images/features/fungi/2.jpg",
      "/images/features/fungi/3.jpg",
      "/images/features/fungi/4.jpg",
      "/images/features/fungi/5.jpg",
      "/images/features/fungi/6.jpg",
      "/images/features/fungi/7.jpg"
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
