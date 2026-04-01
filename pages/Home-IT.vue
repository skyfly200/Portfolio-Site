<template lang="pug">
.home-it.skill

  v-btn(href="/services" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Services

  .page-header(data-aos="fade-down")
    .header-eyebrow Services
    h1.header-title Home IT Support
    p.header-sub In-home and remote tech support for computers, smart devices, networks, and everything in between.

  v-divider.my-6

  .content-wrap
    v-row
      v-col(cols="12" md="5")
        v-card.info-card.mb-6
          v-img(cover src="https://picsum.photos/id/225/600/300" alt="Home IT Image" height="200")
          v-card-title.card-title Ready for Smarter Tech?
          v-card-text.card-body Schedule your IT support session today. Whether remote or in-home, we'll get your tech running smoothly.
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" block href="https://calendar.app.google/fyvvJvfuYHeTenAD8" target="_blank" class="mb-2")
              i.fas.fa-calendar.mr-2
              | Book Now
            v-btn(color="primary" variant="outlined" block href="mailto:home-it@skylerfly.com" target="_blank")
              i.fas.fa-envelope.mr-2
              | Contact Me

      v-col(cols="12" md="7")
        v-card.info-card.mb-4
          v-card-title.card-title Comprehensive Home Tech Support
          v-divider
          v-card-text.card-body I offer in-home and remote IT support services for individuals and families, helping with computer setup, troubleshooting, software installation, virus removal, and general tech support. My goal is to make technology accessible, secure, and easy to use for everyone.

        v-card.info-card.mb-4
          v-card-title.card-title Services I Offer
          v-divider
          v-list(bg-color="transparent")
            v-list-item(prepend-icon="fa:fas fa-wifi") Wi-Fi & Networks — setup, optimization, and security
            v-list-item(prepend-icon="fa:fas fa-lightbulb") IoT & Smart Devices — speakers, lighting, thermostats
            v-list-item(prepend-icon="fa:fas fa-lock") Home Security Systems — sensors, cameras, doorbells
            v-list-item(prepend-icon="fa:fas fa-desktop") Computer & Mobile Support — troubleshooting and tune-ups

        v-expansion-panels(flat variant="accordion")
          v-expansion-panel.info-card.mb-2
            v-expansion-panel-title.card-title Hourly Rates
            v-expansion-panel-text
              v-list(bg-color="transparent")
                v-list-item Remote Support: $75/hour
                v-list-item On-Site Support: $100/hour
              p.caption-text *Minimum 1-hour charge for all services.
          v-expansion-panel.info-card
            v-expansion-panel-title.card-title Smart Home Setup Special (Flat Fee)
            v-expansion-panel-text
              p.card-body Our Move-In Special gets your Wi-Fi and IoT devices professionally set up for one flat price.
              v-list(bg-color="transparent")
                v-list-item Router + up to 10 IoT devices — $300
                v-list-item Router + up to 20 IoT devices — $500
                v-list-item Multiple routers + up to 30 IoT devices — $800
              p.caption-text For larger setups, contact us for a custom quote.
</template>

<script>
export default { name: "home-it" };
</script>

<style lang="sass">
.home-it
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

  .info-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.1rem

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.95rem
    line-height: 1.8
    opacity: 0.85

  .caption-text
    font-family: 'Raleway', sans-serif
    font-size: 0.8rem
    opacity: 0.55
    margin-top: 8px

  .card-actions
    display: flex
    flex-direction: column
    gap: 8px
    padding: 8px 16px 16px
</style>