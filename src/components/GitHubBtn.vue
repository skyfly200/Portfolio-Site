<template lang="pug">
  .github-button
    v-btn(:href="url" target="_blank")
      svg.fab.fa-github.fa-2x
      span.label &nbsp;{{ text ? text : "More on GitHub" }}
</template>

<script>
export default {
  name: "github-btn",
  props: ["text", "repo"],
  data: function() {
    return {
      url: this.repo ? "//github.com/skyfly200/" + this.repo : "//github.com/skyfly200"
    };
  },
  components: {}
};
</script>

<style lang="sass" scoped>
  .github-button
    display: flex
    justify-content: center
    button
      min-width: 355px
      font-size: 2em
      align-items: center
      @media (max-width: 380px)
        min-width: 240px
        font-size: 1.3em
</style>
