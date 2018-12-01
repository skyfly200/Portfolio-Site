<template lang="pug">
  .blog
    BlogMenu
    b-container(fluid)
      b-row.blog-body
        b-col.blog-posts(md="10")
          Post(v-for="post in posts" :admin="isAdmin"
            v-on:refreshPosts="loadPosts" v-bind="post" v-bind:key="post.id")
        b-col(md="2" cols="0")
          Index(:topics="topics" :posts="posts")
    Footer
</template>

<script>
import Post from "@/components/blog/Post.vue";
import BlogMenu from "@/components/blog/BlogMenu.vue";
import Index from "@/components/blog/Index.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "blog",
  components: {
    Post,
    BlogMenu,
    Index,
    Footer
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function() {
      return this.$store.getters.isAdmin;
    },
    username: function() {
      return this.$store.getters.name;
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

  .blog-posts
    display: flex
    flex-direction: column
    align-items: center

</style>
