<template lang="pug">
.multimedia.skill
  v-fab(to="/" flat location="top start" app).home-btn Home
  .topics-container
    .topics-list
      .topics-header(data-aos="fade" data-aos-offset="120")
        h1 Multimedia

      .topics#topics
        Topic(v-for="topic in topics" v-bind="topic" v-bind:key="topic.name"
          data-aos="fade" data-aos-delay="200" data-aos-offset="120")
</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";
import Topic from "../components/Topic.vue";

export default {
  name: "multimedia",
  components: {
    GitHubBtn,
    Topic
  },
  data: () => {
    return {
      topics: {
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
        gen_art: {
          name: "Generative Art",
          icon: "fa-paint-brush",
          link: "gen-art",
          summary: [
            "On-Chain Generative Art NFTs",
            "Generative 3D Design",
            "Python, SVG, Three.js, WebGL"
          ]
        },
      }
    };
  }
};
</script>

<style lang="sass">
.multimedia
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .multimedia-info
    text-align: center
    margin: auto
    padding: 10px

  h1
    color: white

  @media (max-width: 940px)
    flex-direction: column
  
  .home-btn
    a
      color: white
</style>
