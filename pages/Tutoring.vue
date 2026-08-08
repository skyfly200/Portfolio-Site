<template lang="pug">
.hire-page.tutoring.skill

  .page-nav
    v-btn(href="/services" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | IT Services

  .hero
    .hero-glow
    .hero-inner
      .hero-icon(data-aos="zoom-in")
        i.fas.fa-chalkboard-user
      .hero-eyebrow(data-aos="fade-up") IT Services
      h1.hero-title(data-aos="fade-up" data-aos-delay="80") Tech & Coding Tutoring
      p.hero-sub(data-aos="fade-up" data-aos-delay="160") Personalized IT and software development tutoring, tailored to where you are and where you want to go.

  .content-wrap
    v-card.info-card(data-aos="fade-up")
      v-card-text
        p.body-text I offer personalized tutoring in IT and software development, including programming languages like Python and JavaScript, web development, database management, and cloud computing. Every session is shaped around your goals, whether you are just starting out or leveling up advanced skills.
      v-card-actions.card-actions
        v-btn(color="primary" variant="elevated" href="https://calendar.app.google/Q5RwJpk7RyLoiF796" target="_blank")
          i.fas.fa-calendar.mr-2
          | Book Now
        v-btn(color="primary" variant="outlined" href="mailto:tutoring@skylerfly.com" target="_blank")
          i.fas.fa-envelope.mr-2
          | Contact Me
</template>

<script>
export default { name: "tutoring" };
</script>

<style lang="sass">
@use "@/assets/sass/hire.sass" as *

.tutoring
  --accent: #18D08B
  --accent-2: #009E62
</style>
