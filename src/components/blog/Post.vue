<template lang="pug">
  .post
    .post-header
      h3 {{ title }}
    .post-body
      p {{ body }}
    .post-footer
      ul.topics
        li(v-for="tag in tags")
          a(:href="tag.url") {{ tag.title }}
      .datetime
        p {{ datetime }}
</template>

<script>
export default {
  name: "post",
  components: {},
  props: {
    title: String,
    body: String,
    tags: Array,
    datetime: String
  }
};
</script>

<style lang="sass">
  .post
    width: 100%
    padding: 3%
    margin: 3%
    align-content: center
    text-align: center
    background-color: rgba(150, 0, 255, 0.2)
    box-shadow: 0em 0.5em 3em 0.1em rgba(0,0,0,0.5)
</style>
