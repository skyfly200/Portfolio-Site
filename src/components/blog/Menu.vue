<template lang="pug">
  v-toolbar(app).blog-menu
    v-toolbar-side-icon(@click="toggleDrawer")
    v-toolbar-title
      router-link(to="/blog") Skyler's Blog

</template>

<script>
export default {
  name: "blog-menu",
  components: {},
  methods: {
    toggleDrawer() {
      let drawerState = !this.$store.getters.drawer;
      this.$store.commit("setDrawer", drawerState);
    }
  }
};
</script>

<style lang="sass" scoped>
  .blog-menu
    font-size: 1.5em
    .nav-link
      display: flex
      align-items: center
    a
      color: $color-secondary-2-1
      &:visted, &:focus, &:active
        color: $color-secondary-2-3
      &:hover
        color: $color-secondary-2-1
    svg
      width: 1em
      margin: 5px 10px
</style>
