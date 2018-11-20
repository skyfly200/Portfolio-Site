<template lang="pug">
  .nav-wrap
    .nav
      .post-topics(v-if="false")
        .nav-header
          h4 Topics
        .tag-link(v-for="topic in topics")
          a(:href="'/blog/tag/' + topic.title.toLowerCase()") {{ topic.title }}
      .post-history
        .nav-header
          h4 History
        .post-link(v-for="post in posts")
          a(:href="'/blog/post/' + post.id") {{ post.title }}
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
    width: 15%
    margin-left: 15px
    @media(max-width: 600px)
      width: 20%
    .nav
      position: fixed
      text-align: right
      margin-top: 30px

    .nav-header
      text-decoration: underline
      font-weight: bold
</style>
