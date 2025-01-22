<template lang="pug">
.gen-art.skill
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  .web3-info
    h2 Web3 Projects
    ul.projects-list
      li
        a(href="https://github.com/skyfly200/mapping-scripts" target="_blank") Water System Mapping for the Town of Ward
      li
        a(href="https://github.com/skyfly200/SwissArmyKnife" target="_blank") 5Ghz WiFi Frequency Plotter
      li
        a(href="https://tinybox.shop" target="_blank") TinyBoxes NFT - Animated On-Chain Generative Art
      li
        a(href="https://wayhighradio.com" target="_blank") Way High Radio - Pirate Radio for the Town of Ward
      li
        a(href="https://coloradocommunityradio.com" target="_blank") Colorado Community Radio Network - FM and Online Broadcasting in Communities Across Colorado

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "gen-art",
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

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white

</style>
