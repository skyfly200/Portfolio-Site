<template lang="pug">
  .audio
    .audio-info
      p With an comprehensive understanding of signal flow and equipment, as well as a well refined ear,
        | I'm confident in my ability to create powerful sounding experiences.
      p I have run sound at venues in the Boulder area, including Shine, The Laughing Goat and The Caribou Room.
        | I worked as a Stage Manager at Frozen Dead Guy Days 2017. Comfortable in a studio environment as well,
        | I have tracked, mixed and mastered content at Kodiak Lake Studios.
      p A founder of Colorado Community Radio Network (CCRN) and Technical Director Way High Radio.
        | I manage a wide degree of projects, to keep our community radio network running smoothly.
      a(href="http://coloradocommunityradio.com/" target="_blank")
        button Learn More About CCRN

    .archives
      .archive-player
        h3 Some examples of my work
        iframe(src="https://archive.org/embed/CCRN-TBB2015&playlist=1&list_height=200" width="100%" height="200" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen)

      .button
        a(href='https://archive.org/details/@skybfly' target="_blank")
          button More Recordings

</template>

<script>
export default {
  name: "audio",
  components: {}
};
</script>

<style lang="sass">
  #audio
    text-align: center
    color: #000
    background: rgba(255,255,255,0.75)
    .audio-info
      width: 60%
      margin: 10px
      text-align: center
      margin: auto
      h1
        margin-top: 0px

    .archives
      display: flex
      flex-direction: column
      align-items: center
      width: 40%
      min-width: 320px
      .archive-player
        padding: 10px 20px
        width: 100%
        h3
          margin: 5px
      @media (max-width: 520px)
        width: calc(100vw - 40px)
        .archive-player
          width: calc(95vw - 40px)
      @media (max-width: 380px)
        align-items: center
        .archive-player
          border-radius: 0px
          padding: 0px
          width: 100%
    @media (max-width: 800px)
      flex-direction: column
      .audio-info
        width: 100%
        padding: 20px 0px
      .archives
        width: 100%
        .archive-player
          width: 80%
</style>
