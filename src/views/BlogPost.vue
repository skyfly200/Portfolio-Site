<template lang="pug">
  .blog
    .back-link
      a(href="/blog") Return to Blog
    .wrapper
      .blog-body
        .blog-post
          Post(v-bind="post")
    Footer
</template>

<script>
import Post from "@/components/blog/Post.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "blog-post",
  components: {
    Post,
    Footer
  },
  created() {
    let url = "https://skylerflyserver.appspot.com/post/" + this.$route.params.id;
    this.axios
      .get(url)
      .then(response => (this.post = response.data.post))
      .catch(error => console.log(error));
  },
  data: () => {
    return {
      post: {
        title: "",
        body: "",
        tags: [],
        datetime: "",
        id: ""
      }
    };
  }
};
</script>

<style lang="sass">
  body
    margin: 0
    background-color: $color-primary-4
    color: white
    .wrapper
      display: flex
      padding-bottom: 20px
      background-color: $color-primary-4
    .back-link a
      color: $color-secondary-2-1
      &:visted, &:focus, &:active
        color: $color-secondary-2-3
      &:hover
        color: $color-secondary-2-1

  .back-link
    margin: 15px
    position: absolute
    font-size: 1.2em
    text-decoration: underline
    @media(max-width: 900px)
      margin-top: 10px

  .blog-body
    display: flex
    flex-direction: column
    width: 100%

  .blog-post
    width: 100%
    display: flex
    flex-direction: column
    align-items: center

  .post
    margin-top: 50px
    color: black

</style>
