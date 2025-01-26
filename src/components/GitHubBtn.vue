<template lang="pug">
Btn(:text="text ? text : 'More on GitHub'" :url="url" icon="fa-github").btn
</template>

<script>
import Btn from "../components/Btn.vue";

export default {
  name: "github-btn",
  props: ["text", "repo"],
  data: function() {
    return {
      url: this.repo
        ? "https://github.com/skyfly200/" + this.repo
        : "https://github.com/skyfly200"
    };
  },
  components: { Btn }
};
</script>
<style lang="sass" scoped>
</style>
