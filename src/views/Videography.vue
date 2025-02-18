<template lang="pug">
.video.skill
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  .video-info
    h1.ma-2 Videography
    p Video is a powerful medium, useful for conveyong complex messages, in an easily digestable form. I apreciate this power and harness it to educate, inspire and prevoke new perspectives.

  .v-container
    .v-row(sm="12")
      .v-card(style="width: 100%")
        .v-card-title
          h3.primary-title Matajur Peak Timelapse
          h4.subtitle-1 A 90 minute timelapse looking out over Slovenia's Soča River Valley from on top of Matajur Peak in 2024
        .v-card-text.video-player
          iframe(width="560" height="315" src="https://www.youtube.com/embed/KmDGvHkVhvk?si=AjnIDopAG_EvvAmv" title="Cloud Sea Timelapse" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    .v-row(sm="12")
      .v-card(style="width: 100%")
        .v-card-title
          h3.primary-title American Ninja Warrior Entry Video
          h4.subtitle-1 Produced for my friend Critter in 2015
        .v-card-text.video-player
          iframe(src="https://www.youtube.com/embed/9o6mhFOJO5c?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    .v-row(sm="12")
      .v-card(style="width: 100%")
        .v-card-title
          h3.primary-title Cloud Sea Timelapse
          h4.subtitle-1 Filmed near Nederland, CO
        .v-card-text.video-player
          iframe(width="560" height="315" src="https://www.youtube.com/embed/L46CGIbLuAg?si=ypXafbe4WhIdw69S" title="Cloud Sea Timelapse" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    .v-row(sm="12")
      .v-card(style="width: 100%")
        .v-card-title
          h3.primary-title Way High Radio Promo Video
          h4.subtitle-1 Produced in 2015
        .v-card-text.video-player
          iframe(width="560" height="315" src="https://www.youtube.com/embed/gYpYreUpXYk?si=sJokumzSesxNq6mq" title="Cloud Sea Timelapse" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
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
