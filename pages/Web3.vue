<template lang="pug">
.web3.skill

  v-btn(href="/software" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Software

  .page-header(data-aos="fade-down")
    .header-eyebrow Software
    h1.header-title Web3 & Blockchain
    p.header-sub On-chain generative art, smart contract development, and decentralized applications on Ethereum.

  v-divider.my-6

  .cards-grid
    v-row
      v-col(cols="12" md="6")
        v-card.skill-card
          v-img(cover src="/images/TB-logo.svg" alt="TinyBoxes NFT Logo" height="200")
          v-card-title.card-title TinyBoxes NFT
          v-card-subtitle.card-sub Animated On-Chain Generative Art
          v-card-text.card-body TinyBoxes NFT is a collection of 2222 unique, animated, on-chain generative art pieces stored on the Ethereum blockchain — a collaboration with NateAlex.
          v-card-actions
            v-btn(variant="outlined" color="primary" href="https://tinybox.shop" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | Visit Site
      v-col(cols="12" md="6")
        v-card.skill-card
          v-img(cover src="/images/artblocks-logo.svg" alt="ArtBlocks Logo" height="200")
          v-card-title.card-title Art Blocks
          v-card-subtitle.card-sub On-Chain Generative Art Platform
          v-card-text.card-body I developed smart contracts for the Art Blocks platform and created the RNG system used to generate the art — one of the most respected on-chain generative art platforms in existence.
          v-card-actions
            v-btn(variant="outlined" color="primary" href="https://artblocks.io" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | Visit Site
</template>

<script>
export default { name: "web3" };
</script>

<style lang="sass">
.web3
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

  .card-sub
    font-family: 'Raleway', sans-serif
    opacity: 0.6

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.9rem
    line-height: 1.7
    opacity: 0.82
</style>