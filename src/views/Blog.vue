<template lang="pug">
  .blog
    .back-link
      a(href="/") << Return to Home
    .wrapper
      .blog-body
        .blog-header
          h1 Skyler Fly-Wilson's Blog
          h3 Welcome to my new blog!

        .blog-posts
          Post(v-for="post in posts" v-bind="post" v-bind:key="post.id")

      Navigation(:topics="topics" :posts="posts")
    Footer
</template>

<script>
import Post from "@/components/blog/Post.vue";
import Navigation from "@/components/blog/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Post,
    Navigation,
    Footer
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
      posts: [
        {
          title: "Test Post 1",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel mauris est. Duis viverra lorem et mattis porttitor. Maecenas interdum, erat quis cursus laoreet, elit magna placerat mauris, ac semper neque dolor et lectus. Curabitur et iaculis nibh, ac bibendum neque. Suspendisse iaculis elit vel ipsum ultrices eleifend. Nam facilisis viverra nisl nec facilisis. Donec sollicitudin nisi enim, ut imperdiet nisl ultricies ut. Quisque nec tincidunt tellus. Donec faucibus iaculis tellus sit amet ultrices. Mauris nec felis ac nunc rhoncus blandit eu eget ex. Ut eleifend nunc vel elit scelerisque, aliquet faucibus lectus elementum.",
          datetime: "Oct 2nd 2018 5:55:00 PM MDT",
          tags: ["mycology", "hardware", "software"],
          id: "post-1"
        },
        {
          title: "Test Post 2",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel mauris est. Duis viverra lorem et mattis porttitor. Maecenas interdum, erat quis cursus laoreet, elit magna placerat mauris, ac semper neque dolor et lectus. Curabitur et iaculis nibh, ac bibendum neque. Suspendisse iaculis elit vel ipsum ultrices eleifend. Nam facilisis viverra nisl nec facilisis. Donec sollicitudin nisi enim, ut imperdiet nisl ultricies ut. Quisque nec tincidunt tellus. Donec faucibus iaculis tellus sit amet ultrices. Mauris nec felis ac nunc rhoncus blandit eu eget ex. Ut eleifend nunc vel elit scelerisque, aliquet faucibus lectus elementum.",
          datetime: "Oct 2nd 2018 5:55:00 PM MDT",
          tags: ["hardware", "software", "leds"],
          id: "post-2"
        },
        {
          title: "Test Post 3",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel mauris est. Duis viverra lorem et mattis porttitor. Maecenas interdum, erat quis cursus laoreet, elit magna placerat mauris, ac semper neque dolor et lectus. Curabitur et iaculis nibh, ac bibendum neque. Suspendisse iaculis elit vel ipsum ultrices eleifend. Nam facilisis viverra nisl nec facilisis. Donec sollicitudin nisi enim, ut imperdiet nisl ultricies ut. Quisque nec tincidunt tellus. Donec faucibus iaculis tellus sit amet ultrices. Mauris nec felis ac nunc rhoncus blandit eu eget ex. Ut eleifend nunc vel elit scelerisque, aliquet faucibus lectus elementum.",
          datetime: "Oct 2nd 2018 5:55:00 PM MDT",
          tags: ["audio", "video"],
          id: "post-3"
        },
        {
          title: "Test Post 4",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel mauris est. Duis viverra lorem et mattis porttitor. Maecenas interdum, erat quis cursus laoreet, elit magna placerat mauris, ac semper neque dolor et lectus. Curabitur et iaculis nibh, ac bibendum neque. Suspendisse iaculis elit vel ipsum ultrices eleifend. Nam facilisis viverra nisl nec facilisis. Donec sollicitudin nisi enim, ut imperdiet nisl ultricies ut. Quisque nec tincidunt tellus. Donec faucibus iaculis tellus sit amet ultrices. Mauris nec felis ac nunc rhoncus blandit eu eget ex. Ut eleifend nunc vel elit scelerisque, aliquet faucibus lectus elementum.",
          datetime: "Oct 2nd 2018 5:55:00 PM MDT",
          tags: ["mycology", "hardware", "software"],
          id: "post-4"
        }
      ]
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

  .back-link
    margin: 15px
    position: absolute
    font-size: 1.2em

  .blog-header
    text-align: center
    text-shadow: 0em 0.1em 0.15em rgba(0,0,0,0.5)

  .blog-body
    display: flex
    flex-direction: column

  .blog-posts
    width: 100%
    display: flex
    flex-direction: column
    align-items: center

</style>
