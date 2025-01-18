<template lang="pug">
.skills#skills
  .topics-container
    .topics-list
      .topics-header(data-aos="fade" data-aos-offset="120")
        .topics-heading
          h1 Explore my diverse range of skills
        .topics-hint
          h3 Select&nbsp;a&nbsp;topic to&nbsp;find&nbsp;out&nbsp;more!

      .topics#topics
        Topic(v-for="topic in topics" v-bind="topic" v-bind:key="topic.name"
          data-aos="fade" data-aos-delay="200" data-aos-offset="120")

</template>

<script>
import Topic from "../components/Topic.vue";

export default {
  name: "skills",
  components: {
    Topic
  },
  data: () => {
    return {
      topics: {
        frontEnd: {
          name: "Software",
          icon: "fa-code",
          link: "software",
          summary: [
            "Full Stack Web Development",
            "On-Chain Generative Art NFTS",
            "Servers, Scripting, Open-Source"
          ]
        },
        hardware: {
          name: "Hardware",
          icon: "fa-bolt",
          link: "hardware",
          summary: [
            "Sensing, Control, Automation, Networks",
            "Arduino, RaspberryPi, Atmel, Espresif",
            "LEDs, Solar, Circuit Boards, RF, Audio"
          ]
        },
        audio: {
          name: "Multimedia",
          icon: "fa-camera",
          link: "multimedia",
          summary: [
            "Photo, Video, Audio, 3D Design",
            "3D Printing, Prototyping, Invention",
            "Design for Web, Print and Fabrication"
          ]
        },
      }
    };
  }
};
</script>

<style lang="sass">
.topics-container
  width: 100%
  min-height: 60vh
  @include card-depth(2)

  .topics-header
    color: $grey-0
    width: 100%
    padding: 30px 20px
    text-align: center
    .topics-heading
      color: black
      display: flex
      justify-content: center
      flex-wrap: wrap
      h1
        margin: 0.5vh
        @media (max-width: 400px)
          font-size: 2em
        @media (max-width: 320px)
          font-size: 1.8em
    .topics-hint h3
      @media (max-width: 450px)
        font-size: 1.4em
      @media (max-width: 360px)
        font-size: 1.2em

  .topics
    padding: 0px
    padding-bottom: 40px
    display: flex
    flex-wrap: wrap
    justify-content: start
    align-items: stretch

    .github-button button
      display: flex
      align-items: baseline
      min-width: 240px
      .fa
        float: left
      .label
        font-size: 1.4em
        line-height: 50%
        vertical-align: middle

.topic-feature
  width: 100%
  min-height: 100vh
  padding: 20px
  padding-top: 0px
  color: #FFF
  background-color: $grey-0
  .topics-header
    display: none
  .topic-close
    margin-left: -10px

</style>
