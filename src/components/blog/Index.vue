<template lang="pug">
  .index
    v-list.post-topics(v-if="topics !== {}")
      .index-header
        h4 Topics
      .tag-link(v-for="topic in topics")
        a(:href="'/blog/tag/' + topic.title.toLowerCase()") {{ topic.title }}
    v-list.post-history
      .index-header
        h4 History
      .post-link(v-for="post in posts")
        a(:href="'/blog/post/' + post.id") {{ post.title }}
</template>

<script>
export default {
  name: "index",
  props: {
    topics: Object,
    posts: Array
  },
  components: {}
};
</script>

<style lang="sass" scoped>
  .index
    display: flex
    flex-direction: column
    text-align: right
    margin-top: 20px
    .v-list
      background-color: rgba(0,0,0,0)
      color: white
    a
      color: $color-secondary-2-1
      &:visted, &:focus, &:active
        color: $color-secondary-2-3
      &:hover
        color: $color-secondary-2-1
    @media(max-width: 768px)
      display: none

  .index-header
    text-decoration: underline
    font-weight: bold

</style>
