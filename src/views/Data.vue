<template lang="pug">
.data.skill
  v-toolbar(title="Skyler Fly-Wilson")
    v-btn(to="/" flat) Home
  .data-info
    h2 Data
    ul.projects-list
      li
        a(href="https://github.com/skyfly200/mapping-scripts" target="_blank") Water System Mapping for the Town of Ward
      li
        a(href="https://github.com/skyfly200/SwissArmyKnife" target="_blank") 5Ghz WiFi Frequency Plotter

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "datas",
  components: {
    GitHubBtn
  },
  created() {
    let codepen = document.createElement("script");
    codepen.setAttribute("src", "https://static.codepen.io/assets/embed/ei.js");
    document.head.appendChild(codepen);
  }
};
</script>

<style lang="sass">
.data
  display: flex
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  padding: 2em
  .data-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column
</style>
