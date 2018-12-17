<template lang="pug">
  v-card.index.pa3
    v-list.post-topics(v-if="tags !== {}")
      .index-header
        h4 Tags
      .tag-link(v-for="tag in tags")
        a(v-if="tag.count > 0" :href="'/blog/tag/' + tag.id")
          v-chip(small color="orange")
            v-avatar(right).darken-4.orange {{ tag.count}}
            | {{ tag.title }}
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
    tags: Array,
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
    padding: 1em
    .v-chip
      border: none
      color: white
      background-color: $color-secondary-2-1
      .v-avatar
        background-color: $color-secondary-2-3
      .v-chip__content
        padding: 0 11px
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
