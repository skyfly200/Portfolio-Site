<template lang="pug">
  .blog
    BlogMenu
    .blog-header
      template(v-if="isAdmin")
        h1 Welcome Admin
      template(v-else)
        h1 My Blog
        h3 Stay up to date on my latest projects and ideas
    .blog-body
      .blog-posts
        Post(v-for="post in posts" :admin="isAdmin" v-on:refreshPosts="loadPosts" v-bind="post" v-bind:key="post.id")

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
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function() {
      return this.$store.getters.isAdmin;
    }
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
      let url = "https://skylerflyserver.appspot.com/posts";
      url = this.$route.params.tag ? url + "/" + this.$route.params.tag : url;
      this.axios
        .get(url)
        .then(response => (this.posts = response.data.posts))
        .catch(() => {});
    }
  }
};
</script>

<style lang="sass">
  body
    margin: 0
    .blog
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

  .blog-header
    text-align: center
    text-shadow: 0em 0.1em 0.15em rgba(0,0,0,0.5)h1
    padding-top: 10px

  .blog-body
    display: flex
    flex-direction: row
    width: 100%

  .blog-posts
    width: 80%
    display: flex
    flex-direction: column
    align-items: center

</style>
