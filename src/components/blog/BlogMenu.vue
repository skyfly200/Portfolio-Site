<template lang="pug">
  b-navbar(toggleable="md" type="dark" variant="dark" fixed="top" sticky=true).blog-menu
    b-navbar-toggle(target="nav_collapse")
    b-navbar-brand(to="/blog" tag="h1" class="mb-0") Skyler's Blog
    b-collapse(is-nav id="nav_collapse")
      b-navbar-nav(class="ml-auto")
        b-nav-item(href="/" title="Home").home-link
          svg.fas.fa-home.fa-lg
          span &nbsp;Home
        b-nav-item(v-if="isLoggedIn" to="/user" title="Account").account
          svg.fas.fa-lg.fa-user-astronaut(v-if="isAdmin")
          svg.fas.fa-lg.fa-user(v-else)
          span &nbsp;User
        b-nav-item(v-if="isAdmin" to="/blog/edit" title="New Post").new-post
          svg.fas.fa-plus.fa-lg
          span &nbsp;New Post
        b-nav-item(v-if="isLoggedIn" @click.prevent="logout" href="#logout" title="Logout").logout
          svg.fas.fa-sign-out-alt.fa-lg
          span &nbsp;Logout
        b-nav-item(v-else title="Login" to="/auth").login
          svg.fas.fa-sign-in-alt.fa-lg
          span &nbsp;Login

</template>

<script>
export default {
  name: "blog-menu",
  components: {},
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function() {
      return this.$store.getters.isAdmin;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/blog");
      });
      localStorage.removeItem("jwt");
    }
  }
};
</script>

<style lang="sass" scoped>
  .blog-menu
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
