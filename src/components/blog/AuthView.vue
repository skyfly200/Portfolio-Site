<template lang="pug">
  .auth-view
    a.logout(v-if="isLoggedIn" @click="logout" href="#")
      i.fas.fa-user-astronaut.fa-2x(v-if="isAdmin")
      i.fas.fa-user.fa-2x(v-else)
      span Logout
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
    },
    isAdmin: function() {
      return this.$store.getters.isAdmin;
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
    text-align: center
    margin: 0
    padding: 5px
    background-color: rgba(255,255,255,0.2)
    border-radius: 5px
    border: solid black 1px
    a
      color: $color-secondary-2-1
      &:visted, &:focus, &:active
        color: $color-secondary-2-3
      &:hover
        color: $color-secondary-2-1
    .logout
      display: flex
      flex-direction: column
      i
        margin: 5px 20px
</style>
