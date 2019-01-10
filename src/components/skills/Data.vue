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

    .hardware-img
      img(src="/images/hardware/HW-p1.jpg" alt="Arduino music reactive lights")

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
  .hardware
    display: flex
    justify-content: center
    width: 100%
    color: white
    padding: 2em
    .hardware-info
      text-align: center
      margin: auto

    .hardware-img
      float: right
      margin: 0px auto
      img
        max-height: 80vh
        max-width: 60vw
    @media (max-width: 940px)
      flex-direction: column
</style>
