<template lang="pug">
  // Contact Info Section
  .blog-feature#blog-feature
    .blog-feature-header
      h1 Latest from my Blog
    .blog-feature-body
      Post(v-for="post in posts" :admin="false"
        v-bind="post" v-bind:key="post.id")
    .blog-feature-btn
      v-btn(to="/blog") See All Posts

</template>

<script>
import Post from "@/components/blog/Post.vue";

export default {
  name: "blog-feature",
  components: {
    Post
  },
  data: () => {
    return {
      num: 1,
      posts: []
    };
  },
  created() {
    this.loadPosts();
  },
  methods: {
    loadPosts: function() {
      let url = "https://skylerflyserver.appspot.com/posts/";
      this.axios
        .get(url)
        .then(response => {
          // filter out unpublished posts
          let posts = response.data.posts;
          posts = posts.filter(p => new Date(p.published) <= new Date());
          this.posts = posts.slice(0, this.num);
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="sass">
  // Contact Styles
  .blog-feature
    padding: 50px 10px
    @include card-depth(5)
    background-color: $color-primary-3
    color: #FFF
    text-align: center
    @extend .flex-box-center
    flex-direction: column
    .blog-feature-header

    .blog-feature-body
      margin: 15px
      width: 90%
      text-align: left

  .truncate
    white-space: nowrap
    overflow: hidden
      text-overflow: ellipsis

</style>
