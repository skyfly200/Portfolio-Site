<template lang="pug">
  .auth-view
    .logout(v-if="isLoggedIn")
      a(@click="logout" href="#") Logout
    .login(v-else)
      a(href="/auth") Login
</template>

<script>
export default {
  name: "auth-view",
  components: {},
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/auth");
      });
      localStorage.removeItem("jwt");
    }
  }
};
</script>

<style lang="sass" scoped>
  .auth-view
    margin: 15px
    position: absolute
    right: 0
    font-size: 1.2em
    text-decoration: underline
    @media(max-width: 900px)
      margin-top: 10px
    a
      color: $color-secondary-2-1
      &:visted, &:focus, &:active
        color: $color-secondary-2-3
      &:hover
        color: $color-secondary-2-1
</style>
