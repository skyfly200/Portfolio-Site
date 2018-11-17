<template lang="pug">
  .post
    .post-header
      a(:href="'/blog/' + id")
        h2 {{ title }}
    .post-body(v-html="compiledMarkdown")
    .post-footer
      ul.tag-list(v-if="tags")
        li(v-for="tag in tags" v-if="tag").tag
          a(:href="'#' + tag").tag-link {{ tag }}
      .datetime
        p {{ datetime }}
</template>

<script>
import marked from "marked";

export default {
  name: "post",
  components: {},
  props: {
    title: String,
    body: String,
    tags: Array,
    datetime: String,
    id: String
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.body, { sanitize: true });
    }
  }
};
</script>

<style lang="sass">
  .post
    width: 90%
    padding: 1em
    margin: 1em auto
    align-content: center
    text-align: center
    background-color: rgba(150, 0, 255, 0.2)
    box-shadow: 0em 0.5em 3em 0.1em rgba(0,0,0,0.5)
    .post-header h3
      margin-top: 5px
    .post-body
      width: 100%
    .post-footer
      display: flex
      justify-content: space-between
      align-items: flex-end
      ul
        margin: 0
        padding: 0
        display: flex
        list-style-type: none
        li
          margin: 0 0.2em
          padding: 0.2em
          background-color: rgba(0,255,0,0.2)
      .datetime p
        margin: 0
</style>
