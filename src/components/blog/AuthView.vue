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
    font-size: 1.2em
    text-decoration: underline
    margin: 0
    a
      color: $color-secondary-2-1
      &:visted, &:focus, &:active
        color: $color-secondary-2-3
      &:hover
        color: $color-secondary-2-1
</style>
