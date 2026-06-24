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

  v-divider.my-8

  .content-wrap
    .section-title Live Sound Engineering

    v-row
      v-col(v-for="gig in gigs" :key="gig.title" cols="12" sm="6" lg="4")
        v-card.gig-card
          v-img(v-if="gig.img" :src="gig.img" cover height="180")
          .gig-placeholder(v-else)
          v-card-title.card-title {{ gig.title }}
          v-card-subtitle.card-sub {{ gig.role }}
          v-card-text
            p.card-body {{ gig.description }}
</template>

<script>
import Topic from "../components/Topic.vue";

export default {
  name: "multimedia",
  components: { Topic },
  data: () => ({
    gigs: [
      { title: "Shine", role: "Live Sound Engineer", description: "Live sound engineering at this beloved Boulder venue.", img: "" },
      { title: "The Laughing Goat", role: "Live Sound Engineer", description: "Live sound at The Laughing Goat, Boulder.", img: "" },
      { title: "The Caribou Room", role: "Live Sound Engineer", description: "Live sound at this Nederland mountain music venue.", img: "" },
      { title: "Frozen Dead Guy Days 2017", role: "Stage Manager", description: "Stage management at Nederland's iconic annual festival.", img: "" },
      { title: "Frozen Dead Guy Days 2018", role: "Stage Manager", description: "Stage management at Nederland's iconic annual festival.", img: "" },
      { title: "Way High Radio Benefit — Halloween", role: "Live Sound Engineer", description: "Live sound for the Way High Radio Halloween benefit show.", img: "" },
      { title: "Microcosm", role: "Live Sound Engineer", description: "Live sound for the Microcosm event.", img: "" },
    ],
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

  .content-wrap
    max-width: 1100px
    margin: 0 auto
    padding: 0 24px

  .section-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.4rem
    margin-bottom: 16px
    color: white

  .gig-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important
    overflow: hidden
    height: 100%

  .gig-placeholder
    height: 180px
    background: linear-gradient(135deg, rgba(118,39,208,0.3), rgba(30,10,60,0.6))

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.05rem
    color: white

  .card-sub
    font-family: 'Raleway', sans-serif
    opacity: 0.6
    color: white !important

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.88rem
    line-height: 1.7
    opacity: 0.8
</style>