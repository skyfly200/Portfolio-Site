<template lang="pug">
.bio
  v-fab(to="/" flat location="top start" app).home-btn Back

  .v-container
    .v-row(sm=12)
      h1.ma-2 Bio
    .v-row
      .v-col(sm=12)
        v-timeline.bio-info(:density="width < 650 ? 'compact' : 'default'" align="start")
          v-timeline-item(v-for="entry in timelineEntries" :key="entry.title")
            span(slot="opposite") {{ formatDatetime(entry.date) }}
            v-card(max-width="45vw")
              v-card-title {{ entry.title }}
              v-card-text(v-if="entry.text") {{ entry.text }}
              img.image(:src="entry.image" v-if="entry.image" width="100%")
              iframe.video-player(v-if="entry.video" width="100%" style="aspect-ratio: 16 / 9" :src="entry.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
import moment from "moment";

export default {
  name: "bio",
  data: () => ({
    width: 0,
    timelineEntries: [
      { date: "1995", title: "Born in Ward, CO", text: "Born in a cabin with no runing water or electricity" },
      { date: "2000", title: "Playing Flash Games" },
      { date: "2001", title: "Got my first computer in 1st grade", text: "My best friends Dad gifted me my first computer. A desktop PC running Windows 95 built from spare parts." },
      { date: "2002", title: "Got my first camera", text: "A small polaroid", image: "/images/izone.webp" },
      { date: "2005", title: "Edited my first video in 5th grade for a school project" },
      { date: "2006", title: "Started learning Guitar", text: "(add a YouTube Video)" },
      { date: "2007", title: "Started ActionScript programming in 6th grade", text: "Inspired by flash animators on YouTube" },
      { date: "2007", title: "Started web design in 7th grade", text: "Thanks to this Tinkernut video", video: "https://www.youtube.com/embed/6Ct6emxVR9w?si=s0KuCt5yFSyFKcJl" },
      { date: "2009", title: "Started learning electronics in 9th grade" },
      { date: "2010", title: "Started DJing on Way High Radio" },
      { date: "2012", title: "Studio Audio Engineering", text: "Kodiak Lake Sessions 2012?" },
      { date: "2013", title: "Revived Way High Radio" },
      { date: "2014", title: "Began my journey of 3D Printing" },
      { date: "2015", title: "Took Videography and VFX classes at Community College" },
      { date: "2015", title: "Mushroom Foraging" },
      { date: "2016", title: "Helped Found the Colorado Community Radio Network" },
      { date: "2018", title: "First Try at Mushroom Cultivation", text: "img of some cordyceps I grew" },
      { date: "2018", title: "WIFI and networks with Nedernet" },
      { date: "2018", title: "Stage Managed for Frozen Dead Guy Days" },
      { date: "2018", title: "Video Production at Stream Learn" },
      { date: "2020", title: "Competed in ETH Denver's Hackathon" },
      { date: "2021", title: "Built and Launched TinyBoxes NFT" },
      { date: "2021", title: "Worked on Smart Contracts for ArtBlocks NFT Platform" },
      { date: "2022", title: "Helped Build SOLIDS NFT" },
      { date: "2023", title: "Caustics Generative Art Code" },
      { date: "2024", title: "LED Art Design" }
    ]
  }),
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
    },
    formatDatetime(datetime) {
      return moment(datetime).format("MMM YYYY");
    }
  }
};
</script>

<style lang="sass">
.bio
  text-align: center
  color: white
  &.topic-expanded
    display: flex
    align-items: center
  .bio-info
    padding: 10px 25px
    width: auto
    margin: auto
    p
      font-size: 1.2em
  .v-container
    width: 100% !important
    max-width: 100% !important
  @media (max-width: 1050px)
    flex-direction: column
    .video-info
      width: 100%
  @media (max-width: 800px)
    padding: 0px
    .video-player
      iframe
        width: 480px
        height: 360px

  .home-btn
    a
      color: white

</style>
