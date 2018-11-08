<template lang="pug">
  .video
    .video-info
      h2 As a picture is worth a thousand words, video is indescribable
      p Video is a powerful medium, useful for conveyong complex messages, in an easily digestable form.
        | I apreciate this power and harness it to educate, inspire and prevoke new perspectives.
      h3 Now check out my friend Critter's entry video to American Ninja Warrior.

    .video-player
      iframe(src="https://www.youtube.com/embed/9o6mhFOJO5c?rel=0" frameborder="0" allowfullscreen)
</template>

<script>
export default {
  name: "video",
  components: {}
};
</script>

<style lang="sass">
  .video
    text-align: center
    color: black
    background: rgba(255,255,255,0.75)
    box-shadow: 2px 5px 5px black
    padding: 10px
    &.topic-expanded
      display: flex
      align-items: center
    .video-info
      padding: 10px 25px
      width: auto
      margin: auto
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
</style>
