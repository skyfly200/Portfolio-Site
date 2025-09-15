<template lang="pug">
.buis-it.skill
  v-fab(to="/services" flat location="top start" app).home-btn Back
  .buis-it-info
    .headline
      h1 Generative Art
    v-container.projects
      v-row
        v-col(cols="12" md="6" lg="4")
          v-card
            v-card-title TinyBoxes NFT
            v-img(cover src="/images/TB-logo.svg" alt="phi art" height="400px")
            v-card-text
              | Animated On-Chain Generative Art NFTs.
              | A collection of 2222 unique tokens.
              | Each TinyBox is a unique piece of generative art.
              | Built with Solidity, Hardhat, Ethers.js, and Vue.js.
            v-card-actions
              v-btn(text href="https://tinybox.shop" target="_blank") Visit
        v-col(cols="12" md="6" lg="4")
          v-card
            v-card-title Caustics Container
            v-img(cover src="/images/caustics.png" alt="phi art" height="400px")
            v-card-text
              | A container for caustics, a generative art project.
              | Water simulation thats music responsive and interactive.
              | Built with WebGL, Three.js and WebAudio API.
            v-card-actions
              v-btn(text href="https://github.com/skyfly200/caustics-art" target="_blank") View on GitHub
        v-col(cols="12" md="6" lg="4")
          v-card
            v-card-title Phi Inspired Series
            v-img(cover src="/images/hardware/phi-lamp.jpg" alt="phi art" height="400px")
            v-card-text
              | Shapes inspired by the golden ratio.
              | Generative 3d models made with Pyhton scripts in Blender
              | Jewelry and light art pieces created with 3d printing.
            v-card-actions
              v-btn(text href="" target="_blank") View on GitHub

</template>

<script>

export default {
  name: "buis-it",
  components: {
    GitHubBtn
  },
};
</script>

<style lang="sass">
.buis-it
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .headline
    width: 100%
    text-align: center
  .buis-it-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white

</style>
