<template lang="pug">
  .github-button
    v-btn(href="//github.com/skyfly200" target="_blank")
      svg.fab.fa-github.fa-2x
      span.label &nbsp;{{ text ? text : "More on GitHub" }}
</template>

<script>
export default {
  name: "github-btn",
  props: ["text"],
  components: {}
};
</script>

<style lang="sass" scoped>
  .github-button button
    min-width: 292px
    display: flex
    justify-content: center
</style>
