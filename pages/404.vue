<template lang="pug">
.msg-404
  v-container
    v-row
      v-col(cols="12" class="d-flex justify-center")
        v-card(height="fit-content")
          v-card-title Error 404
          v-divider
          v-card-text The requested page could not be found
          v-card-actions
            v-btn(text to="/" color="primary") Return To Home
</template>

<style scoped lang="sass">
@import "~/assets/sass/vars.sass" // Adjust the path to your global SASS file
@import "~/assets/sass/mixins.sass" // Adjust the path to your global SASS file

.msg-404
  height: 100%
  .v-col
    height:100vh
    align-items: center
  .v-card
    text-align: center
    border-radius: 10px
    .v-card-title
      font-size: 1.5rem
      font-weight: 500
      margin: 10px 0
    .v-card-text
      font-size: 1.2rem
      margin: 10px
    .v-card-actions
      justify-content: center
      margin: 10px 0
      .v-btn
        color: $color-secondary-2-1
</style>
