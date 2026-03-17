<template lang="pug">
.linux.skill

  v-btn(href="/software" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Software

  .page-header(data-aos="fade-down")
    .header-eyebrow Software
    h1.header-title Linux & DevOps
    p.header-sub Servers, automation, infrastructure — building and maintaining reliable systems from the ground up.

  v-divider.my-6

  .content-wrap
    .section-title Tools & Technologies
    .chips-wrap
      v-chip(v-for="t in tools" :key="t" variant="tonal" color="primary" class="mr-2 mb-2") {{ t }}

    v-divider.my-6

    .section-title Experience & Skills
    v-row.mt-2
      v-col(cols="12" md="6")
        v-card.info-card.mb-4(v-for="skill in skills" :key="skill")
          v-card-text.skill-item
            i.fas.fa-check-circle.mr-2(style="color:#7627D0")
            | {{ skill }}

    v-divider.my-6

    .section-title Projects
    v-row
      v-col(cols="12" md="6" v-for="proj in projects" :key="proj.title")
        v-card.skill-card
          v-card-title.card-title {{ proj.title }}
          v-card-subtitle.card-sub {{ proj.subtitle }}
          v-card-actions
            v-btn(variant="outlined" color="primary" :href="proj.url" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | Visit
</template>

<script>
export default {
  name: "linux",
  data: () => ({
    tools: [
      "Apache","Nginx","Express","Node","MySQL","MariaDB","SQLite","Mongo",
      "Python","Ruby","PHP","SSH","Bash/Shell","Cron","TensorFlow","Ansible",
      "Docker","VirtualBox","Digital Ocean","AWS","Google Cloud","Firebase",
      "Netlify","GitHub","Let's Encrypt","Icecast2"
    ],
    skills: [
      "Install and configure Linux servers",
      "Linux CLI, cron, permissions, shell scripts",
      "Create and configure Digital Ocean droplets",
      "HTTPS with Let's Encrypt / Certbot",
      "Icecast2 configuration and broadcasting",
      "GitHub project management workflows",
    ],
    projects: [
      { title: "CCRN Website", subtitle: "Website for Colorado Community Radio Network", url: "https://github.com/skyfly200/CCRN-Website" },
      { title: "Way High Radio Streaming", subtitle: "Streaming servers for Way High Radio", url: "https://wayhighradio.com/listen.html" },
      { title: "Radio Network Control System", subtitle: "Control system for the radio network", url: "https://github.com/skyfly200/Radio-Network-Hub" },
    ],
  }),
};
</script>

<style lang="sass">
.linux
  width: 100%
  color: white
  padding-bottom: 80px

  .home-btn
    margin: 16px 0 0 16px

  .page-header
    text-align: center
    padding: 48px 24px 24px
    max-width: 760px
    margin: 0 auto
    .header-eyebrow
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      letter-spacing: 0.25em
      text-transform: uppercase
      color: #7627D0
      margin-bottom: 12px
    h1.header-title
      font-family: 'Nixie One', sans-serif
      font-size: clamp(2rem, 5vw, 3rem)
      font-weight: 700
      line-height: 1.1
      margin-bottom: 16px
    .header-sub
      font-family: 'Raleway', sans-serif
      font-size: 1.05rem
      opacity: 0.7

  .content-wrap
    max-width: 1100px
    margin: 0 auto
    padding: 0 24px

  .section-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.3rem
    margin-bottom: 16px
    color: white

  .chips-wrap
    display: flex
    flex-wrap: wrap

  .info-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 8px !important

  .skill-item
    font-family: 'Raleway', sans-serif
    font-size: 0.95rem
    opacity: 0.85

  .skill-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s
    height: 100%

    &:hover
      border-color: rgba(118, 39, 208, 0.7) !important
      transform: translateY(-3px)
      box-shadow: 0 6px 24px rgba(118, 39, 208, 0.25) !important

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.05rem

  .card-sub
    font-family: 'Raleway', sans-serif
    opacity: 0.6
</style>