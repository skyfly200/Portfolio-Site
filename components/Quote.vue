<template lang="pug">
// Quote Section
.quote#quote
  .quote-block
    ClientOnly
      .quote-header(data-aos="fade" data-aos-delay="200")
        a(href="https://ia800800.us.archive.org/30/items/KWHR_FDGD_2015/Louise%20M%20DJ%20Poems.mp3")
          h1 "...A&nbsp;gentleman. A&nbsp;gentle&nbsp;soul
          h1 Love&nbsp;of&nbsp;nature makes&nbsp;him&nbsp;whole
          h1 Seen&nbsp;the&nbsp;world from&nbsp;every&nbsp;angle
          h1 Tried&nbsp;everything new&nbsp;fandangled..."
          h3 -&nbsp;The&nbsp;Poet&nbsp;Louise&nbsp;M

</template>

<script>
export default {
  name: "quote",
  components: {}
};
</script>

<style lang="sass">
@import "~/assets/sass/vars.sass" // Adjust the path to your global SASS file
@import "~/assets/sass/mixins.sass" // Adjust the path to your global SASS file

// quote Styles
.quote
  min-height: 44vh
  background-image: url('/images/Dewscape-2-01.jpg')
  background-repeat: repeat
  background-size: 33vw
  padding: 50px 10px
  @include card-depth(5)
  background-color: $color-primary-3
  line-height: 2.5em
  a, a:active, a:visited, a:focus
    color: #FFF
    text-shadow: 3px 3px 5px #000
    @media (max-width: 1000px)
      line-height: 2em
      font-size: 1em
    @media (max-width: 425px)
      line-height: 2em
      font-size: 0.75em
  a:hover
    text-shadow: 3px 5px 7px #000

  .quote-info
    padding: 1em

  .quote-block
    text-align: center
    @extend .flex-box-center
    flex-direction: column
    .quote-info
      @extend .flex-box-center
      flex-direction: column
      a
        color: #FFF
      h1
        margin: 2vh
      h3
        margin: 3vh
      .email
        @media (max-width: 299px)
          font-size: 0.8em

    @media (max-width: 600px)
      margin: 30px 5px

    @media (max-width: 350px)
      .quote-header, .quote-info
        h1
          font-size: 2.5em
        h2
          font-size: 1.8em

</style>
