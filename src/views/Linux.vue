<template lang="pug">
.back-end.skill
  v-toolbar(app)
      v-toolbar-title
        v-btn(to="/" flat) Skyler Fly-Wilson
  .skills-list
    h2 Linux Skills
    ul
      li Apache, Nginx, Express
      li MySql, MariaDB, SQLite, Mongo
      li Python, C, PHP, Node
      li SSH, SCP, SFTP
      li Bash, Shell, Cron
      li Networks
      li Docker
      li Virtual Box
      li Digital Ocean Spaces
      li Lets Encrypt Certbot
      li Icecast2

  .projects-list
    h2 Some of My Projects
    ul
      li
        a(href="//github.com/skyfly200/CCRN-Website" target="_blank") CCRN Website
      li
        a(href="//wayhighradio.com/listen.html" target="_blank") Way High Radio Streaming Servers
      li
        a(href="//github.com/skyfly200/Radio-Network-Hub" target="_blank") Radio Network Control System

      GitHubBtn

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "linux",
  components: {
    GitHubBtn
  }
};
</script>

<style lang="sass">
.back-end
  padding: 2em
  display: flex
  color: white
  .skills-list
    margin: 0px auto
  .projects-list
    margin: 0px auto
  @media (max-width: 660px)
    flex-direction: column
</style>
