<template lang="pug">
  .auth-view
    a(v-if="isAdmin" href="/blog/dash")
      svg.fas.fa-user-astronaut.fa-2x
    a(v-else href="/blog/user")
      svg.fas.fa-user.fa-2x
    a.logout(v-if="isLoggedIn" @click="logout" href="#")
      svg.fas.fa-sign-out-alt.fa-2x
    a.login(v-else href="/auth")
      svg.fas.fa-sign-in-alt.fa-2x

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
    display: flex
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
    svg
      margin: 5px 10px
</style>
