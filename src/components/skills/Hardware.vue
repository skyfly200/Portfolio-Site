<template lang="pug">
  v-card.hardware.skill
    .hardware-info
      .projects-list
        h2 Hardware Projects Firmware
        ul
          li
            a(href="//github.com/skyfly200/MusicReactiveNeopixels" target="_blank") Music Reactive LED Strip
          li
            a(href="//github.com/skyfly200/DMX-LED-Light" target="_blank") DMX LED Light
          li
            a(href="//github.com/skyfly200/SP0256_AL2" target="_blank") Old TTS Chip Arduino Sketch
          li
            a(href="//github.com/skyfly200/HalloweenCostume2014" target="_blank") HalloweenCostume2014

        .github-button
          a(href="//github.com/skyfly200" target="_blank")
            button
              svg.fab.fa-github.fa-2x
              .label &nbsp;More on GitHub



    .hardware-img
      img(src="/images/hardware/HW-p1.jpg" alt="Arduino music reactive lights")

</template>

<script>
export default {
  name: "hardware",
  components: {}
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
      .github-button
        display: flex
        justify-content: center

    .hardware-img
      float: right
      margin: 0px auto
      img
        max-height: 80vh
        max-width: 60vw
    @media (max-width: 940px)
      flex-direction: column
</style>
