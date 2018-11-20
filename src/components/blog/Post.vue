<template lang="pug">
  .post
    .post-ctrls
      span
        a(:href="'/blog/edit/' + id") edit
        | &nbsp;-&nbsp;
        a(@click="" href="#") delete
    .post-header
      a(:href="'/blog/post/' + id")
        h1 {{ title }}
    .post-body(v-html="compiledMarkdown")
    hr
    .post-footer
      .tags(v-if="tags")
          .tag(v-for="tag in tags")
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
    admin: Boolean,
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
    background-color: white
    color: black
    box-shadow: 0em 0em 1em 0.1em rgba(255,255,255,0.5)
    .post-ctrls
      width: 100%
      text-align: right
    .post-header h3
      margin-top: 5px
    .post-body
      width: 100%
      img
        width: 100%
        height: auto
    .post-footer
      display: flex
      justify-content: space-between
      align-items: flex-end
      .tags
        margin: 0
        padding: 0
        display: flex
        list-style-type: none
        .tag
          margin: 0 0.2em
          padding: 0.2em
          background-color: rgba(0,255,0,0.2)
      .datetime p
        margin: 0
</style>
