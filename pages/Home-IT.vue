<template lang="pug">
.home-it.skill
  v-fab(to="/services" flat location="top start" app).home-btn Back
  .home-it-info
    .headline
      h1 Home IT Support
    v-container
      v-row
        v-col(cols="12" md="6" lg="4")
          v-card
            v-card-title Home IT Support
            v-card-text
              | I offer in-home and remote IT support services for individuals and families, helping with computer setup, troubleshooting, software installation, virus removal, and general tech support. My goal is to make technology accessible and easy to use for everyone.
            v-card-actions
              v-btn(text href="mailto:home-it@skylerfly.com" target="_blank") Contact Me
</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "home-it",
};
</script>

<style lang="sass">
.home-it
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .headline
    width: 100%
    text-align: center
  .home-it-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white

</style>
