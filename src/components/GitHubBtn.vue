<template lang="pug">
  .github-button
    v-btn(href="//github.com/skyfly200" target="_blank")
      svg.fab.fa-github.fa-2x
      span.label &nbsp;More on GitHub
</template>

<script>
export default {
  name: "github-btn",
  components: {}
};
</script>

<style lang="sass" scoped>
  .github-button button
    min-width: 292px
    display: flex
    justify-content: center
</style>
