<template lang="pug">
  .blog
    Menu
    Drawer
    v-container(fluid  grid-list-md)
      v-layout.blog-body
        v-flex.blog-posts
          Post(v-for="post in posts" :admin="isAdmin"
            v-on:refresh="refresh" v-bind="post" v-bind:key="post.id")
        v-flex(v-if="showIndex")
          Index(:tags="tags" :posts="posts")
    Footer
</template>

<script>
import Post from "@/components/blog/Post.vue";
import Menu from "@/components/blog/Menu.vue";
import Drawer from "@/components/blog/Drawer.vue";
import Index from "@/components/blog/Index.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "blog",
  components: {
    Post,
    Menu,
    Drawer,
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
    else {
      this.loadPosts();
      this.loadTags();
    }
  },
  watch: {
    $route() {
      if (this.$route.params.id) this.loadPost();
      else this.loadPosts();
    }
  },
  data: () => {
    return {
      tags: [],
      posts: [],
      index: true
    };
  },
  methods: {
    refresh: function() {
      this.loadPosts();
      this.loadTags();
    },
    loadPost: function() {
      let url =
        "https://skylerflyserver.appspot.com/posts/post/" + this.$route.params.id;
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
          this.$store.commit("setDrawer", false);
          this.posts = [post];
        })
        .catch(() => {});
    },
    loadPosts: function() {
      let url = "https://skylerflyserver.appspot.com/posts/";
      this.axios
        .get(url)
        .then(response => {
          // filter out unpublished posts for non admin users
          let posts = response.data.posts;
          if (!this.isAdmin) {
            posts = posts.filter(p => new Date(p.published) <= new Date());
          } // else if showArchive & archived or !archived
          // filter posts by tag if provided
          if (this.$route.params.tag) {
            let filterTag = this.$route.params.tag;
            this.posts = posts.filter(
              p => p.tags.filter(t => t.id === filterTag).length > 0
            );
          } else {
            this.posts = posts;
          }
          this.$store.commit("setDrawer", false);
          this.index = true;
        })
        .catch(() => {});
    },
    loadTags: function() {
      this.axios
        .get("https://skylerflyserver.appspot.com/tags/")
        .then(response => {
          this.tags = response.data.tags;
        });
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
      color: white
      margin-bottom: 20px
    button
      color: black
  .blog-body
    margin-top: 1em
  .blog-posts
    display: flex
    flex-direction: column
    align-items: center
</style>
