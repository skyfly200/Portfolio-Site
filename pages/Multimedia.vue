<template lang="pug">
.multimedia.skill

  v-btn(href="/" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Home

  .page-header(data-aos="fade-down")
    .header-eyebrow Creative Skills
    h1.header-title Multimedia
    p.header-sub Audio, photography, videography, 3D design, lighting, and generative art.

  v-divider.my-4

  .topics-container
    .topics#topics
      Topic(v-for="topic in topics" v-bind="topic" v-bind:key="topic.name"
        data-aos="fade" data-aos-delay="200" data-aos-offset="120")

</template>

<script>
import Topic from "../components/Topic.vue";

export default {
  name: "multimedia",
  components: { Topic },
  data: () => ({
    topics: {
      audio:    { name: "Audio",          icon: "fa-microphone", link: "audioeng",   summary: ["Live, Tracking, Mixing", "FM and Online Broadcasting", "Pro Tools, Audition, Ableton"] },
      photo:    { name: "Photography",    icon: "fa-camera",     link: "photos",  summary: ["Perspective, Macro, Landscape", "Lighting, Lenses, Techniques", "Photoshop, Lightroom"] },
      video:    { name: "Videography",    icon: "fa-film",       link: "videography",  summary: ["Videography, Audio, Directing", "Editing, Effects, Animation", "Premiere, After Effects"] },
      _3d:      { name: "3D Design",      icon: "fa-cube",       link: "design3d",     summary: ["Art, Design, Invention", "Prototyping, Printing", "Blender, SketchUp, Maya"] },
      lighting: { name: "Lighting Design",icon: "fa-lightbulb",  link: "lighting",summary: ["MadMapper, Resolume, AfterEffects", "ArtNet, DMX, BT and WiFi (WLED)", "Addressable LEDs, Projection Mapping"] },
      gen_art:  { name: "Generative Art", icon: "fa-paint-brush",link: "genart", summary: ["On-Chain Generative Art NFTs", "Generative 3D Design", "Python, SVG, Three.js, WebGL"] },
    },
  }),
};
</script>

<style lang="sass">
.multimedia
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