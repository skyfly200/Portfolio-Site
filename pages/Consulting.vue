<template lang="pug">
.consulting.skill

  v-btn(href="/services" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Services

  .page-header(data-aos="fade-down")
    .header-eyebrow Services
    h1.header-title Emerging Tech Consulting
    p.header-sub Expert guidance on blockchain, AI, automation, EVs, and the technologies shaping tomorrow.

  v-divider.my-6

  .content-wrap
    v-card.info-card
      v-card-text
        p.body-text I provide expert consulting services on emerging technologies such as blockchain, artificial intelligence, automation, EVs, renewable energy and cloud computing. I help businesses and individuals understand the potential applications of these technologies and how they can be leveraged to achieve their goals.
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
.consulting
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
    max-width: 720px
    margin: 0 auto
    padding: 0 24px

  .info-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important

  .body-text
    font-family: 'Raleway', sans-serif
    font-size: 1rem
    line-height: 1.8
    opacity: 0.85

  .card-actions
    display: flex
    flex-wrap: wrap
    gap: 12px
    padding: 8px 16px 16px
</style>