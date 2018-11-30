<template lang="pug">
  .blog-menu
    a(href="/" title="Home")
      svg.fas.fa-home.fa-lg
    router-link(to="/blog" title="Blog")
      svg.fas.fa-quote-right.fa-lg
    router-link(v-if="isAdmin" to="/blog/dash"  title="Admin Dashboard")
      svg.fas.fa-user-astronaut.fa-lg
    router-link(v-else to="/blog/user" title="User Dashboard")
      svg.fas.fa-user.fa-lg
    router-link(v-if="isAdmin" to="/blog/edit" title="New Post")
      svg.fas.fa-plus.fa-lg
    a.logout(v-if="isLoggedIn" @click.prevent="logout" href="#logout" title="Logout")
      svg.fas.fa-sign-out-alt.fa-lg
    router-link.login(v-else to="/auth" title="Login")
      svg.fas.fa-sign-in-alt.fa-lg

</template>

<script>
export default {
  name: "auth-view",
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
    font-size: 1.2em
    text-decoration: underline
    text-align: center
    display: flex
    justify-content: space-around
    width: auto
    margin: 0
    padding: 5px
    background-color: rgba(255,255,255,0.2)
    border-radius: 5px
    border: solid black 1px
    position: fixed
    right: 0
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
