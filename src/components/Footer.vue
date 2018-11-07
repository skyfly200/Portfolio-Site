<template lang="pug">
  // Footer Section
  footer#footer
    h4.copyright
    .footer-links
      //a(href="#footer", target="_blank").footer-link
        i.fa.fa-sitemap
        |&nbsp; Site Map
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="sass" scoped>
  //@import "mixins"
  //@import "vars"

  // Footer styles
  footer
    z-index: 400
    width: 100%
    text-align: center
    padding: 20px 0px
    h4
      color: #000
    //@include card-depth(5)
</style>
