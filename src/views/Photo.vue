<template lang="pug">
.gallery.skill
  v-carousel(:cycle="cycle" interval="10000" height="100%" hide-delimiters)
    v-carousel-item(v-for="image in images" :key="image" :src="image")
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  v-fab(v-if="cycle" flat location="bottom end" app icon="fa:fas fa-pause" @click="cycle = false")
  v-fab(v-else flat location="bottom end" app icon="fa:fas fa-play" @click="cycle = true")
</template>

<script>
export default {
  name: "photo",
  data: () => ({
    cycle: true,
    images: [
      "/images/photography/best/img (1).jpg",
      "/images/photography/best/img (2).jpg",
      "/images/photography/best/img (3).jpg",
      "/images/photography/best/img (4).jpg",
      "/images/photography/best/img (5).jpg",
      "/images/photography/best/img (6).jpg",
      "/images/photography/best/img (7).jpg",
      "/images/photography/best/img (8).jpg",
      "/images/photography/best/img (9).jpg",
      "/images/photography/best/img (10).jpg",
      "/images/photography/best/img (11).jpg",
      "/images/photography/best/img (12).jpg",
      "/images/photography/best/img (13).jpg",
      "/images/photography/best/img (14).jpg",
      "/images/photography/best/img (15).jpg",
      "/images/photography/best/img (16).jpg",
      "/images/photography/best/img (17).jpg",
      "/images/photography/best/img (18).jpg",
      "/images/photography/best/img (19).jpg",
      "/images/photography/best/img (20).jpg",
      "/images/photography/best/img (21).jpg",
      "/images/photography/best/img (22).jpg",
      "/images/photography/best/img (23).jpg",
      "/images/photography/best/img (24).jpg",
      "/images/photography/best/img (25).jpg",
      "/images/photography/best/img (26).jpg",
      "/images/photography/best/img (27).jpg",
      "/images/photography/best/img (28).jpg",
      "/images/photography/best/img (29).jpg",
      "/images/photography/best/img (30).jpg",
      "/images/photography/best/img (31).jpg",
      "/images/photography/best/img (32).jpg",
      "/images/photography/best/img (33).jpg",
      "/images/photography/best/img (34).jpg",
      "/images/photography/best/img (35).jpg",
      "/images/photography/best/img (36).jpg",
      "/images/photography/best/img (37).jpg",
      "/images/photography/best/img (38).jpg",
      "/images/photography/best/img (39).jpg",
      "/images/photography/best/img (40).jpg",
      "/images/photography/best/img (41).jpg",
      "/images/photography/best/img (42).jpg",
      "/images/photography/best/img (43).jpg",
      "/images/photography/best/img (44).jpg",
      "/images/photography/best/img (45).jpg",
      "/images/photography/best/img (46).jpg",
      "/images/photography/best/img (47).jpg"
    ],
  })
};
</script>

<style lang="sass">
.gallery
  flex-direction: column
  text-align: center
  height: 100vh
  @media(min-width: 1000px)
    max-width: 943px
    margin: auto
  .gallery-nav
    button
      color: black
  
  .home-btn
    a
      color: white
      
</style>
