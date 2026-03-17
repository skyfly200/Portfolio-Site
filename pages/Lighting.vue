<template lang="pug">
.lighting.skill

  v-btn(href="/multimedia" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Multimedia

  .page-header(data-aos="fade-down")
    .header-eyebrow Multimedia
    h1.header-title Lighting Design
    p.header-sub A history of LED art, addressable lighting, PCB design, and wearable light projects.

  v-divider.my-4

  .timeline-container
    v-timeline(:truncate-line="'both'" align="start" :side="isMobile ? 'end' : undefined")
      v-timeline-item(
        v-for="(project, index) in projects"
        :key="project.title"
        dot-color="primary"
        size="small"
        data-aos="fade-left"
        data-aos-offset="80"
      )
        template(#opposite)
          .timeline-date(:class="index % 2 === 0 ? 'date-right' : 'date-left'") {{ formatDatetime(project.date) }}

        v-card.project-card(elevation="3")
          v-img(v-if="project.img" :src="project.img" cover).project-img
          v-card-title.project-title {{ project.title }}
          v-card-text.project-text {{ project.text }}
          v-card-actions(v-if="project.repo || project.link")
            v-btn(v-if="project.repo" variant="outlined" color="primary" :href="project.repo" target="_blank")
              i.fab.fa-github.mr-2
              | Code
            v-btn(v-if="project.link" variant="outlined" color="primary" :href="project.link" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | Link
</template>

<script>
import moment from "moment";

export default {
  name: "lighting",
  data: () => ({
    width: 0,
    projects: [
      { date: new Date("Jan 10, 2025"), title: "Phi Cylinder Lamp", text: "A lamp designed with the golden ratio in mind, using Python and Blender.", img: "/images/hardware/phi-lamp.jpg" },
      { date: new Date("Oct 22, 2024"), title: "Geometric Shape LED Building Kit", text: "Diffuser tubes and connectors to build geometric shapes with WS2812 LEDs.", img: "/images/hardware/tube-cube.jpg" },
      { date: new Date("Aug 27, 2024"), title: "Flower Pot LED Lamp", text: "A lamp designed to look like a flower pot, with four origami flowers that light up.", img: "/images/hardware/flower-pot.jpg" },
      { date: new Date("Oct 7, 2020"), title: "Pyramid LED Controller", text: "Custom PCB for driving origami lily LED fixtures with a LiPo battery and charging circuit.", img: "/images/hardware/pyramid-board.jpeg" },
      { date: new Date("Oct 20, 2019"), title: "Touch n' Glow PCB", text: "Touch control pads, WS2812 addressable LED, and 3.5mm TRRS connector for more LEDs.", img: "/images/hardware/TnG.jpg" },
      { date: new Date("Aug 25, 2019"), title: "Ill'uminator PCB", text: "My first designed and manufactured PCB — RGB LED strip controller with MOSFET-switched channels.", img: "/images/hardware/illuminator.jpg" },
      { date: new Date("Aug 12, 2019"), title: "Hexy Pix PCB", text: "SMD WS2812 LED breakout board in a hexagonal layout.", img: "/images/hardware/hexy.jpg" },
      { date: new Date("Oct 27, 2018"), title: "Animated LED Tower of Power", text: "Animated WS2812 LEDs behind a laser-cut acrylic outline of a radio tower.", img: "" },
      { date: new Date("Mar 3, 2018"), title: "LED Lily Origami Fixture", text: "Origami flower modular LED fixture with embedded addressable LEDs.", img: "/images/hardware/origami-lily.jpg" },
      { date: new Date("Mar 2, 2018"), title: "Modular IoT LED Controller", text: "ESP32 Wi-Fi/BT LED controller connecting to light fixtures via TRS jack.", img: "/images/hardware/esp32-pack.jpg" },
      { date: new Date("Dec 25, 2017"), title: "LED Origami Rose", text: "Origami rose with embedded addressable LEDs, selectable animation modes, and micro-USB recharging.", img: "/images/hardware/LED-Rose.jpg" },
      { date: new Date("Oct 27, 2017"), title: "Chasing EL Wire Vest", text: "Chasing EL wire vest with addressable LED belt pack. RJ45 expansion port for LEDs, buttons, and sensors.", img: "", repo: "https://github.com/skyfly200/EL-Vest" },
      { date: new Date("Oct 1, 2014"), title: "Halloween Costume 2014", text: "Origami flower with addressable LEDs powered from a Li-Po battery.", img: "" },
      { date: new Date("May 2, 2013"), title: "7-Band Music Reactivity Circuit", text: "Using an MSGEQ7 and a shift register to control 7 LEDs representing 7 bands of frequency.", img: "/images/hardware/HW-p1.jpg" },
    ],
  }),
  computed: {
    isMobile() { return this.width < 600; },
  },
  mounted() {
    this.width = window.innerWidth;
    this._onResize = () => { this.width = window.innerWidth; };
    window.addEventListener("resize", this._onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this._onResize);
  },
  methods: {
    formatDatetime(d) { return moment(d).format("MMM YYYY"); },
  },
};
</script>

<style lang="sass">
.lighting
  width: 100%
  color: white
  padding-bottom: 80px

  .home-btn
    margin: 16px 0 0 16px

  .page-header
    text-align: center
    padding: 48px 24px 24px
    max-width: 760px
    margin: 0 auto
    .header-eyebrow
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      letter-spacing: 0.25em
      text-transform: uppercase
      color: #7627D0
      margin-bottom: 12px
    h1.header-title
      font-family: 'Nixie One', sans-serif
      font-size: clamp(2rem, 5vw, 3rem)
      font-weight: 700
      line-height: 1.1
      margin-bottom: 16px
    .header-sub
      font-family: 'Raleway', sans-serif
      font-size: 1.05rem
      opacity: 0.7

  .timeline-container
    max-width: 960px
    margin: 0 auto
    padding: 0 16px
    box-sizing: border-box

    @media (max-width: 600px)
      padding: 0 8px

    .timeline-date
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      opacity: 0.6
      padding: 4px 8px

    .date-right
      text-align: right

    .date-left
      text-align: left

    @media (max-width: 600px)
      .date-right, .date-left
        text-align: left

  .project-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 8px !important
    overflow: hidden
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s

    &::after
      content: ''
      display: block
      height: 2px
      width: 0
      background: linear-gradient(90deg, #7627D0, #a855f7)
      transition: width 0.3s ease

    &:hover
      border-color: rgba(118, 39, 208, 0.6) !important
      transform: translateY(-2px)
      box-shadow: 0 6px 20px rgba(118, 39, 208, 0.2) !important
      &::after
        width: 100%

  .project-img
    max-height: 220px

  .project-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.05rem

  .project-text
    font-family: 'Raleway', sans-serif
    font-size: 0.9rem
    opacity: 0.82
    line-height: 1.7
</style>