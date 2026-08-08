<template lang="pug">
.work-with-me#work
  .wwm-inner
    .wwm-header(data-aos="fade")
      .wwm-eyebrow Work With Me
      h2.wwm-title Hire me for your next project
      p.wwm-sub From high-precision engineering to friendly local tech support, pick the track that fits and let's build something.

    .wwm-cards
      NuxtLink.wwm-card.engineering(to="/engineering" data-aos="fade-up")
        .wwm-icon
          i.fas.fa-microchip
        h3.wwm-card-title Engineering
        .wwm-rate $100 to $200 / hr
        p.wwm-card-body PCB and hardware design, 3D CAD, full-stack software, and network architecture for products and businesses.
        .wwm-link
          span Explore Engineering
          i.fas.fa-arrow-right.ml-2

      NuxtLink.wwm-card.services(to="/services" data-aos="fade-up" data-aos-delay="100")
        .wwm-icon
          i.fas.fa-headset
        h3.wwm-card-title IT Services
        .wwm-rate $30 to $150 / hr
        p.wwm-card-body Home and business IT support, device and network setup, plus 1-on-1 tech and coding tutoring.
        .wwm-link
          span Explore IT Services
          i.fas.fa-arrow-right.ml-2
</template>

<script>
export default { name: "work-with-me" };
</script>

<style lang="sass">
.work-with-me
  width: 100%
  padding: 80px 20px
  background-color: $grey-0
  color: white
  @include card-depth(3)

  .wwm-inner
    max-width: 1080px
    margin: 0 auto

  .wwm-header
    text-align: center
    max-width: 680px
    margin: 0 auto 48px
    .wwm-eyebrow
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      letter-spacing: 0.28em
      text-transform: uppercase
      color: #a855f7
      margin-bottom: 14px
    h2.wwm-title
      font-family: 'Nixie One', sans-serif
      font-size: clamp(2rem, 5vw, 3rem)
      font-weight: 700
      line-height: 1.1
      margin-bottom: 16px
    .wwm-sub
      font-family: 'Raleway', sans-serif
      font-size: 1.05rem
      line-height: 1.7
      opacity: 0.75

  .wwm-cards
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 24px
    @media (max-width: 760px)
      grid-template-columns: 1fr

  .wwm-card
    --accent: #a855f7
    --accent-2: #7627D0
    position: relative
    display: block
    text-decoration: none
    color: white
    padding: 36px 32px
    border-radius: 18px
    background: rgba(255,255,255,0.04)
    border: 1px solid rgba(255,255,255,0.08)
    overflow: hidden
    transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease

    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      height: 4px
      background: linear-gradient(90deg, var(--accent-2), var(--accent))
      transform: scaleX(0)
      transform-origin: left
      transition: transform 0.4s ease

    &.services
      --accent: #18D08B
      --accent-2: #009E62

    &:hover
      transform: translateY(-6px)
      border-color: color-mix(in srgb, var(--accent) 60%, transparent)
      box-shadow: 0 18px 46px color-mix(in srgb, var(--accent) 25%, transparent)
      &::before
        transform: scaleX(1)
      .wwm-link i
        transform: translateX(4px)

    .wwm-icon
      width: 56px
      height: 56px
      border-radius: 14px
      display: flex
      align-items: center
      justify-content: center
      font-size: 1.5rem
      color: white
      background: linear-gradient(135deg, var(--accent-2), var(--accent))
      box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 40%, transparent)
      margin-bottom: 20px

    .wwm-card-title
      font-family: 'Nixie One', sans-serif
      font-size: 1.6rem
      margin-bottom: 6px

    .wwm-rate
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      letter-spacing: 0.06em
      color: var(--accent)
      margin-bottom: 16px

    .wwm-card-body
      font-family: 'Raleway', sans-serif
      font-size: 0.98rem
      line-height: 1.7
      opacity: 0.82
      margin-bottom: 22px

    .wwm-link
      font-family: 'Nixie One', sans-serif
      font-size: 0.95rem
      color: var(--accent)
      display: inline-flex
      align-items: center
      i
        transition: transform 0.25s ease
</style>
