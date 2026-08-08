<template lang="pug">
.hire-page.consulting.skill

  .page-nav
    v-btn(href="/services" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | IT Services

  .hero
    .hero-glow
    .hero-inner
      .hero-icon(data-aos="zoom-in")
        i.fas.fa-lightbulb
      .hero-eyebrow(data-aos="fade-up") IT Services
      h1.hero-title(data-aos="fade-up" data-aos-delay="80") Emerging Tech Consulting
      p.hero-sub(data-aos="fade-up" data-aos-delay="160") Practical guidance on blockchain, AI, automation, EVs, and the technologies shaping tomorrow.

  .content-wrap
    v-card.info-card(data-aos="fade-up")
      v-card-text
        p.body-text I help businesses and individuals make sense of emerging technologies like blockchain, artificial intelligence, automation, EVs, renewable energy, and cloud computing. Together we map out where these tools fit your goals and how to put them to work.
      v-card-actions.card-actions
        v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
          i.fas.fa-calendar.mr-2
          | Book Now
        v-btn(color="primary" variant="outlined" href="mailto:consulting@skylerfly.com" target="_blank")
          i.fas.fa-envelope.mr-2
          | Contact Me
</template>

<script>
export default { name: "consulting" };
</script>

<style lang="sass">
@use "@/assets/sass/hire.sass" as *

.consulting
  --accent: #18D08B
  --accent-2: #009E62
</style>
