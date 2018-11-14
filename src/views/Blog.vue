<template lang="pug">
  .blog
    .blog-header
      h1 YAY, it's my new blog!

    .blog-body
      .blog-posts
        .blog-post
          .post-header
            h3 TEST Post 1
          .post-body
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel mauris est. Duis viverra lorem et mattis porttitor. Maecenas interdum, erat quis cursus laoreet, elit magna placerat mauris, ac semper neque dolor et lectus. Curabitur et iaculis nibh, ac bibendum neque. Suspendisse iaculis elit vel ipsum ultrices eleifend. Nam facilisis viverra nisl nec facilisis. Donec sollicitudin nisi enim, ut imperdiet nisl ultricies ut. Quisque nec tincidunt tellus. Donec faucibus iaculis tellus sit amet ultrices. Mauris nec felis ac nunc rhoncus blandit eu eget ex. Ut eleifend nunc vel elit scelerisque, aliquet faucibus lectus elementum.
            p Nulla sit amet interdum lacus. Proin vel leo tristique, aliquam orci et, elementum sapien. Donec hendrerit sit amet justo a bibendum. In scelerisque nunc vel tincidunt tristique. Donec non lacinia neque, ac lobortis nibh. Proin id orci at ipsum luctus dictum. Aliquam pharetra dui et congue posuere. Nulla arcu lorem, eleifend sit amet ullamcorper at, euismod nec nulla. Curabitur non feugiat augue, non mollis tortor.
            p Nam ultrices, nibh a dapibus semper, libero lectus feugiat mi, et dictum ex sem quis sem. Nulla ac leo velit. Pellentesque libero tortor, rhoncus nec rhoncus eu, auctor vel ipsum. Fusce id faucibus augue. Ut facilisis ligula vitae massa tristique accumsan. Fusce odio tortor, commodo lobortis sapien sed, vestibulum varius ipsum. Etiam tristique justo id finibus tempor. Nullam ut varius nisi.
          .post-footer
            ul.topics
              li Electronics
              li Mycology
            .datetime
              p Oct 2nd 2018 5:55:00 PM MDT
      .blog-nav
        .featured-posts
          .nav-header
            h4 Featured
          .post-link
            a(href="#") Post 1
        .post-topics
          .nav-header
            h4 Topics
          .topic
            a(href="#") Mycology
          .topic
            a(href="#") Software
          .topic
            a(href="#") Electronics
          .topics
            a(href="#") 3D Modeling
        .post-history
          .nav-header
            h4 History
          .post-link
            a(href="#") Post 1
</template>

<script>
export default {
  components: {}
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

  .blog-post
    width: 100%
    padding: 3%
    margin: 3%
    align-content: center
    text-align: center
    background-color: rgba(150, 0, 255, 0.2)
    box-shadow: 0em 0.5em 3em 0.1em rgba(0,0,0,0.5)

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

  .blog-nav
    width: 20%
    display: flex
    flex-direction: column
    text-align: right
    padding-right: 5%
    padding-top: 1.5%

  .nav-header
    text-decoration: underline
    font-weight: bold

</style>
