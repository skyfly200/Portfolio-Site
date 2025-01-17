<template lang="pug">
.software.skill
  v-toolbar(title="Skyler Fly-Wilson")
    v-btn(to="/" flat) Home
  .software-info
    h2 Software Projects
    h3 PLACE LINKS TO OTHER SOFTWARE AREAS HERE
    ul.projects-list
      li
        a(href="https://github.com/skyfly200/mapping-scripts" target="_blank") Water System Mapping for the Town of Ward
      li
        a(href="https://github.com/skyfly200/SwissArmyKnife" target="_blank") 5Ghz WiFi Frequency Plotter

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "software",
  components: {
    GitHubBtn
  },
  created() {
    let codepen = document.createElement("script");
    codepen.setAttribute("src", "https://static.codepen.io/assets/embed/ei.js");
    document.head.appendChild(codepen);
  },
  data: () => {
    return {
      topics: {
        frontEnd: {
          name: "Full Stack",
          icon: "fa-code",
          link: "web",
          summary: [
            "ReactJS, Vue, Nuxt",
            "Node, Express, MongoDB",
            "Responsive Design"
          ]
        },
        backEnd: {
          name: "Linux",
          icon: "fa-cogs",
          link: "linux",
          summary: [
            "Python, PHP, JS, C",
            "Apache, Express, Nginx",
            "Icecast2, GCP, Netlify"
          ]
        },
        web3: {
          name: "Web3",
          icon: "fa-database",
          link: "web3",
          summary: [
            "On-Chain Genrative Art NFTS",
            "Solidity, HardHat, Truffle",
            "ArtBlocks, TinyBoxes, Solids"
          ]
        },
      }
    };
  }
};
</script>

<style lang="sass">
.software
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .software-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column
</style>
