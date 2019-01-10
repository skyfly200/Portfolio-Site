<template lang="pug">
  v-card.data.skill
    .data-info
      .projects-list
        h2 Data
        ul
          li
            a(href="" target="_blank") Water System Mapping for the Town of Ward
          li
            p Tuning an aftermarket Air to Fuel system on a Porshe 911

</template>

<script>
import GitHubBtn from "@/components/GitHubBtn.vue";

export default {
  name: "datas",
  components: {
    GitHubBtn
  }
};
</script>

<style lang="sass">
  .data
    display: flex
    justify-content: center
    width: 100%
    color: white
    padding: 2em
    .data-info
      text-align: center
      margin: auto
      padding: 10px

    .hardware-img
      float: right
      margin: 0px auto
      img
        max-height: 80vh
        max-width: 60vw
    @media (max-width: 940px)
      flex-direction: column
</style>
