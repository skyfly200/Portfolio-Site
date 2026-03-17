<template lang="pug">
._3d.skill

  v-btn(href="/multimedia" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Multimedia

  .page-header(data-aos="fade-down")
    .header-eyebrow Multimedia
    h1.header-title 3D Design & Printing
    p.header-sub Exploring new dimensions of possibility — from digital models to physical reality.

  v-divider.my-6

  .content-wrap
    v-row(align="start")
      v-col(cols="12" md="6")
        v-card.info-card.mb-4
          v-card-title.card-title About
          v-card-text.card-body 3D modeling is one of the most powerful tools available to innovators today. 3D printing brings this digital realm into the physical world — rapidly distilling new ideas into reality to help realize a better future.

        v-card.info-card.mb-4
          v-card-title.card-title Software Proficiencies
          v-card-text
            .chip-row
              v-chip(v-for="s in software" :key="s" variant="tonal" color="primary" class="mr-2 mb-2") {{ s }}

        v-card.info-card
          v-card-title.card-title Explore My Designs
          v-card-text.card-body Browse my printable models on Printables.com
          v-card-actions
            v-btn(color="primary" variant="elevated" href="https://www.printables.com/@SkyFly_136025/models" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | Printables

      v-col(cols="12" md="6")
        v-img(src="/images/hardware/flower-pot.jpg" alt="3D Printed Flower Pot" cover rounded="lg" max-height="500")
</template>

<script>
export default {
  name: "Design3D",
  data: () => ({
    software: [
      "Blender", "Fusion 360", "Maya", "SketchUp", "OpenSCAD", "Tinkercad", "ZBrush",
      "Meshmixer","Unity 3D","Three.js", "Illustrator", "Inkscape",
      "Orca Slicer","PrusaSlicer","BambuStudio","Cura","Simplify3D"
    ],
  }),
};
</script>

<style lang="sass">
._3d
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

  .content-wrap
    max-width: 1100px
    margin: 0 auto
    padding: 0 24px

  .info-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.1rem

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.95rem
    line-height: 1.8
    opacity: 0.85

  .chip-row
    display: flex
    flex-wrap: wrap
</style>