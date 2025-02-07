<template lang="pug">
.bio
  v-fab(to="/" flat location="top start" app).home-btn Back

  .v-container
    .v-row(sm=12)
      h1.ma-2 Bio
    .v-row
      .v-col(sm="12")
        .bio-info
          p Grew up in ward
          p Lived in NC
          p Flash Games
          p PC Games (seaworld tycoon, pokemon, spore, rachet and clank, Skyrim, Oblivion, Fallout NMS, Cities Skylines)
          p Got my first computer around 1st or second grade
          p Started programming in 6th or 7th grade
          p Started learning electronics in 8th or 9th grade
          p Gradutaed high school in 2013
          p Way High Radio
          p Coloradoo Community Radio Network
          p Other things I've done:
          p Audio Engineering
          p Video Production
          p Mycology
          p Photography
          p 3D Printing
          P Guitar (youtube Video)

      .v-col(sm="12")
        .v-card(style="width: 100%")
          .v-card-title
            h3.primary-title 
            h4.subtitle-1 Produced for my friend Critter in 2015
          .v-card-text.video-player
            iframe(src="https://www.youtube.com/embed/9o6mhFOJO5c?rel=0" frameborder="0" allowfullscreen)
</template>

<script>
export default {
  name: "bio",
  components: {}
};
</script>

<style lang="sass">
.bio
  text-align: center
  color: white
  &.topic-expanded
    display: flex
    align-items: center
  .bio-info
    padding: 10px 25px
    width: auto
    margin: auto
    p
      font-size: 1.2em
  @media (max-width: 1050px)
    flex-direction: column
    .video-info
      width: 100%
  @media (max-width: 800px)
    padding: 0px
    .video-player
      iframe
        width: 480px
        height: 360px

  .home-btn
    a
      color: white

</style>
