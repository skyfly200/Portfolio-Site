<template lang="pug">
.msg-404
  v-fab(to="/" flat location="top start" app).home-btn Home
  h1 404 Error
  h2 The requested page could not be found.
</template>

<style scoped lang="sass">
.msg-404
  color: #FFFFFF
  background-color: #aa0000
  width: 50%
  margin: 0 25%
  .home-btn
    a
      color: white
</style>
