<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  created: function() {
    this.axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  }
};
</script>

<style src="./styles/base.sass" lang="sass"></style>
