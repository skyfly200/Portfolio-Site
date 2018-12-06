<template lang="pug">
  v-app
    v-navigation-drawer(app v-model="showNav")
      v-list
        router-link(to="/") Home
        router-link(to="/blog") Blog
        router-link(to="/auth") Login
    v-toolbar(app)
      v-toolbar-side-icon(@click="showNav = !showNav")
      v-toolbar-title Vuetify Test
    v-content
      v-container(fluid)
        v-layout
          v-card
            v-card-title
              h1 Blog Post
            v-card-text
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ipsum rhoncus, fringilla augue vitae, lobortis eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis eu tempus mi. Donec quis metus massa. Mauris molestie at augue tincidunt interdum. Donec non imperdiet erat. Nam at lorem tortor. Proin vitae dui venenatis, feugiat leo nec, maximus nisi. Aliquam urna ipsum, gravida consequat lorem eu, finibus luctus leo. Sed accumsan sapien eu tortor dapibus feugiat. Vestibulum non nunc quis elit vestibulum iaculis.
              v-chip Mycology
              v-chip Electronics
              v-chip Arduino
              v-chip Vue
            v-card-actions
              v-btn Read More
    v-footer
</template>

<script>
export default {
  name: "vuetify",
  components: {},
  data: function() {
    return {
      showNav: false
    };
  }
};
</script>

<style lang="sass" scoped>
</style>
