<template lang="pug">
.multimedia.skill
  v-toolbar(title="Skyler Fly-Wilson")
    v-btn(to="/" flat) Home
  .multimedia-info
    h2 Multimedia Projects
    ul.projects-list
      li
        a(href="https://github.com/skyfly200/mapping-scripts" target="_blank") Water System Mapping for the Town of Ward

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "multimedia",
  components: {
    GitHubBtn
  },
  created() {
    let codepen = document.createElement("script");
    codepen.setAttribute("src", "https://static.codepen.io/assets/embed/ei.js");
    document.head.appendChild(codepen);
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

  @media (max-width: 940px)
    flex-direction: column
</style>
