<template lang="pug">
.gallery.skill
  masonry-wall(:items="items" :ssr-columns="1" :column-width="300" :gap="16")
    template(#default="{ item, index }")
      div(:style="{ height: `${(index + 1) * 100}px` }")
        v-img(:src="item.src")
        h1 {{ item.title }}
        span {{ item.description }}
  //- v-carousel(:cycle="cycle" interval="10000" height="100%" hide-delimiters)
  //-   v-carousel-item(v-for="image in images" :key="image" :src="image")
  //- v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  //- v-fab(v-if="cycle" flat location="bottom end" app icon="fa:fas fa-pause" @click="cycle = false")
  //- v-fab(v-else flat location="bottom end" app icon="fa:fas fa-play" @click="cycle = true")
</template>

<script>
export default {
  name: "photos",
  data: () => ({
    cycle: true,
    items: [
      { src: "/images/photography/best/img (1).jpg", title: "Image 1", description: "" },
      { src: "/images/photography/best/img (2).jpg", title: "Image 2", description: "" },
      { src: "/images/photography/best/img (3).jpg", title: "Image 3", description: "" },
      { src: "/images/photography/best/img (4).jpg", title: "Image 4", description: "" },
      { src: "/images/photography/best/img (5).jpg", title: "Image 5", description: "" },
      { src: "/images/photography/best/img (6).jpg", title: "Image 6", description: "" },
      { src: "/images/photography/best/img (7).jpg", title: "Image 7", description: "" },
      { src: "/images/photography/best/img (8).jpg", title: "Image 8", description: "" },
      { src: "/images/photography/best/img (9).jpg", title: "Image 9", description: "" },
      { src: "/images/photography/best/img (10).jpg", title: "Image 10", description: "" },
      { src: "/images/photography/best/img (11).jpg", title: "Image 11", description: "" },
      { src: "/images/photography/best/img (12).jpg", title: "Image 12", description: "" },
      { src: "/images/photography/best/img (13).jpg", title: "Image 13", description: "" },
      { src: "/images/photography/best/img (14).jpg", title: "Image 14", description: "" },
      { src: "/images/photography/best/img (15).jpg", title: "Image 15", description: "" },
      { src: "/images/photography/best/img (16).jpg", title: "Image 16", description: "" },
      { src: "/images/photography/best/img (17).jpg", title: "Image 17", description: "" },
      { src: "/images/photography/best/img (18).jpg", title: "Image 18", description: "" },
      { src: "/images/photography/best/img (19).jpg", title: "Image 19", description: "" },
      { src: "/images/photography/best/img (20).jpg", title: "Image 20", description: "" },
      { src: "/images/photography/best/img (21).jpg", title: "Image 21", description: "" },
      { src: "/images/photography/best/img (22).jpg", title: "Image 22", description: "" },
      { src: "/images/photography/best/img (23).jpg", title: "Image 23", description: "" },
      { src: "/images/photography/best/img (24).jpg", title: "Image 24", description: "" },
      { src: "/images/photography/best/img (25).jpg", title: "Image 25", description: "" },
      { src: "/images/photography/best/img (26).jpg", title: "Image 26", description: "" },
      { src: "/images/photography/best/img (27).jpg", title: "Image 27", description: "" },
      { src: "/images/photography/best/img (28).jpg", title: "Image 28", description: "" },
      { src: "/images/photography/best/img (29).jpg", title: "Image 29", description: "" },
      { src: "/images/photography/best/img (30).jpg", title: "Image 30", description: "" },
      { src: "/images/photography/best/img (31).jpg", title: "Image 31", description: "" },
      { src: "/images/photography/best/img (32).jpg", title: "Image 32", description: "" },
      { src: "/images/photography/best/img (33).jpg", title: "Image 33", description: "" },
      { src: "/images/photography/best/img (34).jpg", title: "Image 34", description: "" },
      { src: "/images/photography/best/img (35).jpg", title: "Image 35", description: "" },
      { src: "/images/photography/best/img (36).jpg", title: "Image 36", description: "" },
      { src: "/images/photography/best/img (37).jpg", title: "Image 37", description: "" },
      { src: "/images/photography/best/img (38).jpg", title: "Image 38", description: "" },
      { src: "/images/photography/best/img (39).jpg", title: "Image 39", description: "" },
      { src: "/images/photography/best/img (40).jpg", title: "Image 40", description: "" },
      { src: "/images/photography/best/img (41).jpg", title: "Image 41", description: "" },
      { src: "/images/photography/best/img (42).jpg", title: "Image 42", description: "" },
      { src: "/images/photography/best/img (43).jpg", title: "Image 43", description: "" },
      { src: "/images/photography/best/img (44).jpg", title: "Image 44", description: "" },
      { src: "/images/photography/best/img (45).jpg", title: "Image 45", description: "" },
      { src: "/images/photography/best/img (46).jpg", title: "Image 46", description: "" },
      { src: "/images/photography/best/img (47).jpg", title: "Image 47", description: "" }
    ]
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
