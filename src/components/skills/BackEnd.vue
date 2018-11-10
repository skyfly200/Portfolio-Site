<template lang="pug">
  .back-end
    .skills-list
      h2 Back End Skills
      ul
        li Node JS and NPM
        li PHP
        li MySql and SQLite
        li Python Scripting
        li C compiled with Clang
        li SSH Access
        li Bash, Shell Scripts and Cron
        li Virtual Box VMs
        li Digital Ocean VMs
        li Lets Encrypt
        li Mailgun
        li DNS Configuration

    .projects-list
      h2 Some of My Projects
      ul
        li
          a(href="//github.com/skyfly200/CCRN-Website" target="_blank") CCRN Website
        li
          a(href="//wayhighradio.com/listen.html" target="_blank") Way High Radio Streaming Servers
        li
          a(href="//github.com/skyfly200/Radio-Network-Hub" target="_blank") Radio Network Control System

        .github-button
          a(href="//github.com/skyfly200" target="_blank")
            button
              .fa.fa-github.fa-2x
              .label &nbsp;More on GitHub

</template>

<script>
export default {
  name: "back-end",
  components: {}
};
</script>

<style lang="sass">
  .back-end
    display: flex
    background: rgba(255,255,255,0.75)
    color: #000
    .skills-list
      margin: 0px auto
    .projects-list
      margin: 0px auto
    @media (max-width: 660px)
      flex-direction: column
</style>
