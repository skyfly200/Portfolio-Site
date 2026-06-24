<template lang="pug">
.services.skill

  v-btn(href="/" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Home

  .page-header(data-aos="fade-down")
    .header-eyebrow Available For Hire
    h1.header-title Services
    p.header-sub IT support, tutoring, and emerging tech consulting — for homes, businesses, and curious minds.

  v-divider.my-6

  .cards-grid
    v-row
      v-col(cols="12" md="6")
        v-card.skill-card(@click="$router.push('/buis-it')")
          v-img(cover src="https://picsum.photos/id/1078/600/300" alt="Business IT" height="200")
          v-card-title.card-title Business IT Solutions
          v-card-subtitle.card-sub All your IT needs in one place
          v-card-text.card-body I provide comprehensive IT solutions for small to medium-sized businesses, including networks, point of sale systems, Google listings, security systems, automation and hardware/software procurement.
          v-card-actions
            v-btn(variant="outlined" color="primary" to="/buis-it") See More
              i.fas.fa-arrow-right.ml-2
      v-col(cols="12" md="6")
        v-card.skill-card(@click="$router.push('/home-it')")
          v-img(cover src="https://picsum.photos/id/225/600/300" alt="Home IT" height="200")
          v-card-title.card-title Home IT Support
          v-card-subtitle.card-sub In-home and remote support for all your devices
          v-card-text.card-body I offer in-home and remote IT support services, helping with computers, phones, IoT, security systems, audio/video gear, and general tech support.
          v-card-actions
            v-btn(variant="outlined" color="primary" to="/home-it") See More
              i.fas.fa-arrow-right.ml-2
      v-col(cols="12" md="6")
        v-card.skill-card(@click="$router.push('/tutoring')")
          v-img(cover src="https://picsum.photos/id/1073/600/300" alt="Tutoring" height="200")
          v-card-title.card-title Tutoring
          v-card-subtitle.card-sub Personalized IT and software development tutoring
          v-card-text.card-body Personalized tutoring in programming languages, web development, database management, and cloud computing — for beginners to advanced learners.
          v-card-actions
            v-btn(variant="outlined" color="primary" to="/tutoring") See More
              i.fas.fa-arrow-right.ml-2
      v-col(cols="12" md="6")
        v-card.skill-card(@click="$router.push('/consulting')")

          v-img(cover src="https://picsum.photos/id/306/600/300" alt="Consulting" height="200")
          v-card-title.card-title Emerging Tech Consulting
          v-card-subtitle.card-sub Expert guidance for businesses and individuals
          v-card-text.card-body Expert consulting on blockchain, AI, automation, EVs, renewable energy, and cloud computing — helping you understand and leverage the technologies shaping the future.
          v-card-actions
            v-btn(variant="outlined" color="primary" to="/consulting") See More
              i.fas.fa-arrow-right.ml-2

    v-divider.my-8

    .case-studies-cta(data-aos="fade-up")
      .cta-label See It In Action
      h2.cta-title Case Studies
      p.cta-body Real client engagements, technical breakdowns, and measurable outcomes — from network overhauls to blockchain security research.
      v-btn(color="primary" variant="elevated" to="/case-studies" size="large")
        i.fas.fa-arrow-right.mr-2
        span View Case Studies</template>

<script>
export default { name: "services" };
</script>

<style lang="sass">
.services
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

  .cards-grid
    max-width: 1100px
    margin: 0 auto
    padding: 0 24px

  .skill-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important
    cursor: pointer
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s
    height: 100%

    &::after
      content: ''
      display: block
      height: 2px
      width: 0
      background: linear-gradient(90deg, #7627D0, #a855f7)
      transition: width 0.3s ease

    &:hover
      border-color: rgba(118, 39, 208, 0.7) !important
      transform: translateY(-3px)
      box-shadow: 0 6px 24px rgba(118, 39, 208, 0.25) !important
      &::after
        width: 100%

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.2rem

  .card-sub
    font-family: 'Raleway', sans-serif
    opacity: 0.6

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.9rem
    line-height: 1.7
    opacity: 0.8

  .case-studies-cta
    text-align: center
    padding: 40px 24px 0
    .cta-label
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      letter-spacing: 0.25em
      text-transform: uppercase
      color: #7627D0
      margin-bottom: 12px
    h2.cta-title
      font-family: 'Nixie One', sans-serif
      font-size: clamp(1.6rem, 4vw, 2.2rem)
      font-weight: 700
      margin-bottom: 12px
    .cta-body
      font-family: 'Raleway', sans-serif
      font-size: 1rem
      opacity: 0.7
      max-width: 560px
      margin: 0 auto 24px
</style>