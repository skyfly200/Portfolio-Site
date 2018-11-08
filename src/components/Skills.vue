<template lang="pug">
  #skills
    .topics-container
      .topics-list(v-if="!feature.state")
        .topics-header.wow.fadeIn
          .topics-heading
            h1 Explore my diverse range of skills
          .topics-hint
            h3 Select&nbsp;a&nbsp;topic to&nbsp;find&nbsp;out&nbsp;more!

        .topics#topics
          Topic(v-for="topic in topics" v-bind="topic")

      .topic-feature(v-if="feature.state")
        Empty(v-if="feature.topic == ''")
        FrontEnd(v-if="feature.topic == 'front-end'")
        BackEnd(v-if="feature.topic == 'back-end'")
        DevOps(v-if="feature.topic == 'dev-ops'")
        Hardware(v-if="feature.topic == 'hardware'")
        Audio(v-if="feature.topic == 'audio'")
        Design3D(v-if="feature.topic == '3d'")
        Video(v-if="feature.topic == 'video'")
        Photo(v-if="feature.topic == 'photo'")

</template>

<script>
import Topic from "@/components/Topic.vue";
import Empty from "@/components/skills/EmptyComp.vue";
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
    Empty,
    FrontEnd,
    BackEnd,
    DevOps,
    Hardware,
    Audio,
    Design3D,
    Photo,
    Video
  },
  data: () => {
    return {
      feature: {
        state: false,
        topic: null
      },
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

    .topics
      padding: 0px
      padding-bottom: 30px
      display: flex
      flex-wrap: wrap
      justify-content: start
      align-items: stretch

    .topic
      padding: 10px 10px
      margin: 0px
      height: auto
      min-height: 250px
      max-width: 25%
      flex-basis: 25%
      animation: 500ms ease-in-out 1 fadeIn
      transition: all 200ms

      .icon-box
        @extend .flex-box-center
        color: $grey-0
        .topic-icon
          padding: 0px
          text-shadow: 2px 5px 15px rgba(0,0,0,1)
          transition: text-shadow 2s

      .fa-inverse
        color: $color-primary-1
        text-shadow: none
        text-shadow: 0px 0px 1px rgba(255,255,255,0.75)

      .topic-title
        text-align: center
        text-shadow: 0px 2px 5px rgba(0,0,0,0.75)

      .topic-short
        text-align: center
        font-size: 135%

      .topic-close
        display: none
        float: right
        position: relative
        top: -9.5vh
        right: 3vh
        a
          color: #FFF
        @media (max-width: 320px)
          top: -12vh
          right: 1vh

      .topic-full
        width: 100%
        display: none
        padding: 20px
        padding-top: 0px

      @media (hover:hover)
        &:hover
          background-color: $grey-0
          color: #FFF
          .topic-icon
            color: $color-primary-4

            .fa-inverse
              color: #FFF
              text-shadow: 0px 0px 5px rgba(255,255,255,0.75)

      @media (max-width: 1124px)
        max-width: 50%
        flex: 50%

      @media (max-width: 570px)
        max-width: 100%
        flex: 100%

      &.topic-expanded
        order: -1
        flex: 100%
        max-width: 100%
        //min-height: 100vh
        color: #FFF
        background-color: $grey-0
        padding: 0px
        .icon-box
          float: left
          z-index: 21
        .topic-icon
          color: $color-primary-4
          .fa-inverse
            color: #FFF
            text-shadow: 0px 0px 5px rgba(255,255,255,0.75)
        .topic-title
          text-align: left
          position: relative
          padding: 0px
          margin: 0px
          top: 5px
          left: 20px
          @media (max-width: 400px)
            h2
              font-size: 1.8em
          @media (max-width: 350px)
            h2
              font-size: 1.5em
        .topic-short
          display: none
        .topic-close
          display: block
          margin-top: 10px
        .topic-full
          display: flex
          justify-content: center

    &.feature-topic
      color: #FFF
      background-color: $grey-0

      .topics-header
        display: none

  // Topic Specific Styles
  .topics-container
    .topics
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

      #back-end .topic-full
        background: rgba(255,255,255,0.75)
        color: #000
        .skills-list
          margin: 0px auto
        .projects-list
          margin: 0px auto

      #front-end .topic-full
        align-items: center
        flex-direction: column
        text-align: center
        .logos
          display: flex
          justify-content: center
          align-items: center
        .logo
          width: 15%
          height: 15%
        .responsive-pics
          display: flex
          justify-content: center
          align-items: center
          .mobile-pic
            width: 18%
            height: 18%
          .desktop-pic
            width: 75%
            height: 75%
          img
            margin: 10px
        .site-pic
          box-shadow: 0px 0px 5px #FFF
        .gulp-pics
          display: flex
          justify-content: center
          .mobile-pic
            width: auto
            height: 440px
          .desktop-pic
            width: auto
            height: 440px
          img
            margin: 10px
          .gulp-code-pic
            width: 30%
            height: 30%
          .gulp-logo
            height: 15%
          .gulp-tasks-pic
            width: 30%
            height: 30%
        .github-button
          display: flex
          justify-content: center
          button
            min-width: 355px
            font-size: 2em
            align-items: center

      #dev-ops .topic-full
        color: #000
        background: rgba(255,255,255,0.75)
        .skills-list
          margin: 0px auto
          li
            font-size: 1.2em
        .projects-list
          margin: 0px auto
          padding: 0px 10px
          li
            font-size: 1.2em
          .github-button button
            min-width: 292px

      #hardware .topic-full
        width: 100%
        background: rgba(255,255,255,0.75)
        color: #000
        padding: 20px
        .hardware-info
          text-align: center
          margin: auto
          .github-button
            display: flex
            justify-content: center

        .hardware-img
          float: right
          margin: 0px auto
          img
            max-height: 80vh
            max-width: 60vw

      #video .topic-full
        text-align: center
        color: black
        background: rgba(255,255,255,0.75)
        box-shadow: 2px 5px 5px black
        padding: 10px
        &.topic-expanded
          display: flex
          align-items: center
        .video-info
          padding: 10px 25px
          width: auto
          margin: auto
        .video-player
          iframe
            width: 720px
            height: 480px

      #audio .topic-full
        text-align: center
        color: #000
        background: rgba(255,255,255,0.75)
        &.topic-expanded
          display: flex
          align-items: center
        .audio-info
          width: 60%
          margin: 10px
          text-align: center
          margin: auto
          h1
            margin-top: 0px

        .archives
          display: flex
          flex-direction: column
          align-items: center
          width: 40%
          min-width: 320px
          .archive-player
            padding: 10px 20px
            width: 100%
            h3
              margin: 5px


      #_3d .topic-full
        color: black
        background: rgba(255,255,255,0.75)
        box-shadow: 2px 5px 5px black
        &.topic-expanded
          display: flex
          align-items: center
        .slider-wrapper
          width: 625px
          height: 652px
          overflow-y: hidden
          li
            display: flex
            align-items: center
            iframe
              width: 625px
              height: 652px
          .flexslider
            margin: 0px
        .info-3d
          display: flex
          align-items: center
          flex-direction: column
          text-align: center
          width: calc(100% - 400px)
          margin: 5px
          padding: 10px

      #photo .topic-full
        text-align: center
        &.topic-expanded
          display: flex
          align-items: center
        .gallery
          .slides
            button
              color: #000
          .slide
            display: none
            img
              max-width: 100%
              max-height: 95vh

      // responsive styles
      @media (max-width: 2000px)
        #_3d .topic-full .slider-wrapper
          width: 400px
          height: 468px
          li iframe
            width: 400px
            height: 468px

      @media (max-width: 1050px)
        #video .topic-full
          flex-direction: column
          .video-info
            width: 100%

      @media (max-width: 940px)
        #hardware .topic-full
          flex-direction: column

      @media (max-width: 800px)
        #photo, #video
          .topic-full
            padding: 0px
            .video-player
              iframe
                width: 480px
                height: 360px

        #audio .topic-full
          flex-direction: column
          .audio-info
            width: 100%
            padding: 20px 0px
          .archives
            width: 100%
            .archive-player
              width: 80%

        #_3d .topic-full
          flex-direction: column
          align-items: center
          .info-3d
            padding-bottom: 20px
            width: 100%

          .slider-wrapper
            width: 400px
            height: 468px
            li iframe
              width: 400px
              height: 468px

        #front-end .topic-full
          .site-images a img
            width: 100%

      @media (max-width: 660px)
        #back-end .topic-full
          flex-direction: column

        #dev-ops .topic-full
          flex-direction: column
          .projects-list .github-button button
            min-width: 200px
            font-size: 1.2em

      @media (max-width: 520px)
        #audio .topic-full .archives
          width: calc(100vw - 40px)
          .archive-player
            width: calc(95vw - 40px)

      @media (max-width: 400px)
        #_3d .topic-full .slider-wrapper
          width: 300px
          height: 372px
          li iframe
            width: 300px
            height: 372px

      @media (max-width: 380px)
        #audio .topic-full .archives
          align-items: center
          .archive-player
            border-radius: 0px
            padding: 0px
            width: 100%

        #front-end .topic-full .github-button button
          min-width: 240px
          font-size: 1.3em

        .github-button button
          min-width: 200px
          font-size: 0.8em

        #dev-ops .topic-full .projects-list .github-button button
          //font-size: 0.8em


</style>
