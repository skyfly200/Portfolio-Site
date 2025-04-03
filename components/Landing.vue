<template lang="pug">
// Landing Section
.landing-wrapper
  .landing
    .landing-content
      .landing-name(data-aos="fade" data-aos-delay="200")
        h1 Skyler
        h1 &nbsp;Fly-Wilson

      .landing-caption(data-aos="fade-up" data-aos-delay="400")
        h2 Multidisciplinary Magic&nbsp;
          svg.fa.fa-magic.fa-sm

      .landing-statement(data-aos="fade-up" data-aos-delay="600")
        h3 "Any sufficiently advanced technology is indistinguishable from magic"
        h4 Arthur C. Clarke

  a.scroll-hint(href="#welcome")
    svg.fa.fa-angle-down.fa-3x
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="sass" scoped>
@import "~/assets/sass/vars.sass" // Adjust the path to your global SASS file
@import "~/assets/sass/mixins.sass" // Adjust the path to your global SASS file

// style an arrow bouncing to hint at scrolling to view more content
.scroll-hint
  @extend .flex-box-center
  margin-top: -15vh
  width: 100%
  a
    text-decoration: none
  i
    opacity: 0
    animation: 2s ease-in-out 1.5s infinite scroll-hint

// landing Styles
.landing-wrapper
  height: 100vh
  background-image: url('/images/bkg.jpg')
  background-size: cover
  z-index: 0
  .scroll-hint
    color: #FFF

  .landing
    height: 100%
    background-color: rgba(0,0,0, 0.7)

    .landing-content
      height: 100%
      display: flex
      text-align: center
      flex-direction: column
      align-items: center
      justify-content: center
      color: #FFF

      .landing-name
        display: flex
        h1
          line-height: 1.2
          padding: 0px
          margin: 0px
          font-size: 60px
          text-shadow: 0px 1px 3px rgba(0,0,0,1)

          @media (max-width: 600px)
            font-size: 50px

          @media (max-width: 500px)
            font-size: 40px

        @media (max-width: 400px)
          flex-direction: column

      .landing-caption
        margin-top: 10px
        text-shadow: 0px 1px 1px rgba(0,0,0,1)
        h2
          margin: 0px
          padding: 0px
          @media (max-width: 500px)
            margin-top: 5px
            font-size: 1.9em
          @media (max-width: 400px)
            margin-top: 10px
            font-size: 1.8em

      .landing-statement
        margin: 50px

        @media (max-width: 500px)
          flex-wrap: wrap
          h3
            font-size: 1.5em

@keyframes scroll-hint
  0%
    opacity: 0
    transform: scale(0.1)
  12%
    opacity: 1
    transform: scale(1.3)
  25%
    transform: translateY(0vh)
  100%
    opacity: 1
    transform: translateY(20vh)
</style>
