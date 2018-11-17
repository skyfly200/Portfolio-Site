<template lang="pug">
  .nav-wrap
    .nav
      //- .featured-posts
      //-   .nav-header
      //-     h4 Featured
      //-   .post-link
      //-     a(href="/blog/#") Post 1
      .post-topics
        .nav-header
          h4 Topics
        .tag-link(v-for="topic in topics")
          a(:href="'/blog/#' + topic.title.toLowerCase()") {{ topic.title }}
      .post-history
        .nav-header
          h4 History
        .post-link(v-for="post in posts")
          a(:href="'/blog/#' + post.key") {{ post.title }}
</template>

<script>
export default {
  name: "navigtion",
  props: {
    topics: Object,
    posts: Array
  },
  components: {}
};
</script>

<style lang="sass">
  .nav-wrap
    display: flex
    flex-direction: column
    .nav
    text-align: right
    padding-right: 2em
    padding-top: 1.5%

    .nav-header
      text-decoration: underline
      font-weight: bold
</style>
