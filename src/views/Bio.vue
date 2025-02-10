<template lang="pug">
.bio
  v-fab(to="/" flat location="top start" app).home-btn Back

  .v-container
    .v-row(sm=12)
      h1.ma-2 Bio
    .v-row
      .v-col(sm="6")
        .bio-info
          .v-timeline
            .v-timeline-item
              .v-card
                .v-card-title Playing Flash Games on my Moms Mac
            .v-timeline-item
              .v-card
                .v-card-title Got my first computer around 1st or second grade
            .v-timeline-item
              .v-card
                .v-card-title Started programming in 6th or 7th grade
            .v-timeline-item
              .v-card
                .v-card-title Started learning electronics in 8th or 9th grade
            .v-timeline-item
              .v-card
                .v-card-title Way High Radio
            .v-timeline-item
              .v-card
                .v-card-title Colorado Community Radio Network

        .bio-skills
          h3 My areas of focus
          p Audio Engineering
          p Video Production
          p Mycology
          p Photography
          p 3D Printing
          p Guitar (youtube Video)

      .v-col(sm="6")
        img(src="/images/bio-img2.jpg" alt="A picture of me" width="100%")
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
