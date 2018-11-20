<template lang="pug">
  .user
    h1 Welcome {{ name }}
</template>

<script>
export default {
  name: "user",
  components: {},
  computed: {
    name: function() {
      return this.$store.getters.name;
    }
  }
};
</script>

<style lang="sass" scoped>
</style>
