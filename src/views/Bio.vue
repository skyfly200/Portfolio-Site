<template lang="pug">
.bio
  v-fab(to="/" flat location="top start" app).home-btn Back

  .v-container
    .v-row(sm=12)
      h1.ma-2 Bio
    .v-row
      .v-col(sm="6")
        .bio-info
          v-timeline(:dense="width < 650")
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2000") }}
              v-card
                v-card-title Playing Flash Games on my Moms iMac
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2001") }}
              v-card
                v-card-title Got my first computer in 1st grade
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2002") }}
              v-card
                v-card-title Got my first camera
                v-cart-text A smol polaroid
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2005") }}
              v-card
                v-card-title Edited my first video in 5th grade for a school project
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2006") }}
              v-card
                v-card-title Started learning Guitar
                v-card-text (add a youtube Video)
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2007") }}
              v-card
                v-card-title Started actionscript programming in 6th grade
                v-card-text Inspired by flash animators on YouTube
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2007") }}
              v-card
                v-card-title Started web design in 7th grade
                v-card-text Tinkernut video
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2009") }}
              v-card
                v-card-title Started learning electronics in 9th grade
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2010") }}
              v-card
                v-card-title Started DJing on Way High Radio
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2012") }}
              v-card
                v-card-title Studio Audio Engineering
                v-card-text Kodiak Lake Sessions 2012?
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2013") }}
              v-card
                v-card-title Revived Way High Radio
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2014") }}
              v-card
                v-card-title Began my journey of 3D Printing
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2015") }}
              v-card
                v-card-title Took Videography and VFX classes at Community College
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2015") }}
              v-card
                v-card-title Mushroom Foraging
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2016") }}
              v-card
                v-card-title Helped Found the Colorado Community Radio Network
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2018") }}
              v-card
                v-card-title First Try at Mushroom Cultivation
                v-card-text img of some cordyceps I grew
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2018") }}
              v-card
                v-card-title WIFI and networks with Nedernet
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2018") }}
              v-card
                v-card-title Stage Managed for Frozen Dead Guy Days
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2018") }}
              v-card
                v-card-title Video Production at Stream Learn
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2020") }}
              v-card
                v-card-title Competed in ETH Denver's Hackathon
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2021") }}
              v-card
                v-card-title Built and Launched TinyBoxes NFT
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2021") }}
              v-card
                v-card-title Worked on Smart Contracts for ArtBlocks NFT Platform
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2022") }}
              v-card
                v-card-title Helped Build SOLIDS NFT
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2023") }}
              v-card
                v-card-title Caustics Generative Art Code
            v-timeline-item
              span(slot="opposite") {{ formatDatetime("2024") }}
              v-card
                v-card-title LED Art Design
</template>

<script>
import moment from "moment";

export default {
  name: "bio",
  data: () => ({
    width: 0,
  }),
  mounted() {
    this.onResize();
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
