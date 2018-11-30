<template lang="pug">
  .dashboard
    BlogMenu
    .dash-header
      h1 Admin Dashboard
    .dash-body
      .blog-posts
        Post(v-for="post in posts" :admin="true" v-on:refreshPosts="loadPosts" v-bind="post" v-bind:key="post.id")

      Navigation(:topics="topics" :posts="posts")
    Footer
</template>

<script>
import Post from "@/components/blog/Post.vue";
import BlogMenu from "@/components/blog/BlogMenu.vue";
import Navigation from "@/components/blog/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Post,
    BlogMenu,
    Navigation,
    Footer
  },
  created() {
    this.loadPosts();
  },
  data: () => {
    return {
      topics: {
        mycology: { title: "Mycology" },
        hardware: { title: "Hardware" },
        software: { title: "Software" },
        leds: { title: "LEDs" },
        audio: { title: "Audio" },
        video: { title: "Video" }
      },
      posts: []
    };
  },
  methods: {
    loadPosts: function() {
      this.axios
        .get("https://skylerflyserver.appspot.com/posts")
        .then(response => (this.posts = response.data.posts))
        .catch(() => {});
    }
  }
};
</script>

<style lang="sass">
  body
    margin: 0
    .dashboard
      padding-bottom: 20px
      background-color: $color-primary-4
      color: white
    footer
      background-color: $color-primary-4
      h4
        color: white
    .post, .post a
      color: black
      margin-top: 20px
    button
      color: black

  .dash-header
    text-align: center
    text-shadow: 0em 0.1em 0.15em rgba(0,0,0,0.5)

  .dash-body
    display: flex
    flex-direction: row
    width: 100%

  .blog-posts
    width: 80%
    display: flex
    flex-direction: column
    align-items: center

</style>
