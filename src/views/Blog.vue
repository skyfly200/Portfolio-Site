<template lang="pug">
  .blog
    .blog-header
      h1 YAY, it's my new blog!

    .blog-body
      .blog-posts
        Post(v-for="post in posts" v-bind="post" v-bind:key="post.key")
      Navigation
</template>

<script>
import Post from "@/components/blog/Post.vue";
import Navigation from "@/components/blog/Navigation.vue";

export default {
  components: {
    Post,
    Navigation
  },
  data: () => {
    return {
      posts: [
        {
          title: "Test Post 1",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel mauris est. Duis viverra lorem et mattis porttitor. Maecenas interdum, erat quis cursus laoreet, elit magna placerat mauris, ac semper neque dolor et lectus. Curabitur et iaculis nibh, ac bibendum neque. Suspendisse iaculis elit vel ipsum ultrices eleifend. Nam facilisis viverra nisl nec facilisis. Donec sollicitudin nisi enim, ut imperdiet nisl ultricies ut. Quisque nec tincidunt tellus. Donec faucibus iaculis tellus sit amet ultrices. Mauris nec felis ac nunc rhoncus blandit eu eget ex. Ut eleifend nunc vel elit scelerisque, aliquet faucibus lectus elementum.",
          datetime: "Oct 2nd 2018 5:55:00 PM MDT",
          tags: [
            { title: "Mycology", url: "/blog/#" },
            { title: "Electronics", url: "/blog/#" },
            { title: "Software", url: "/blog/#" }
          ],
          key: "post-1"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
  .blog-header
    text-align: center
    text-shadow: 0em 0.1em 0.15em rgba(0,0,0,0.5)

  .blog-body
    display: flex

  .blog-posts
    width: 80%
    display: flex
    flex-direction: column

  .post-footer
    display: flex
    justify-content: space-between
    align-items: flex-end
    ul
      display: flex
      list-style-type: none
      li
        margin: 0 0.2em
        padding: 0.2em
        background-color: rgba(0,255,0,0.2)

</style>
