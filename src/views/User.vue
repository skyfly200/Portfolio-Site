<template lang="pug">
  .user
    Menu
    Drawer
    v-container(fluid)
      v-layout
        v-flex
          h1 Welcome {{ name }}
          h3(v-if="isAdmin") This account has admin abilities
</template>

<script>
import Menu from "@/components/blog/Menu.vue";
import Drawer from "@/components/blog/Drawer.vue";

export default {
  name: "user",
  components: {
    Menu,
    Drawer
  },
  computed: {
    name: function() {
      return this.$store.getters.name;
    },
    isAdmin: function() {
      return this.$store.getters.isAdmin;
    },
  }
};
</script>

<style lang="sass" scoped>
</style>
