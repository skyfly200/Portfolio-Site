<template lang="pug">
  v-card.dev-ops.skill
    .skills-list
      h2 Experience and Skillset
      ul
        li Install and Configure Linux Servers
        li Linux Command Line, Cron Tab, Permissions, Shell Scripts
        li Create and Configure Digital Ocean Droplets
        li HTTPS with Lets Encrypt
        li Icecast Configuration and Broadcasting
        li GitHub Project Managment Habits
    .projects-list
      h2 Some of my projects
      ul
        li
          a(href="//github.com/skyfly200/Radio-Control-System" target="_blank") Radio Control System
        li
          a(href="//github.com/skyfly200/Radio-Programming-Automation-in-Python" target="_blank") Radio Automation
        li
          a(href="//github.com/skyfly200/PythonProcessBabysitter" target="_blank") Process BabySitter

      GitHubBtn

</template>

<script>
import GitHubBtn from "@/components/GitHubBtn.vue";

export default {
  name: "dev-ops",
  components: {
    GitHubBtn
  }
};
</script>

<style lang="sass">
  .dev-ops
    padding: 2em
    display: flex
    justify-content: center
    color: white
    .skills-list
      margin: 0px auto
      li
        font-size: 1.2em
    .projects-list
      margin: 0px auto
      padding: 0px 10px
      li
        font-size: 1.2em

    @media (max-width: 660px)
      flex-direction: column
      .projects-list .github-button button
        min-width: 200px
        font-size: 1.2em
</style>
