<template lang="pug">
  .auth
    .login
      a(@click="")
        h2 Login
    .or
      span or
    .register
      a(@click="")
        h2 Register

</template>

<script>
export default {
  name: "auth",
  components: {}
};
</script>

<style lang="sass" scoped>
  .auth
    text-align: center
    .or
      margin-top: 20px
</style>
