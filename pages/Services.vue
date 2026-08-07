<template lang="pug">
.hire-page.services.skill

  .page-nav
    v-btn(href="/" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | Home
    .nav-links
      v-btn(to="/engineering" variant="text" color="primary" size="small") Engineering
      v-btn(to="/services" variant="text" color="primary" size="small").active-link IT Services

  .hero
    .hero-glow
    .hero-inner
      .hero-icon(data-aos="zoom-in")
        i.fas.fa-headset
      .hero-eyebrow(data-aos="fade-up") Local IT Support & Tutoring
      h1.hero-title(data-aos="fade-up" data-aos-delay="80") Tech that works for you.
      p.hero-sub(data-aos="fade-up" data-aos-delay="200") Technology should empower you, not frustrate you. I provide patient, detailed tech support and personalized tutoring for homes, small businesses, and curious minds. With a background across hardware, networking, and software, I take time to understand your goals and fix problems at the root, so you feel confident and fully supported.

  .cards-grid
    v-row
      v-col(cols="12" md="6")
        v-card#it-support.service-card(data-aos="fade-up")
          .accent-bar
          v-card-item
            .icon-tile
              i.fas.fa-house-laptop
            .card-rate $100 to $150 / hr
            v-card-title.card-title Business & Home IT Support
            v-card-subtitle.card-sub In-home, office, and remote support for all your devices.
          v-card-text.card-body
            p Full support for Wi-Fi and networks, computers, phones, IoT devices, point-of-sale systems, audio and video gear, and everyday troubleshooting.
          v-card-actions.card-actions
            v-btn(variant="outlined" color="primary" to="/buis-it") Business
              i.fas.fa-arrow-right.ml-2
            v-btn(variant="outlined" color="primary" to="/home-it") Home
              i.fas.fa-arrow-right.ml-2
            v-btn(variant="text" color="primary" href="mailto:support@skylerfly.com?subject=IT%20Support%20Inquiry&body=Interested%20in%3A%20Business%20%26%20Home%20IT%20Support%0A%0A")
              i.fas.fa-envelope.mr-2
              | Contact

      v-col(cols="12" md="6")
        v-card#tutoring.service-card(data-aos="fade-up" data-aos-delay="80")
          .accent-bar
          v-card-item
            .icon-tile
              i.fas.fa-chalkboard-user
            .card-rate $30 to $100 / hr
            v-card-title.card-title Tech & Coding Tutoring
            v-card-subtitle.card-sub Personalized IT and software development mentorship.
          v-card-text.card-body
            p One-on-one instruction in programming languages, web development, hardware basics, and digital tools, tailored for beginners through advanced learners.
          v-card-actions.card-actions
            v-btn(variant="outlined" color="primary" to="/tutoring") See More
              i.fas.fa-arrow-right.ml-2
            v-btn(variant="text" color="primary" href="mailto:tutoring@skylerfly.com?subject=Tutoring%20Inquiry&body=Interested%20in%3A%20Tech%20%26%20Coding%20Tutoring%0A%0A")
              i.fas.fa-envelope.mr-2
              | Contact

    .cross-cta(data-aos="fade-up")
      .cta-label See it in action
      p.cta-body Real client engagements, technical breakdowns, and measurable outcomes, from network overhauls to blockchain security research.
      v-btn(color="secondary" variant="elevated" to="/case-studies" size="large")
        i.fas.fa-arrow-right.mr-2
        span View Case Studies

    .cross-cta(data-aos="fade-up")
      .cta-label Need high-precision engineering?
      p.cta-body PCB design, 3D CAD, full-stack software, and network architecture. $100 to $200 / hr.
      v-btn(color="primary" variant="outlined" to="/engineering" size="large")
        span Visit Engineering
        i.fas.fa-arrow-right.ml-2
</template>

<script>
export default { name: "services" };
</script>

<style lang="sass">
@use "@/assets/sass/hire.sass" as *

.services
  --accent: #18D08B
  --accent-2: #009E62
</style>
