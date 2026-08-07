<template lang="pug">
.hire-page.buis-it.skill

  .page-nav
    v-btn(href="/services" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | IT Services

  .hero
    .hero-glow
    .hero-inner
      .hero-icon(data-aos="zoom-in")
        i.fas.fa-briefcase
      .hero-eyebrow(data-aos="fade-up") IT Services
      h1.hero-title(data-aos="fade-up" data-aos-delay="80") Business IT Solutions
      p.hero-sub(data-aos="fade-up" data-aos-delay="160") Comprehensive technology support to keep your business running smoothly and efficiently.

  .content-wrap
    v-card.info-card(data-aos="fade-up")
      v-card-text
        p.body-text I provide comprehensive IT solutions for small to medium-sized businesses, including network setup and management, cybersecurity, point-of-sale systems, Google listings, security systems, automation, and hardware and software procurement. My goal is to streamline your operations and boost productivity through technology that just works.
      v-card-actions.card-actions
        v-btn(color="primary" variant="elevated" href="https://calendar.app.google/QVUTpTm14n72mHPw9" target="_blank")
          i.fas.fa-calendar.mr-2
          | Book Now
        v-btn(color="primary" variant="outlined" href="mailto:business-it@skylerfly.com" target="_blank")
          i.fas.fa-envelope.mr-2
          | Contact Me
</template>

<script>
export default { name: "buis-it" };
</script>

<style lang="sass">
@use "@/assets/sass/hire.sass" as *

.buis-it
  --accent: #18D08B
  --accent-2: #009E62
</style>
