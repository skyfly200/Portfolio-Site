<template lang="pug">
  .skills#skills
    .topics-container
      .topics-list(v-if="!feature")
        .topics-header.wow.fadeIn
          .topics-heading
            h1 Explore my diverse range of skills
          .topics-hint
            h3 Select&nbsp;a&nbsp;topic to&nbsp;find&nbsp;out&nbsp;more!

        .topics#topics
          Topic(v-for="topic in topics" v-bind="topic" v-bind:key="topic.hash")

      .topic-feature(v-if="feature")
        .topic-close
          a(href="#skills" v-on:click="clearTopic")
            i.fa.fa-close.fa-2x
        FrontEnd(v-if="feature == 'front-end'")
        BackEnd(v-if="feature == 'back-end'")
        DevOps(v-if="feature == 'dev-ops'")
        Hardware(v-if="feature == 'hardware'")
        Audio(v-if="feature == 'audio'")
        Design3D(v-if="feature == '3d'")
        Video(v-if="feature == 'video'")
        Photo(v-if="feature == 'photo'")

</template>

<script>
import Topic from "@/components/Topic.vue";
import FrontEnd from "@/components/skills/FrontEnd.vue";
import BackEnd from "@/components/skills/BackEnd.vue";
import DevOps from "@/components/skills/DevOps.vue";
import Hardware from "@/components/skills/Hardware.vue";
import Audio from "@/components/skills/Audio.vue";
import Design3D from "@/components/skills/Design3D.vue";
import Video from "@/components/skills/Video.vue";
import Photo from "@/components/skills/Photo.vue";

export default {
  name: "skills",
  components: {
    Topic,
    FrontEnd,
    BackEnd,
    DevOps,
    Hardware,
    Audio,
    Design3D,
    Photo,
    Video
  },
  computed: {
    feature() {
      return this.$store.state.feature;
    }
  },
  methods: {
    clearTopic() {
      this.$store.commit("clearTopic");
    }
  },
  data: () => {
    return {
      topics: {
        frontEnd: {
          name: "Front End",
          icon: "fa-code",
          hash: "front-end",
          summary: [
            "HTML5, CSS3, JS, jQuery",
            "SASS, Jade, Bootstrap",
            "Responsive Design"
          ]
        },
        backEnd: {
          name: "Back End",
          icon: "fa-cogs",
          hash: "back-end",
          summary: [
            "Python, PHP, JS, C",
            "Node, Express, SQL",
            "REST, Data Structures"
          ]
        },
        devOps: {
          name: "Dev Ops",
          icon: "fa-linux",
          hash: "dev-ops",
          summary: [
            "Linux Admin, Terminal Skills",
            "Apache, MySQL, FTP, SSH",
            "Digital Ocean, Lets Encrypt"
          ]
        },
        hardware: {
          name: "Hardware",
          icon: "fa-bolt",
          hash: "hardware",
          summary: [
            "Sensing, Control, Automation",
            "Arduino, RaspberryPi, WiFi, BT",
            "LEDs, Solar, Circuit Boards"
          ]
        },
        audio: {
          name: "Audio",
          icon: "fa-microphone",
          hash: "audio",
          summary: [
            "Live, Tracking, Mixing",
            "FM and Online Broadcasting",
            "Pro Tools, Audition, Ableton"
          ]
        },
        _3d: {
          name: "3D Design",
          icon: "fa-cube",
          hash: "_3d",
          summary: [
            "Art, Design, Invention",
            "Prototyping, Printing",
            "Blender, SketchUp, Maya"
          ]
        },
        photo: {
          name: "Photography",
          icon: "fa-camera",
          hash: "photo",
          summary: [
            "Perspective, Macro, Landscape",
            "Lighting, Lenses, Techniques",
            "Photoshop, Lightroom"
          ]
        },
        video: {
          name: "Videography",
          icon: "fa-film",
          hash: "video",
          summary: [
            "Videography, Audio, Directing",
            "Editing, Effects, Animation",
            "Premiere, After Effects"
          ]
        }
      }
    };
  }
};
</script>

<style lang="sass">
  // Skills Styles
  .topics-container
    width: 100%
    min-height: 100vh
    @include card-depth(2)

    .topics-header
      width: 100%
      padding: 30px 20px
      text-align: center
      .topics-heading
        display: flex
        justify-content: center
        flex-wrap: wrap
        h1
          text-shadow: 0px 4px 15px #000
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

    &.feature-topic
      color: #FFF
      background-color: $grey-0

      .topics-header
        display: none

    .topics
      padding: 0px
      padding-bottom: 30px
      display: flex
      flex-wrap: wrap
      justify-content: start
      align-items: stretch

      .github-button button
        display: flex
        align-items: baseline
        min-width: 240px
        .fa
          float:left
        .label
          font-size: 1.4em
          line-height: 50%
          vertical-align: middle

</style>
