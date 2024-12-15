<template lang="pug">
a(:href="url")
  v-btn(target="_blank").button
    svg.fab.fa-2x(v-if="icon" :class="icon")
    span.label &nbsp;{{ text }}
</template>

<script>
export default {
  name: "btn",
  props: ["text", "icon", "url"],
  components: {}
};
</script>

<style lang="sass" scoped>
.button
  display: flex
  justify-content: center
  margin: 30px auto
  width: auto
</style>
