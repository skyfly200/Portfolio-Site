<template lang="pug">
  v-navigation-drawer(app v-model="drawerOpen")
    v-list
      v-list-tile(href="/" title="Home").home-link
        svg.fas.fa-home.fa-lg
        span &nbsp;Home
      v-list-tile(v-if="isLoggedIn" to="/user" title="Account").account
        svg.fas.fa-lg.fa-user-astronaut(v-if="isAdmin")
        svg.fas.fa-lg.fa-user(v-else)
        span &nbsp;User
      v-list-tile(v-if="isAdmin" to="/blog/edit" title="New Post").new-post
        svg.fas.fa-plus.fa-lg
        span &nbsp;New Post
      v-list-tile(v-if="isLoggedIn" @click.prevent="logout" to="#" title="Logout").logout
        svg.fas.fa-sign-out-alt.fa-lg
        span &nbsp;Logout
      v-list-tile(v-else title="Login" to="/auth").login
        svg.fas.fa-sign-in-alt.fa-lg
        span &nbsp;Login
</template>

<script>
export default {
  name: "drawer",
  components: {},
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function() {
      return this.$store.getters.isAdmin;
    },
    drawerOpen: function() {
      return this.$store.getters.drawerOpen;
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
</style>
