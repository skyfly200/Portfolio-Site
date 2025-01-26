<template lang="pug">
.lighting.skill
  v-fab(to="/multimedia" flat location="top start" app).home-btn Back
  .projects-timeline
    .header
      h1 Lighting Design
      h3 A history of some lighting projects I have worked on
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
  name: "lighting",
  data: () => ({
    width: 0,
    projects: [
      {
        date: new Date("Jan, 10 2025"),
        title: "Phi Cylinder Lamp",
        text:
          "A lamp designed with the golden ratio in mind, using Python and Blender",
        img: "/images/hardware/phi-lamp.jpg"
      },
      {
        date: new Date("Oct, 22 2024"),
        title: "Geometric Shape LED Building Kit",
        text:
          "Diffuser tubes and connectors to build geometric shapes with WS2812 LEDs",
        img: "/images/hardware/tube-cube.jpg"
      },
      {
        date: new Date("Aug, 27 2024"),
        title: "Flower Pot LED Lamp",
        text:
          "A lamp designed to look like a flower pot, with four origami flowers that light up",
        img: "/images/hardware/flower-pot.jpg"
      },
      {
        date: new Date("Wed, 7 2020"),
        title: "Pyramid LED Controller",
        text:
          "A lamp designed with the golden ratio in mind, using Python and Blender",
        img: "/images/hardware/pyramid-board.jpeg"
      },
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
        date: new Date("October, 2014"),
        title: "Halloween Costume 2014",
        text: "Origami Flower with Addresable LEDs power from a Li-Po Battery",
        img: ""
      },
      {
        date: new Date("May, 2 2013"),
        title: "7 Band Music Reativity Circuit",
        text:
          "Using a MSGEQ7 and a shift register to control 7 LEDs representing 7 bands of frequency",
        img: "/images/hardware/msgeq7.JPG",
        repo: ""
      },
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
.lighting
  justify-content: center
  width: 100%
  color: white
  .header
    text-align: center
    margin: auto
    padding: 10px
  .projects-timeline
    width: 100%

  .home-btn
    a
      color: white

</style>
