<template lang="pug">
.hire-page.home-it.skill

  .page-nav
    v-btn(href="/services" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | IT Services

  .hero
    .hero-glow
    .hero-inner
      .hero-icon(data-aos="zoom-in")
        i.fas.fa-house-laptop
      .hero-eyebrow(data-aos="fade-up") IT Services
      h1.hero-title(data-aos="fade-up" data-aos-delay="80") Home IT Support
      p.hero-sub(data-aos="fade-up" data-aos-delay="160") In-home and remote tech support for computers, smart devices, networks, and everything in between.

  .content-wrap
    v-row
      v-col(cols="12" md="5")
        v-card.info-card.mb-6(data-aos="fade-up")
          v-card-title.card-title Ready for smarter tech?
          v-card-text.body-text Schedule your IT support session today. Whether remote or in-home, we will get your tech running smoothly.
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" block href="https://calendar.app.google/fyvvJvfuYHeTenAD8" target="_blank" class="mb-2")
              i.fas.fa-calendar.mr-2
              | Book Now
            v-btn(color="primary" variant="outlined" block href="mailto:home-it@skylerfly.com" target="_blank")
              i.fas.fa-envelope.mr-2
              | Contact Me

      v-col(cols="12" md="7")
        v-card.info-card.mb-4(data-aos="fade-up" data-aos-delay="80")
          v-card-title.card-title Comprehensive home tech support
          v-divider
          v-card-text.body-text I offer in-home and remote IT support for individuals and families, covering computer setup, troubleshooting, software installation, virus removal, and everyday tech help. My goal is to make technology accessible, secure, and easy to use for everyone.

        v-card.info-card.mb-4(data-aos="fade-up" data-aos-delay="120")
          v-card-title.card-title Services I offer
          v-divider
          v-list(bg-color="transparent")
            v-list-item(prepend-icon="fa:fas fa-wifi") Wi-Fi and networks: setup, optimization, and security
            v-list-item(prepend-icon="fa:fas fa-lightbulb") IoT and smart devices: speakers, lighting, thermostats
            v-list-item(prepend-icon="fa:fas fa-lock") Home security systems: sensors, cameras, doorbells
            v-list-item(prepend-icon="fa:fas fa-desktop") Computer and mobile support: troubleshooting and tune-ups

        v-expansion-panels(flat variant="accordion" data-aos="fade-up" data-aos-delay="160")
          v-expansion-panel.info-card.mb-2
            v-expansion-panel-title.card-title Hourly Rates
            v-expansion-panel-text
              v-list(bg-color="transparent")
                v-list-item Remote Support: $100/hour
                v-list-item On-Site Support: $150/hour
              p.caption-text Minimum 1-hour charge for all services.
          v-expansion-panel.info-card
            v-expansion-panel-title.card-title Smart Home Setup Special (Flat Fee)
            v-expansion-panel-text
              p.body-text Our Move-In Special gets your Wi-Fi and IoT devices professionally set up for one flat price.
              v-list(bg-color="transparent")
                v-list-item Router plus up to 10 IoT devices: $300
                v-list-item Router plus up to 20 IoT devices: $500
                v-list-item Multiple routers plus up to 30 IoT devices: $800
              p.caption-text For larger setups, contact us for a custom quote.
</template>

<script>
export default { name: "home-it" };
</script>

<style lang="sass">
@use "@/assets/sass/hire.sass" as *

.home-it
  --accent: #18D08B
  --accent-2: #009E62

  .content-wrap
    max-width: 1100px

  .card-title
    font-size: 1.1rem
    padding-top: 12px

  .card-actions
    flex-direction: column
    border-top: none
</style>
