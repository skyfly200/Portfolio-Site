<template lang="pug">
.services.skill

  .page-nav
    v-btn(href="/" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | Home
    .nav-links
      v-btn(to="/engineering" variant="text" color="primary" size="small") Engineering
      v-btn(to="/services" variant="text" color="primary" size="small").active-link IT Services

  .page-header(data-aos="fade-down")
    .header-eyebrow Local IT Support &amp; Tutoring
    h1.header-title IT Services
    .rate-badge $30 – $150 / hr
    p.header-sub Technology should empower, not frustrate. I provide patient, detail-oriented technical support and personalized tutoring for homes, small businesses, and curious minds. With a deep background spanning hardware, networking, and software engineering, I take the time to understand your specific goals and solve problems at their root. My priority is always a positive, stress-free experience—leaving you confident, fully supported, and truly satisfied with your tech setup.

  v-divider.my-6

  .cards-grid
    v-row
      v-col(cols="12" md="6")
        v-card#it-support.skill-card
          v-img(cover src="https://picsum.photos/id/1078/600/300" alt="Business & Home IT" height="200")
          v-card-item
            .card-rate $100 – $150 / hr
            v-card-title.card-title Business &amp; Home IT Support
            v-card-subtitle.card-sub In-home, office, and remote support for all your devices and infrastructure.
          v-card-text.card-body Comprehensive support covering Wi-Fi/networks, computers, phones, IoT devices, point-of-sale systems, audio/video gear, and general tech troubleshooting.
          v-card-actions.card-actions
            v-btn(variant="outlined" color="primary" to="/buis-it") Business
              i.fas.fa-arrow-right.ml-2
            v-btn(variant="outlined" color="primary" to="/home-it") Home
              i.fas.fa-arrow-right.ml-2
            v-btn(variant="text" color="primary" href="mailto:support@skylerfly.com?subject=IT%20Support%20Inquiry&body=Interested%20in%3A%20Business%20%26%20Home%20IT%20Support%0A%0A")
              i.fas.fa-envelope.mr-2
              | Contact
      v-col(cols="12" md="6")
        v-card#tutoring.skill-card
          v-img(cover src="https://picsum.photos/id/1073/600/300" alt="Tech & Coding Tutoring" height="200")
          v-card-item
            .card-rate $30 – $100 / hr
            v-card-title.card-title Tech &amp; Coding Tutoring
            v-card-subtitle.card-sub Personalized IT and software development mentorship.
          v-card-text.card-body 1-on-1 instruction in programming languages, web development, hardware basics, and digital tools—tailored for beginners to advanced learners.
          v-card-actions.card-actions
            v-btn(variant="outlined" color="primary" to="/tutoring") See More
              i.fas.fa-arrow-right.ml-2
            v-btn(variant="text" color="primary" href="mailto:tutoring@skylerfly.com?subject=Tutoring%20Inquiry&body=Interested%20in%3A%20Tech%20%26%20Coding%20Tutoring%0A%0A")
              i.fas.fa-envelope.mr-2
              | Contact

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

  .page-nav
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    gap: 8px
    padding: 16px 16px 0
    .nav-links
      display: flex
      gap: 4px
    .active-link
      font-weight: 700
      text-decoration: underline

  .page-header
    text-align: center
    padding: 40px 24px 24px
    max-width: 820px
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
      margin-bottom: 12px
    .rate-badge
      display: inline-block
      font-family: 'Nixie One', sans-serif
      font-size: 0.9rem
      letter-spacing: 0.05em
      color: #a855f7
      border: 1px solid rgba(168, 85, 247, 0.5)
      border-radius: 999px
      padding: 4px 16px
      margin-bottom: 20px
    .header-sub
      font-family: 'Raleway', sans-serif
      font-size: 1.05rem
      line-height: 1.8
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

  .skill-card
    scroll-margin-top: 80px

  .card-rate
    font-family: 'Nixie One', sans-serif
    font-size: 0.8rem
    letter-spacing: 0.08em
    color: #a855f7
    margin: 8px 0 4px

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.2rem
    white-space: normal

  .card-actions
    display: flex
    flex-wrap: wrap
    gap: 8px
    padding: 8px 16px 16px

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