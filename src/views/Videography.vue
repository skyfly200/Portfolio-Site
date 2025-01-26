<template lang="pug">
.video.skill
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  .video-info
    h1 Videography
    h2 As a picture is worth a thousand words, video is indescribable
    p Video is a powerful medium, useful for conveyong complex messages, in an easily digestable form.
      | I apreciate this power and harness it to educate, inspire and prevoke new perspectives.

  .v-container
    .v-row(sm="12")
      .v-card(style="width: 100%")
        .v-card-title
          h3.primary-title American Ninja Warrior Entry Video
          h4.subtitle-1 Produced for my friend Critter in 2015
        .v-card-text.video-player
          iframe(src="https://www.youtube.com/embed/9o6mhFOJO5c?rel=0" frameborder="0" allowfullscreen)
</template>

<script>
export default {
  name: "videography",
  components: {}
};
</script>

<style lang="sass">
.video
  text-align: center
  color: white
  &.topic-expanded
    display: flex
    align-items: center
  .video-info
    padding: 10px 25px
    width: auto
    margin: auto
    p
      font-size: 1.2em
  .video-player
    iframe
      width: 720px
      height: 480px
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
