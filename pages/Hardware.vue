<template lang="pug">
.hardware.skill
  v-fab(href="/#skills" flat location="top start" app).home-btn Home
  .projects-timeline
    .header
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
        date: new Date("Nov 28, 2023"),
        title: "Air Quality Monitor",
        text: "A unit of sensors to monitor air quality",
        img: "/images/hardware/air-quality-monitor.jpg"
      },
      {
        date: new Date("Oct 7, 2020"),
        title: "Led Lily Pyramid Base",
        text: "A base to house the LED Lily Controller and battery",
        img: "/images/hardware/pyramid-board.jpeg"
      },
      {
        date: new Date("October 26, 2019"),
        title: "Touch n' Glow",
        text: "A PCB with touch pads and a 3.5 mm port to connect RGB LEDs",
        img: "/images/hardware/touchnglow.jpg"
      },
      {
        date: new Date("Oct 18, 2019"),
        title: "Hexy Pix PCB",
        text: "A breakout board for 5050 Addressable LEDs",
        img: "/images/hardware/hexypix.jpg"
      },
      {
        date: new Date("August 26, 2019"),
        title: "Ill'uminator PCB",
        text: "A basic RGB LED strip controller with some sweet PCB art on the back",
        img: "/images/hardware/illuminator.jpg"
      },
      {
        date: new Date("July, 2019"),
        title: "PTC2399 Delay IC",
        text: "Old School Bucket Brigade Delay modeled IC, in an echo circuit",
        img: ""
      },
      {
        date: new Date("March 15, 2019"),
        title: "ArtNet LED Strip Controller",
        text: "ArtNet Ws2812b Strip controller, with ESP32 Thing from Sparkfun",
        img: ""
      },
      {
        date: new Date("November 1, 2018"),
        title: "Sparky - 150W FM TX",
        text: "A 150W stereo FM transmitter, with laser cut plates",
        img: "/images/hardware/sparky.jpg"
      },
      {
        date: new Date("March, 8 2018"),
        title: "ESP32 LED Controller",
        text: "Addressable LED fixture contorller, with ESP32 Thing from Sparkfun running off a battery",
        img: "/images/hardware/esp-pack.jpg"
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

  .topic-list
    color: #fff

</style>
