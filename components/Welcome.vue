<template lang="pug">
// Welcome Section
.welcome#welcome
  ClientOnly
    .welcome-block
      .welcome-content.px-5
        .welcome-heading(data-aos="fade" data-aos-delay="100")
          h2 Welcome
        .welcome-blurb(data-aos="fade" data-aos-delay="100")
          p I dabble in a diverse range of fascinating interests. A core thread that ties these areas together is a desire to create seamless, intuitive and awe inspiring expierences.
          p Learning new things is a top priority. I am a lifelong learner, finding new concepts and perspectives every day. Below I have distilled an array of projects and content showcasing my most potent passions and talents. I will be regularly updating this site, so be sure to check back to see what I am up to.
        .bio-link.pa-7
          v-btn(v-if="false" to="/bio" :color="$color-secondary-1-0" rounded="lg" size="large" variant="text") More About Me
        hr
        .welcome-social
          a(href="https://github.com/skyfly200", target="_blank")
            svg.fab.fa-github.fa-2x
          a(href="http://codepen.io/skyfly200/", target="_blank")
            svg.fab.fa-codepen.fa-2x
          a(href="https://www.linkedin.com/in/skyler-fly-wilson-38870986", target="_blank")
            svg.fab.fa-linkedin.fa-2x
          a(href="mailto:skyler@skylerfly.com", target="_blank")
            svg.fa.fa-envelope.fa-2x

    .welcome-img(data-aos="fade-left" data-aos-delay="100")
      img(src="/images/bio-img2.jpg" alt="A picture of me" cover)
</template>

<script>
export default {
  name: "welcome",
  components: {}
};
</script>

<style lang="sass">
// Welcome Block Styles
.welcome
  @extend .flex-box-center
  width: 100%
  min-height: 105vh
  display: flex
  background-color: $color-secondary-2-2
  @include card-depth(1)

  .welcome-block
    @extend .flex-box-center
    padding: 10px 20px
    .welcome-social
      display: flex
      justify-content: space-around
      padding: 20px
      a svg
        transition: all 200ms
        filter: drop-shadow( 0px 0px 0px rgba(0, 0, 0, .75))
        &:hover
          filter: drop-shadow( 0px 5px 2px rgba(0, 0, 0, .75))

    .welcome-content
      display: flex
      flex-direction: column
      text-align: center
      color: white
      .welcome-heading h2
        font-size: 2em
        padding: 1em

      @media (max-width: 600px)
        .welcome-heading h2
          font-size: 2.5em

  .welcome-img
    margin: 10px 10px 15px 10px
    padding: 1vw
    border-radius: 50%
    background-color: $color-secondary-1-4
    box-shadow: 0px 3px 30px rgba(0,0,0,1)
    img
      width: 40vw
      height: 40vw
      max-height: 80vh
      max-width: 80vh
      border-radius: 50%

    @media (max-width: 600px), (max-width: 768px) and (orientation: portrait)
      order: -1
      img
        width: 60vw
        height: 60vw

  @media (max-width: 600px), (max-width: 768px) and (orientation: portrait)
    flex-direction: column
    flex-wrap: wrap
    padding: 10px 0px 40px 0px

</style>
