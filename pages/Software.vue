<template lang="pug">
.software.skill

  v-btn(href="/" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Home

  .page-header(data-aos="fade-down")
    .header-eyebrow Technical Skills
    h1.header-title Software
    p.header-sub Full-stack development, Linux infrastructure, and Web3 — from frontend to blockchain.

  v-divider.my-4

  .topics-container
    .topics#topics
      Topic(v-for="topic in topics" v-bind="topic" v-bind:key="topic.name"
        data-aos="fade" data-aos-delay="200" data-aos-offset="120")
</template>

<script>
import Topic from "../components/Topic.vue";

export default {
  name: "software",
  components: { Topic },
  data: () => ({
    topics: {
      frontEnd: { name: "Full Stack", icon: "fa-code",     link: "web",   summary: ["ReactJS, Vue, Nuxt", "Express, SQL, MongoDB", "Responsive Design"] },
      backEnd:  { name: "Linux",      icon: "fa-cogs",     link: "linux", summary: ["Python, PHP, JS, C", "Apache, Express, Nginx", "Icecast2, GCP, Netlify"] },
      web3:     { name: "Web3",       icon: "fa-database", link: "web3",  summary: ["Ethereum, Polygon, IPFS", "Solidity, HardHat, Truffle", "ArtBlocks, TinyBoxes"] },
    },
  }),
};
</script>

<style lang="sass">
.software
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

  h1
    color: white

  .topic-list
    color: #fff !important
</style>