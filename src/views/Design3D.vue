<template lang="pug">
._3d.skill
  v-toolbar(app)
    v-toolbar-title
      v-btn(to="/" flat) Skyler Fly-Wilson
  .info-3d
    h2 Exploring new dimensions of posibility
    p
      | 3D modeling is one of the most powerful tools available to inovators today.
      br
      | Now 3D printing brings this digital realm, with its new forms, into the physical world.
      br
      | Rapidly distiling new ideas into to reality, to help realize a better future.
    h3 Software Proficencies
    p Blender, Fusion360, Maya, Sketch-Up, OpenSCAD
    p Unity-3D, Slic3r, Netfab Basic
    br
    h3 Explore my designs on Printables
    a(href='https://www.printables.com/@SkyFly_136025/models' target="_blank")
      button Printables
</template>

<script>
export default {
  name: "Design3D",
  components: {}
};
</script>

<style lang="sass">
._3d
  padding: 2em
  display: flex
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
    display: flex
    align-items: center
    flex-direction: column
    text-align: center
    width: calc(100% - 400px)
    margin: 5px
    padding: 10px

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
</style>
