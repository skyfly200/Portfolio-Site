<template lang="pug">
.hardware.skill
  v-toolbar(app)
      v-toolbar-title
        v-btn(to="/" flat) Skyler Fly-Wilson
  //- (v-resize="onResize")
  .projects-timeline
    h1 Harware Projects
    h3 A history of some hardware projects I have worked on
    v-divider
    v-timeline(:dense="width < 650")
      v-timeline-item(v-for="project in projects" :key="project.title" width="40vw")
        span(slot="opposite") {{ formatDatetime(project.date) }}
        v-card(class="elevation-2").project-card
          v-img(:v-if="!!project.img" :src="project.img" max-height="40vh")
          v-card-title(class="headline") {{ project.title }}
          v-card-text {{ project.text }}
          v-card-actions
            v-btn(v-if="!!project.repo" :href="project.repo" target="_blank") Code
            v-btn(v-if="!!project.link" :href="project.link" target="_blank") Link
</template>

<script>
import moment from "moment";

export default {
  name: "hardware",
  data: () => ({
    width: 0,
    projects: [
      {
        date: new Date("Oct, 20 2019"),
        title: "Touch n Glow PCB",
        text:
          "Touch control pads, WS2812 addressable LED & 3.5mm TRRS connector for more LEDs",
        img: "/images/hardware/TnG.jpg"
      },
      {
        date: new Date("Aug, 25 2019"),
        title: "Ill'uminator PCB",
        text: "RGB LED strip controller",
        img: "/images/hardware/illumin.jpg"
      },
      {
        date: new Date("Aug, 12 2019"),
        title: "Hexy Pix PCB",
        text: "SMD WS2812 LED breakout board",
        img: "/images/hardware/hexy.jpg"
      },
      {
        date: new Date("July, 2019"),
        title: "PTC2399 Delay IC",
        text: "Old School Bucket Brigade Delay modeled IC, in an echo circuit",
        img: ""
      },
      {
        date: new Date("October, 27 2018"),
        title: "Animated LED Tower of Power",
        text:
          "Animated WS2812 LEDs behind a laser cut acrylic outline of a radio tower",
        img: "/images/hardware/tower.jpg"
      },
      {
        date: new Date("March, 3 2018"),
        title: "LED Lily",
        text: "Origami Flower LED fixture",
        img: "/images/hardware/origami-lily.jpg"
      },
      {
        date: new Date("March, 2 2018"),
        title: "Modular IOT LED Controler",
        text:
          "ESP32 Wi-Fi/BT LED controller, connects to light fixtures via TRS jack",
        img: "/images/hardware/esp32-pack.jpg"
      },
      {
        date: new Date("Dec, 25 2017"),
        title: "LED Origami Rose",
        text:
          "Origami Rose with embeded Addresable LEDs, selectable animation modes and micro USB recharging",
        img: "/images/hardware/LED-Rose.jpg"
      },
      {
        date: new Date("Oct, 27 2017"),
        title: "Chasing EL Wire Vest",
        text:
          "Chasing EL wire vest, with Addressable LED belt pack. RJ45 expansion port for LEDs, buttons and sensors.",
        img: "",
        repo: "https://github.com/skyfly200/EL-Vest"
      },
      {
        date: new Date("Jan, 29 2017"),
        title: "TMP/RH PID Controller",
        text:
          "Arduino PID controller for temperature and humidity, with LCD. Plus light level sensor.",
        img: "/images/hardware/PID.jpg"
      },
      {
        date: new Date("Aug, 26 2016"),
        title: "DMX LED Light",
        text: "2 DMX channels control LED brighness and servo position",
        img: "/images/hardware/DMX.jpg",
        repo: "//github.com/skyfly200/DMX-LED-Light"
      },
      {
        date: new Date("Sep, 3 2016"),
        title: "Music Reactive Neopixel Strip",
        text: "Audio reactive addressable RGB LED strip with arduino",
        img: "",
        repo: "//github.com/skyfly200/MusicReactiveNeopixels"
      },
      {
        date: new Date("January, 16 2016"),
        title: "Music Reactive LED Strip",
        text: "Audio reactive RGB LED strip with arduino",
        img: "",
        repo: "https://github.com/skyfly200/MusicReactiveRGBStrip"
      },
      {
        date: new Date("October, 2014"),
        title: "Halloween Costume 2014",
        text: "Origami Flower with Addresable LEDs power from a Li-Po Battery",
        img: ""
      },
      {
        date: new Date("Mar, 8 2014"),
        title: "80's Text to Speach Chip",
        text: "Arduino Sketch for the SP0256A-AL2 IC manufactured in 1981",
        img: "/images/hardware/TTS-IC.jpg",
        repo: "https://github.com/skyfly200/SP0256_AL2"
      },
      {
        date: new Date("May, 2 2013"),
        title: "Audio Spectrum Visualizer",
        text:
          "7 band grphic EQ chip interfaced to Arduino, driving a shift register to PWM LEDs",
        img: "/images/hardware/HW-p1.jpg"
      }
    ]
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
.hardware
  display: flex
  justify-content: center
  width: 100%
  color: white
  padding: 2em
  .projects-timeline
    width: 100%

</style>
