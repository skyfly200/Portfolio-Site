<template lang="pug">
.audio-eng.skill
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  .audio-info
    h1.ma-5 Sound Engineering
    p
      | With a comprehensive understanding of signal flow and equipment, as well as a well refined ear,
      | I'm confident in my ability to create clear and powerful sounding experiences.
    br
    p
      | I have run sound at venues in the Boulder area, including Shine, The Laughing Goat and The Caribou Room.
      | I worked as a Stage Manager at Frozen Dead Guy Days 2017 and 2018. 
      | Comfortable in a studio environment as well, I've tracked, mixed and mastered content at Kodiak Lake Studios.
    br
    p
      | A founder of Colorado Community Radio Network (CCRN) and Technical Director Way High Radio.
      | I manage a large swath of infrastructure, coordinate syndication and create content, to keep our community radio network running smoothly and keep our community up to speed.
    br
    v-btn(href="http://coloradocommunityradio.com/" target="_blank") Learn More About CCRN
    br
    br
    v-btn(href="http://wayhighradio.com/" target="_blank") Learn More About KWHR
    br
    br
    hr
    br

  v-container.archives
    v-row.archives-title
      h1 Some examples of my work
    v-row.archive-players
      v-col(cols="12" md="6")
        v-card
          v-card-title Telluride Brews and Blues 2015
          v-card-text
            iframe(src="https://archive.org/embed/CCRN-TBB2015&playlist=1&list_height=190" width="100%" height="190" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen)
          v-card-actions
            v-btn(href="https://archive.org/details/CCRN-TBB2015" target="_blank") View on Archive.org
      v-col(cols="12" md="6")
        v-card
          v-card-title William Padilla Brown Interview
          v-card-text
            iframe(src="https://archive.org/embed/WilliamPadillaBrownInterview&playlist=1&list_height=70" width="100%" height="70" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen)
          v-card-actions
            v-btn(href="https://archive.org/details/WilliamPadillaBrownInterview" target="_blank") View on Archive.org

    v-row.more-button
      v-btn(href='https://archive.org/details/@skybfly' target="_blank") More Recordings

</template>

<script>
export default {
  name: "audioEng",
  components: {}
};
</script>

<style lang="sass">
.audio-eng
  justify-content: center
  text-align: center
  color: white
  .audio-info
    margin: 10px
    text-align: center
    margin: auto

  .archives
    align-items: center
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

  .home-btn
    a
      color: white

</style>
