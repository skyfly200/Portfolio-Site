<template lang="pug">
  .nav
    .featured-posts
      .nav-header
        h4 Featured
      .post-link
        a(href="/blog/#") Post 1
    .post-topics
      .nav-header
        h4 Topics
      .tag-link
        a(href="/blog/#") Mycology
      .tag-link
        a(href="/blog/#") Software
      .tag-link
        a(href="/blog/#") Electronics
      .tag-link
        a(href="/blog/#") 3D Modeling
    .post-history
      .nav-header
        h4 History
      .post-link
        a(href="/blog/#") Post 1
</template>

<script>
export default {
  name: "navigtion",
  components: {}
};
</script>

<style lang="sass">
  .nav
    width: 20%
    display: flex
    flex-direction: column
    text-align: right
    padding-right: 5%
    padding-top: 1.5%
    position: fixed
    right: 0

  .nav-header
    text-decoration: underline
    font-weight: bold
</style>
