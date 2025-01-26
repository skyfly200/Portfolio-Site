<template lang="pug">
.back-end.skill
  v-fab(to="/software" flat location="top start" app).home-btn Back  
  v-container
    v-row.skills-list
      v-col(cols="12")
          h2 Dev Ops Skills
          v-chip-group
            v-chip Apache
            v-chip Nginx
            v-chip Express
            v-chip Node
            v-chip MySql
            v-chip MariaDB
            v-chip SQLite
            v-chip Mongo
            v-chip Python
            v-chip Ruby
            v-chip PHP
            v-chip SSH
            v-chip CodeCov
            v-chip Pupeteer
            v-chip Bash/Shell
            v-chip Cron
            v-chip TensorFlow
            v-chip Ansible
            v-chip Docker
            v-chip Virtual Box
            v-chip Digital Ocean
            v-chip AWS
            v-chip Google Cloud Platform
            v-chip Firebase
            v-chip Netlify
            v-chip GitHub
            v-chip Lets Encrypt Certbot
            v-chip Icecast2
    v-row.projects-list
      v-col(cols="12")
        h2 Some of Dev Ops / Linux Projects
      v-col(cols="12" md="6")
        v-card
          v-card-title CCRN Website
          v-card-subtitle Website for CCRN
          v-card-actions.card-actions
            v-btn.card-btn(variant="outlined" color="accent" block href="//github.com/skyfly200/CCRN-Website" target="_blank") Visit Site
      v-col(cols="12" md="6")
        v-card
          v-card-title Way High Radio Streaming Servers
          v-card-subtitle Streaming Servers for Way High Radio
          v-card-actions.card-actions
            v-btn.card-btn(variant="outlined" color="accent" block href="//wayhighradio.com/listen.html" target="_blank") Visit Site
      v-col(cols="12" md="6")
        v-card
          v-card-title Radio Network Control System
          v-card-subtitle Control System for Radio Network
          v-card-actions.card-actions
            v-btn.card-btn(variant="outlined" color="accent" block href="//github.com/skyfly200/Radio-Network-Hub" target="_blank") Visit Site

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
  color: white
  .skills-list
    margin: 0px auto
  .projects-list
    margin: 0px auto
  @media (max-width: 660px)
    flex-direction: column
  
  .v-chip
    margin: 5px
  
  .home-btn
    a
      color: white
</style>
