<template lang="pug">
.web3.skill
  v-fab(to="/software" flat location="top start" app).home-btn Back
  .web3-info
    h2 Web3 Projects
    v-container
      v-row
        v-col(cols="12" md="6")
          v-card
            v-img(src="/images/TB-logo.svg" alt="TinyBoxes NFT Logo").card-img
            v-card-title TinyBoxes NFT
            v-card-subtitle Animated On-Chain Generative Art
            v-card-text
              | TinyBoxes NFT is a collection of 2222 unique, animated, on-chain generative art pieces. Each TinyBox is a unique NFT, stored on the Ethereum blockchain. The TinyBoxes NFT project was a collaboration between myself and my partner NateAlex.
            v-card-actions.card-actions
              v-btn.card-btn(variant="outlined" color="accent" block href="https://tinybox.shop" target="_blank") Visit Site
        v-col(cols="12" md="6")
          v-card
            v-img(src="/images/artblocks-logo.svg" alt="ArtBlocks Platform Logo").card-img
            v-card-title Art Blocks
            v-card-subtitle On-Chain Generative Art Platform
            v-card-text
              | Art Blocks is a platform for minting and selling on-chain generative art NFTs. The platform was created by Erick Calderon and has been a huge success in the NFT space. I developed some smart contracts for the platform and created the RNG system used to generate the art.
            v-card-actions.card-actions
              v-btn.card-btn(variant="outlined" color="accent" block href="https://artblocks.io" target="_blank") Visit Site

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "web3",
  components: {
    GitHubBtn
  },
};
</script>

<style lang="sass">
.web3
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .web3-info
    text-align: center
    margin: auto
    padding: 10px

  .card-img
    height: 200px
    margin: 1rem
  .card-actions a:visited
    color: white

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white
</style>
