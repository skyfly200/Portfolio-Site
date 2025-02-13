<template lang="pug">
.software.skill
  v-fab(href="/#skills" flat location="top start" app).home-btn Home
  .topics-container
    .topics-list
      .topics-header(data-aos="fade" data-aos-offset="120")
        .topics-heading
          h1 Software

      .topics#topics
        Topic(v-for="topic in topics" v-bind="topic" v-bind:key="topic.name"
          data-aos="fade" data-aos-delay="200" data-aos-offset="120")

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";
import Topic from "../components/Topic.vue";

export default {
  name: "software",
  components: {
    GitHubBtn,
    Topic
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
            "Express, SQL, MongoDB",
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
            "Ethereum, Polygon, IPFS",
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
  
  h1
    color: white

  .home-btn
    a
      color: white
  .topic-list
    color: #fff !important

</style>
