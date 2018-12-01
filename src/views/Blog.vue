<template lang="pug">
  .blog
    Menu
    b-container(fluid)
      b-row.blog-body
        b-col.blog-posts
          Post(v-for="post in posts" :admin="isAdmin"
            v-on:refreshPosts="loadPosts" v-bind="post" v-bind:key="post.id")
        b-col(v-if="showIndex" md="2" cols="0")
          Index(:topics="topics" :posts="posts")
    Footer
</template>

<script>
import Post from "@/components/blog/Post.vue";
import Menu from "@/components/blog/Menu.vue";
import Index from "@/components/blog/Index.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "blog",
  components: {
    Post,
    Menu,
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
    },
    showIndex: function() {
      return this.index;
    }
  },
  created() {
    if (this.$route.params.id) this.loadPost();
    else this.loadPosts();
  },
  watch: {
    $route(to, from) {
      if (this.$route.params.id) this.loadPost();
      else this.loadPosts();
    }
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
      posts: [],
      index: true
    };
  },
  methods: {
    loadPost: function() {
      let url =
        "https://skylerflyserver.appspot.com/post/" + this.$route.params.id;
      this.axios
        .get(url)
        .then(response => {
          let post = response.data.post;
          if (this.$route.params.edit && post.edits[this.$route.params.edit]) {
            let edit = post.edits[this.$route.params.edit];
            post.body = edit.body;
            post.tags = edit.tags;
            post.edited = edit.edited;
          }
          this.index = false;
          this.posts = [post];
        })
        .catch(() => {});
    },
    loadPosts: function() {
      let url = "https://skylerflyserver.appspot.com/posts";
      url = this.$route.params.tag ? url + "/" + this.$route.params.tag : url;
      this.axios
        .get(url)
        .then(response => {
          this.posts = response.data.posts;
          this.index = true;
        })
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
