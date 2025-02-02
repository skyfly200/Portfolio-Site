<template lang="pug">
.gallery.skill
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  masonry-wall(:items="items" :ssr-columns="1" :column-width="300" :gap="16")
    template(#default="{ item, index }")
      div
        v-hover(v-slot="{ isHovering, props }")
          v-card(:class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2" v-bind="props" @click="selected = index; focus = true")
            v-img(:src="item.src" cover class="elevation-2")
              .overlay(v-if="isHovering")
                v-card-title.text-h6.text-white.d-flex.flex-column
                  h2 {{ item.title }}
                v-card-text.text-h6.text-white.d-flex.flex-column
                  p {{ item.description }}
  v-overlay(v-model="focus" width="100vw" height="100vh" dark)
    v-carousel(v-modal="selected" :cycle="cycle" interval="10000" height="100%" hide-delimiters)
      v-carousel-item(v-for="item in items" :key="item.title" :src="item.src")
    v-fab(v-if="cycle" flat location="bottom end" app icon="fa:fas fa-pause" @click="cycle = false")
    v-fab(v-else flat location="bottom end" app icon="fa:fas fa-play" @click="cycle = true")
    v-fab(flat location="top end" app icon="fa:fas fa-x" @click="focus = false")
</template>

<script>
export default {
  name: "photos",
  data: () => ({
    cycle: false,
    focus: false,
    selected: 0,
    items: [
      { src: "/images/photography/best/img (1).jpg", title: "Water Lilly", description: "In the japaneese garden in budapest hungary" },
      { src: "/images/photography/best/img (2).jpg", title: "Balloon Over Budapest", description: "Hot Air Balloon Over Budapest" },
      { src: "/images/photography/best/img (3).jpg", title: "Budapest Skyline", description: "Skyline of budapest with faris wheel" },
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
  .gallery-nav
    button
      color: black
  
  .on-hover
    box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.5) !important

  .overlay
    background: rgba(0, 0, 0, 0.5)
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 16px
    h2
      margin: 0
    p
      margin: 0
      
  .home-btn
    a
      color: white
      
</style>
