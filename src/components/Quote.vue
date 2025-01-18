<template lang="pug">
// Quote Section
.quote#quote
  .quote-block
    .quote-header(data-aos="fade" data-aos-delay="200")
      a(href="https://ia800800.us.archive.org/30/items/KWHR_FDGD_2015/Louise%20M%20DJ%20Poems.mp3")
        h1 "...A gentleman. A gentle soul
        h1 Love of nature makes him whole
        h1 Seen the world from every angle
        h1 Tried everything new fandangled..."
        h3 - The Poet Louise M

</template>

<script>
export default {
  name: "quote",
  components: {}
};
</script>

<style lang="sass">
// quote Styles
.quote
  height: 44vh
  background-image: url('/images/Dewscape-2-01.jpg')
  background-repeat: repeat
  background-size: 33vw
  padding: 50px 10px
  @include card-depth(5)
  background-color: $color-primary-3
  color: #FFF
  line-height: 2.5em
  text-shadow: 3px 3px 5px #000

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
      h2
        margin: 2vh
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
