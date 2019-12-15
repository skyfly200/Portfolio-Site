<template lang="pug">
  v-app(dark)#app
    v-content(fluid)
      router-view
</template>

<script>
export default {
  created: function() {
    this.axios.interceptors.response.use(undefined, function(err) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch("logout");
      }
    });
  }
};
</script>

<style src="./styles/base.sass" lang="sass"></style>
