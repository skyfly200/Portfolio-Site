<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  created: function() {
    return new Promise(function(resolve, reject) {
      this.axios.interceptors.response.use(
        response => resolve(response),
        function(err) {
          if (
            err.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            this.$store.dispatch("logout");
          }
          reject(err);
        }
      );
    });
  }
};
</script>

<style src="./styles/base.sass" lang="sass"></style>
