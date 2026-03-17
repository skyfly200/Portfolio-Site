<template lang="pug">
.gen-art.skill

  v-btn(href="/multimedia" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Multimedia

  .page-header(data-aos="fade-down")
    .header-eyebrow Multimedia
    h1.header-title Generative Art
    p.header-sub Code as a creative medium — on-chain NFTs, algorithmic 3D, and music-reactive visuals.

  v-divider.my-6

  .cards-grid
    v-row
      v-col(cols="12" md="6" lg="4")
        v-card.skill-card
          v-img(cover src="/images/TB-logo.svg" alt="TinyBoxes NFT" height="220")
          v-card-title.card-title TinyBoxes NFT
          v-card-text.card-body Animated on-chain generative art NFTs — a collection of 2222 unique tokens built with Solidity, Hardhat, Ethers.js, and Vue.js.
          v-card-actions
            v-btn(variant="outlined" color="primary" href="https://tinybox.shop" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | Visit
      v-col(cols="12" md="6" lg="4")
        v-card.skill-card
          v-img(cover src="/images/caustics.png" alt="Caustics Container" height="220")
          v-card-title.card-title Caustics Container
          v-card-text.card-body Water simulation that's music-responsive and interactive. Built with WebGL, Three.js, and the WebAudio API.
          v-card-actions
            v-btn(variant="outlined" color="primary" href="https://github.com/skyfly200/caustics-art" target="_blank")
              i.fab.fa-github.mr-2
              | View on GitHub
      v-col(cols="12" md="6" lg="4")
        v-card.skill-card
          v-img(cover src="/images/hardware/phi-lamp.jpg" alt="Phi Series" height="220")
          v-card-title.card-title Phi Inspired Series
          v-card-text.card-body Shapes inspired by the golden ratio — generative 3D models via Python scripts in Blender, realized as jewelry and light art through 3D printing.
          v-card-actions
            v-btn(variant="outlined" color="primary" href="https://www.printables.com/@SkyFly_136025/models" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | Printables
</template>

<script>
export default { name: "gen-art" };
</script>

<style lang="sass">
.gen-art
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
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s
    height: 100%
    overflow: hidden

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
    font-size: 1.15rem

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.9rem
    line-height: 1.7
    opacity: 0.82
</style>