<template lang="pug">
  // Footer Section
  footer#footer
    h4.copyright(v-html="copyright")
</template>

<script>
export default {
  components: {},
  computed: {
    copyright: () => {
      return "&copy; Skyler Fly-Wilson " + new Date().getFullYear();
    }
  }
};
</script>

<style lang="sass" scoped>
  // Footer styles
  footer
    z-index: 400
    width: 100%
    text-align: center
    padding: 20px 0px
    h4
      color: #000
    @include card-depth(5)
</style>
