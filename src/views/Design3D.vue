<template lang="pug">
._3d.skill
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  .info-3d
    .description.pa-5
      h2.ma-3 Exploring new dimensions of posibility
      p
        | 3D modeling is one of the most powerful tools available to inovators today.
        br
        | Now 3D printing brings this digital realm, with its new forms, into the physical world.
        br
        | Rapidly distiling new ideas into to reality, to help realize a better future.
    .software-proficencies.pa-5
      h2.ma-3 Software Proficencies
      p Blender, Fusion360, Maya, Sketch-Up, OpenSCAD
      p Unity-3D, Slic3r, Netfab Basic
    .printables-link.pa-5
      h3 Explore my designs on Printables
      v-btn.ma-7(href='https://www.printables.com/@SkyFly_136025/models' target="_blank") Printables
</template>

<script>
export default {
  name: "Design3D",
  components: {}
};
</script>

<style lang="sass">
._3d
  justify-content: center
  color: white
  box-shadow: 2px 5px 5px black
  &.topic-expanded
    display: flex
    align-items: center
  .slider-wrapper
    width: 625px
    height: 652px
    overflow-y: hidden
    li
      display: flex
      align-items: center
      iframe
        width: 625px
        height: 652px
    .flexslider
      margin: 0px
      .slides
        padding: 0
        margin: 0
    @media (max-width: 2000px)
      width: 400px
      height: 468px
      li iframe
        width: 400px
        height: 468px

    @media (max-width: 400px)
      width: 300px
      height: 372px
      li iframe
        width: 300px
        height: 372px
  .info-3d
    width: 100%
    display: flex
    align-items: center
    flex-direction: column
    text-align: center

  @media (max-width: 800px)
    flex-direction: column
    align-items: center
    .info-3d
      padding-bottom: 20px
      width: 100%

    .slider-wrapper
      width: 400px
      height: 468px
      li iframe
        width: 400px
        height: 468px

  .home-btn
    a
      color: white

</style>
