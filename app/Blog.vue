<template lang="pug">
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
  	components: {
  	}
  }
</script>

<style lang="sass" src='./blog-style.sass'>
</style>
