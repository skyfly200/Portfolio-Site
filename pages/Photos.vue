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
                  h3 {{ item.title }}
                v-card-text.text-h6.text-white.d-flex.flex-column
                  p {{ item.description }}
  v-overlay(v-model="focus" width="100vw" height="100vh")
    v-carousel(v-model="selected" :cycle="cycle" interval="10000" height="100%" hide-delimiters)
      v-carousel-item(v-for="item in items" :key="item.title" :src="item.src")
    v-fab.mr-3(v-if="cycle" flat location="bottom end" app icon="fa:fas fa-pause" @click="cycle = false")
    v-fab.mr-3(v-else flat location="bottom end" app icon="fa:fas fa-play" @click="cycle = true")
    v-fab.mr-3(flat location="top end" app @click="focus = false") Close
</template>

<script>
export default {
  name: "photos",
  data: () => ({
    cycle: false,
    focus: false,
    selected: 0,
    items: [
      { src: "/images/photography/best/img (1).jpg", title: "Water Lily", description: "In the Japanese garden in Budapest, Hungary" },
      { src: "/images/photography/best/img (2).jpg", title: "Balloon Over Budapest", description: "Hot Air Balloon Over Budapest" },
      { src: "/images/photography/best/img (3).jpg", title: "Budapest Skyline", description: "Skyline of Budapest with Ferris wheel" },
      { src: "/images/photography/best/img (4).jpg", title: "Statue in Budapest", description: "A statue perched on the hill, with a stairway leading up to it" },
      { src: "/images/photography/best/img (5).jpg", title: "Innsbruck Paragliders", description: "Gliding amongst the majestic Austrian Alps" },
      { src: "/images/photography/best/img (6).jpg", title: "Vineyard In Italy", description: "Terraces of vines in the Italian countryside near Belluno, Italy" },
      { src: "/images/photography/best/img (7).jpg", title: "Bike in Bologna", description: "A distinct bike parked near the market in Bologna, Italy" },
      { src: "/images/photography/best/img (8).jpg", title: "Chapel in the Clouds", description: "The picturesque chapel of a small town in the Dolomites, Italy" },
      { src: "/images/photography/best/img (9).jpg", title: "Golden Peak", description: "A peak glowing in the last light of the day, taken from Passo di Falzarego in the Italian Dolomites" },
      { src: "/images/photography/best/img (10).jpg", title: "Shrouded in Clouds", description: "Taken from Passo di Falzarego in the Italian Dolomites" },
      { src: "/images/photography/best/img (11).jpg", title: "Towering Above The Clouds", description: "Taken from Passo di Falzarego in the Italian Dolomites" },
      { src: "/images/photography/best/img (12).jpg", title: "Dragon Stands Guard", description: "Dragon bridge in Ljubljana, Slovenia" },
      { src: "/images/photography/best/img (13).jpg", title: "Golden Road", description: "The trail up Matajur peak in Italy" },
      { src: "/images/photography/best/img (14).jpg", title: "Cave Castle", description: "A castle nestled inside the mouth of a cave in Predjama, Slovenia" },
      { src: "/images/photography/best/img (15).jpg", title: "Bricks n Bliss", description: "Farm Fields north east of Venice, Italy" },
      { src: "/images/photography/best/img (16).jpg", title: "Monet's House", description: "The house Monet lived in amongst his amazing gardens in Giverny, France" },
      { src: "/images/photography/best/img (17).jpg", title: "Cliffs of Etretat", description: "A boat sits on a beach in Etretat, France with its famous cliffs in the background" },
      { src: "/images/photography/best/img (18).jpg", title: "Flight Over Normandy", description: "A moment from the 80th anniversary of D-Day renactments on Utah Beach" },
      { src: "/images/photography/best/img (19).jpg", title: "Snug Fungi", description: "Three mushrooms perfectly wedged in under a stick" },
      { src: "/images/photography/best/img (20).jpg", title: "Dripping Columbine", description: "Columbine covered in dew and ants" },
      { src: "/images/photography/best/img (21).jpg", title: "Majestic Caps", description: "A cluster of fungi on the edge of a swamp" },
      { src: "/images/photography/best/img (22).jpg", title: "Magic Morel", description: "A black morel sits majestically in a pine forest" },
      { src: "/images/photography/best/img (23).jpg", title: "Bee Making the Rounds", description: "A bee drinks from a fire weed blossom and basks in the golden light" },
      { src: "/images/photography/best/img (24).jpg", title: "Juniper Dew", description: "Morning Dew on a Juniper bush with berries" },
      { src: "/images/photography/best/img (25).jpg", title: "Beach Debris", description: "Taken at Sandy Point Beach on St Croix." },
      { src: "/images/photography/best/img (26).jpg", title: "Grit", description: "A motor bike and building in Magdalena, Mexico" },
      { src: "/images/photography/best/img (27).jpg", title: "Agave with a View", description: "An Agave plant high above the city of Agua Calientes in Mexico" },
      { src: "/images/photography/best/img (28).jpg", title: "Vast Vibrant Views", description: "Looking out on the Copper Canyon in Mexico" },
      { src: "/images/photography/best/img (29).jpg", title: "Bee in a Blue Bell", description: "A bee collecting nectar from a hare bell blossom" },
      { src: "/images/photography/best/img (30).jpg", title: "Cliffs at Curecanti", description: "Landscape from Curecanti National Recreation Area" },
      { src: "/images/photography/best/img (31).jpg", title: "Perfect Cap", description: "A LBM fungi with cool dark gill patterns" },
      { src: "/images/photography/best/img (32).jpg", title: "Aspen Leaf Dew", description: "Dew drops on an aspen leaf" },
      { src: "/images/photography/best/img (33).jpg", title: "Architectural Textures", description: "A wall at a cafe in Lisbon with a very interesting texture" },
      { src: "/images/photography/best/img (34).jpg", title: "Lisbon Stairway", description: "A stairway through the streets of Lisbon, Portugal" },
      { src: "/images/photography/best/img (35).jpg", title: "Egyptian Statue", description: " A majestic statue from Egypt in the Lisbon botanical gardens" },
      { src: "/images/photography/best/img (36).jpg", title: "Avenue Liberdade", description: "Avenue Liberdade in the center of Lisbon, Portugal" },
      { src: "/images/photography/best/img (37).jpg", title: "Reflecting at Dusk", description: "A restaurant across a pond reflects in the last light of the day. Lisbon, Portugal" },
      { src: "/images/photography/best/img (38).jpg", title: "Pena Palace", description: "Pena Palace on the hill top in Sintra, Portugal" },
      { src: "/images/photography/best/img (39).jpg", title: "Monstera Fruit", description: "A blossoming and fruiting Monstera Deliciosa at Pena Palace in Sintra, Portugal" },
      { src: "/images/photography/best/img (40).jpg", title: "Smoking Room Ceiling", description: "A geometric ceiling supports an exquisite chandelier of morning glory flowers in Pena Palace in Sintra, Portugal" },
      { src: "/images/photography/best/img (41).jpg", title: "Grotto De Regalia", description: "A magical grotto in the gardens of Quinta De Regalia in Sintra, Portugal" },
      { src: "/images/photography/best/img (42).jpg", title: "Peace Palace ", description: "The International Peace Palace in the Hague, Netherlands" },
      { src: "/images/photography/best/img (43).jpg", title: "Eenden in Het Plein", description: "Duck in the center square of the Hague" },
      { src: "/images/photography/best/img (44).jpg", title: "Depot Bloemen", description: "Tulips in front of the depot building, standing on Museumplein in Rotterdam, Netherlands" },
      { src: "/images/photography/best/img (45).jpg", title: "Tropical Canopy", description: "Palm and various other trees canopies at the Lisbon Botanical gardens in Portugal" },
      { src: "/images/photography/best/img (46).jpg", title: "Staircase to the Light", description: "A vibrant stairway at the Lisbon Botanical gardens in Portugal" },
      { src: "/images/photography/best/img (47).jpg", title: "Gothic Galore", description: "A chapel in Vienna, Austria" },
      { src: "/images/photography/best/img (48).jpg", title: "Astoria Sunset", description: "A sunset in the hills of Astoria, OR nearby the house from the Goonies" },
      { src: "/images/photography/best/img (49).jpg", title: "Ecola State Park", description: "Gorgeous state park on the Oregon coast" },
      { src: "/images/photography/best/img (50).jpg", title: "Cannon Beach", description: "Where the film The Goonies was filmed" },
      { src: "/images/photography/best/img (51).jpg", title: "Mangartski Potok Viaduct", description: "Right by the road up to Mangart Peak in Slovenia" },
      { src: "/images/photography/best/img (52).jpg", title: "Frosty Flagstaff", description: "A frosty view of the back of the flatirons in Boulder, CO with the moon shining up above" },
      { src: "/images/photography/best/img (53).jpg", title: "Totality 2024", description: "Total solar eclipse of 2024 viewed from the hills nearby Austin Texas" },
      { src: "/images/photography/best/img (54).jpg", title: "Texas Eclipse Fest", description: "Ligths over the 2024 Texas Eclipse Fest" },
      { src: "/images/photography/best/img (55).jpg", title: "Gulf Sunrise", description: "Swimming in the sunrise glow of the Gulf" },
      { src: "/images/photography/best/img (56).jpg", title: "Two Chapels", description: "View from the main bridge in Basel Switzerland" },
      { src: "/images/photography/best/img (57).jpg", title: "Night Scape", description: "Cannon Beach in Oregon at night" }
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
    h3
      margin: 0
      flex-wrap: wrap
    p
      margin: 0
      
  .home-btn
    a
      color: white
      
</style>
