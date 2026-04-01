<template lang="pug">
.wrapper
  Landing
  Welcome
  Skills
  Resume
  Quote
  Contact
  Footer
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="sass">
.wrapper footer
  z-index: 400
  @include card-depth(5)
  h4
    color: black
  button
    margin: 20px 0px
    padding: 5px 10px
    min-width: 200px
    font-size: 1.4em
    box-shadow: 0px 1px 3px #000
    font-family: 'Nixie One', sans-serif
    @media (max-width: 600px)
      font-size: 1.6em
</style>
