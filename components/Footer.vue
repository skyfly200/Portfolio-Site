<template lang="pug">
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
  width: 100%
  text-align: center
  padding: 20px 0px
</style>
