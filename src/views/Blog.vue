<template lang="pug">
  .blog
    .back-link
      a(href="/") Return to Home
    AuthView
    .wrapper
      .blog-body
        .blog-header
          h1 Skyler Fly-Wilson's Blog
          h3 Stay up to date on my latest projects and ideas

        .blog-posts
          Post(v-for="post in posts" v-bind="post" v-bind:key="post.id")

      Navigation(:topics="topics" :posts="posts")
    Footer
</template>

<script>
import Post from "@/components/blog/Post.vue";
import AuthView from "@/components/blog/AuthView.vue";
import Navigation from "@/components/blog/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Post,
    AuthView,
    Navigation,
    Footer
  },
  created() {
    this.axios
      .get("https://skylerflyserver.appspot.com/posts")
      .then(response => (this.posts = response.data.posts))
      .catch(error => console.log(error));
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
  }
};
</script>

<style lang="sass">
  body
    margin: 0
    .wrapper
      display: flex
      padding-bottom: 20px
      background-color: $color-primary-4
      color: white
    footer
      background-color: $color-primary-4
      h4
        color: white
    .back-link a, a
      color: $color-secondary-2-1
      &:visted, &:focus, &:active
        color: $color-secondary-2-3
      &:hover
        color: $color-secondary-2-1
    .post, .post a
      color: black
      margin-top: 20px

  .back-link
    margin: 15px
    position: absolute
    font-size: 1.2em
    text-decoration: underline
    @media(max-width: 900px)
      margin-top: 10px

  .blog-header
    text-align: center
    text-shadow: 0em 0.1em 0.15em rgba(0,0,0,0.5)
    @media(max-width: 900px)
      margin-top: 20px

  .blog-body
    display: flex
    flex-direction: column
    width: 100%

  .blog-posts
    width: 100%
    display: flex
    flex-direction: column
    align-items: center

</style>
