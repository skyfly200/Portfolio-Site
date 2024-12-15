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
          name: "Web",
          icon: "fa-code",
          link: "web",
          summary: [
            "ReactJS, Vue, VanillaJS",
            "SASS, Pug, HTML5, CSS3",
            "Responsive Designs"
          ]
        },
        backEnd: {
          name: "Linux",
          icon: "fa-cogs",
          link: "linux",
          summary: [
            "Python, PHP, JS, C",
            "Apache, Express, Nginx",
            "Icecast2, GCP, DO"
          ]
        },
        hardware: {
          name: "Hardware",
          icon: "fa-bolt",
          link: "hardware",
          summary: [
            "Sensing, Control, Automation",
            "Arduino, RaspberryPi, WiFi, BT",
            "LEDs, Solar, Circuit Boards"
          ]
        },
        audio: {
          name: "Audio",
          icon: "fa-microphone",
          link: "audio",
          summary: [
            "Live, Tracking, Mixing",
            "FM and Online Broadcasting",
            "Pro Tools, Audition, Ableton"
          ]
        },
        _3d: {
          name: "3D Design",
          icon: "fa-cube",
          link: "_3d",
          summary: [
            "Art, Design, Invention",
            "Prototyping, Printing",
            "Blender, SketchUp, Maya"
          ]
        },
        photo: {
          name: "Photography",
          icon: "fa-camera",
          link: "photos",
          summary: [
            "Perspective, Macro, Landscape",
            "Lighting, Lenses, Techniques",
            "Photoshop, Lightroom"
          ]
        },
        video: {
          name: "Videography",
          icon: "fa-film",
          link: "videos",
          summary: [
            "Videography, Audio, Directing",
            "Editing, Effects, Animation",
            "Premiere, After Effects"
          ]
        },
        data: {
          name: "Data",
          icon: "fa-database",
          link: "data",
          summary: [
            "ODK, GIS, Visualization",
            "GPS, Sensors, APIs",
            "CSV, JSON, SQL"
          ]
        }
      }
    };
  }
};
</script>

<style lang="sass">
.topics-container
  width: 100%
  min-height: 100vh
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
