<template lang="pug">
.hardware.skill

  //- Back button
  v-btn(href="/#skills" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Back to Skills

  .page-header(data-aos="fade-down")
    .header-eyebrow Hardware Engineering
    h1.header-title Projects &amp; Builds
    p.header-sub A decade of embedded systems, PCB design, wireless devices, and LED everything.
    .header-chips
      v-chip(
        v-for="cat in categories"
        :key="cat.value"
        :color="activeFilter === cat.value ? 'primary' : 'default'"
        :variant="activeFilter === cat.value ? 'elevated' : 'outlined'"
        class="mr-2 mb-2"
        @click="setFilter(cat.value)"
        size="small"
      ) {{ cat.label }}

  v-divider.my-4

  //- Stats row
  .stats-row(data-aos="fade-up")
    .stat(v-for="s in stats" :key="s.label")
      .stat-num {{ s.num }}
      .stat-label {{ s.label }}

  v-divider.my-4

  //- Timeline — alternates on desktop, single side on mobile
  .projects-timeline
    v-timeline(:truncate-line="'both'" align="start" :side="isMobile ? 'end' : undefined")
      v-timeline-item(
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        :dot-color="categoryColor(project.category)"
        size="small"
        :class="index % 2 === 0 ? 'item-odd' : 'item-even'"
        data-aos="fade-left"
        data-aos-offset="80"
      )
        template(#opposite)
          .timeline-date(:class="index % 2 === 0 ? 'date-right' : 'date-left'") {{ formatDatetime(project.date) }}

        v-card.project-card(
          elevation="3"
          @click="openProject(project)"
        ).clickable
          //- Thumbnail: carousel if multiple, single img, video, or placeholder
          .media-wrap(v-if="projectImgs(project).length > 1")
            v-carousel(
              height="200"
              hide-delimiter-background
              show-arrows="hover"
              @click.stop
            )
              v-carousel-item(
                v-for="(src, i) in projectImgs(project)"
                :key="i"
              )
                v-img(:src="src" height="200" cover)
            .chip-overlay
              v-chip(size="x-small" :color="categoryColor(project.category)" label).category-chip
                i.fas.mr-1(:class="categoryIcon(project.category)")
                | {{ categoryLabel(project.category) }}

          .media-wrap(v-else-if="projectImgs(project).length === 1")
            video.card-video(
              v-if="isVideo(projectImgs(project)[0])"
              loop muted playsinline
              v-intersect="onVideoIntersect"
            )
              source(:src="projectImgs(project)[0]")
            v-img(v-else :src="projectImgs(project)[0]" height="200" cover)
            .chip-overlay
              v-chip(size="x-small" :color="categoryColor(project.category)" label).category-chip
                i.fas.mr-1(:class="categoryIcon(project.category)")
                | {{ categoryLabel(project.category) }}

          .no-img-header(v-else)
            v-chip(size="x-small" :color="categoryColor(project.category)" label).category-chip
              i.fas.mr-1(:class="categoryIcon(project.category)")
              | {{ categoryLabel(project.category) }}

          v-card-title.project-title {{ project.title }}
          v-card-subtitle.project-date {{ formatDatetime(project.date) }}
          v-card-text.project-text {{ project.text }}

          .tech-chips(v-if="project.tech && project.tech.length")
            v-chip(
              v-for="t in project.tech"
              :key="t"
              size="x-small"
              variant="tonal"
              color="primary"
              class="mr-1 mb-1"
            ) {{ t }}

          .card-hint
            i.fas.fa-expand-alt.mr-1
            | Click to expand

  v-divider.my-8

  //- CTA
  .contact-cta(data-aos="fade-up")
    v-card(color="primary" variant="tonal" class="pa-6 text-center").cta-card
      .cta-icon-wrap
        i.fas.fa-bolt.cta-icon
      h2.cta-title Interested in my hardware work?
      p.cta-text All PCB source files, firmware, and BOMs are available on GitHub. I'm currently looking for Embedded Hardware Engineer roles where I can design, build, and ship real products.
      .cta-actions
        v-btn(href="https://github.com/skyfly200" target="_blank" color="primary" variant="elevated" class="mr-3")
          i.fab.fa-github.mr-2
          | GitHub
        v-btn(href="/#contact" color="default" variant="outlined") Contact Me

  //- ── Full-screen project modal ──────────────────────────
  v-dialog(
    v-model="dialog"
    :max-width="isMobile ? '100vw' : '860px'"
    :fullscreen="isMobile"
    scrollable
  )
    v-card.modal-card(v-if="selected")
      //- Media: carousel, video, or single image
      template(v-if="projectImgs(selected).length > 1")
        v-carousel(
          height="360"
          hide-delimiter-background
          show-arrows="hover"
        )
          v-carousel-item(
            v-for="(src, i) in projectImgs(selected)"
            :key="i"
          )
            template(v-if="isVideo(src)")
              video.modal-video(autoplay loop muted playsinline)
                source(:src="src")
            v-img(v-else :src="src" height="360" cover)

      template(v-else-if="projectImgs(selected).length === 1")
        template(v-if="isVideo(projectImgs(selected)[0])")
          video.modal-video-single(autoplay loop muted playsinline)
            source(:src="projectImgs(selected)[0]")
        v-img(v-else :src="projectImgs(selected)[0]" height="360" cover)

      //- Close button overlaid on media
      v-btn.modal-close(
        icon
        variant="tonal"
        color="default"
        size="small"
        @click="dialog = false"
      )
        i.fas.fa-times

      v-card-text.modal-body
        .modal-meta
          v-chip(size="small" :color="categoryColor(selected.category)" label class="mr-2")
            i.fas.mr-1(:class="categoryIcon(selected.category)")
            | {{ categoryLabel(selected.category) }}
          span.modal-date {{ formatDatetime(selected.date) }}

        h2.modal-title {{ selected.title }}
        p.modal-text {{ selected.text }}

        .tech-chips.mt-3(v-if="selected.tech && selected.tech.length")
          v-chip(
            v-for="t in selected.tech"
            :key="t"
            size="small"
            variant="tonal"
            color="primary"
            class="mr-2 mb-2"
          ) {{ t }}

        .modal-actions.mt-4
          v-btn(
            v-if="selected.repo"
            :href="selected.repo"
            target="_blank"
            variant="elevated"
            color="primary"
            class="mr-2 mb-2"
          )
            i.fab.fa-github.mr-2
            | View Code
          v-btn(
            v-if="selected.link"
            :href="selected.link"
            target="_blank"
            variant="tonal"
            color="primary"
            class="mr-2 mb-2"
          )
            i.fas.fa-external-link-alt.mr-2
            | Open Link
          v-btn(
            v-if="selected.gerbers"
            :href="selected.gerbers"
            target="_blank"
            variant="tonal"
            color="success"
            class="mr-2 mb-2"
          )
            i.fas.fa-download.mr-2
            | Gerbers
          v-btn(
            v-if="selected.bom"
            :href="selected.bom"
            target="_blank"
            variant="tonal"
            color="success"
            class="mr-2 mb-2"
          )
            i.fas.fa-download.mr-2
            | BOM
</template>

<script>
import moment from "moment";

export default {
  name: "hardware",
  data: () => ({
    width: 0,
    dialog: false,
    selected: null,
    activeFilter: "all",
    categories: [
      { value: "all",      label: "All Projects" },
      { value: "embedded", label: "Embedded / MCU" },
      { value: "iot",      label: "IoT / Wireless" },
      { value: "led",      label: "LED / Lighting" },
      { value: "audio",    label: "Audio / Synthesis" },
      { value: "radio",    label: "Radio / RF" },
    ],
    projects: [
      {
        date: new Date("Feb 20, 2026"),
        title: "Hyphea Duo PCB",
        text: "Dual LED strip driver and battery charger hat for XIAO. I2C broken out to add an IMU later for motion-reactive effects.",
        img: "/images/hardware/Hyphae-Duo.jpg",
        category: "led",
        tech: ["LED", "XIAO"],
      },
      {
        date: new Date("Feb 16, 2026"),
        title: "POV POI",
        text: "Persistence of Vision (POV) creates patterns in the air when spun. An updated version of the Light Tube Art Piece concept, this handheld version is designed to be spun like a poi for dynamic light patterns. Powered by an ESP32 and SK6812 LEDs.",
        img: "/images/hardware/POV_POI.jpg",
        category: "led",
        tech: ["LED", "SK6812", "ESP32", "POV"],
      },
      {
        date: new Date("Feb 3, 2026"),
        title: "Smart Sprout V1",
        text: "A sprout clip with a tetrahedral LED array on top, powered by an Artemis Redboard Nano and a recovered vape battery. Bluetooth controls.",
        img: "/images/hardware/smart_sprout-V1.jpg",
        category: "led",
        tech: ["LED", "Artemis", "Bluetooth", "Vape Battery"],
      },
      {
        date: new Date("Jan 18, 2026"),
        title: "WLED Panel",
        text: "An array of WS2812B LEDs controlled by WLED firmware running on an ESP32.",
        img: "/images/hardware/WLED-Panel.png",
        category: "led",
        tech: ["WS2812B", "WLED", "ESP32"],
      },
      {
        date: new Date("Jan 8, 2026"),
        title: "Light Tube Art Piece",
        text: "A 3D printed light with 2 WS2812B LED strips driven by an ESP32 and powered by an 18650 Li-Ion battery. Bluetooth controls.",
        img: "/images/hardware/LightTube.png",
        category: "led",
        tech: ["LED", "Bluetooth", "3D Printing", "18650 Battery"],
      },
      {
        date: new Date("Dec 20, 2025"),
        title: "Glow Flora Home V1",
        text: "Lily origami flowers sprouting from a flower pot with addressable LEDs, an 18650 battery, and an ESP32 controller. Running WLED.",
        img: "/images/hardware/Glow_Flora_Home-V1.png",
        category: "led",
        tech: ["LED", "ESP32", "18650 Battery", "WLED"],
      },
      {
        date: new Date("Aug 5, 2025"),
        title: "Glow Flora Clip",
        text: "An origami Lily with  flexible LED filament powered from a coin cell.",
        img: "/images/hardware/Glow_Flora_Clip.jpg",
        category: "led",
        tech: ["LED", "Coin Cell"],
      },
      {
        date: new Date("March 15, 2025"),
        title: "Glow Flora Handheld V1",
        text: "An origami Lily with addresable LEDs driven by a XIAO ESP32-C6. USB C rechargeable Li-Po battery. The first in a line of handheld LED art pieces.",
        img: "/images/hardware/Glow_Flora_Handheld-V1.jpg",
        category: "led",
        tech: ["LED", "WS2812B", "ESP32-C6", "Li-Po", "USB C"],
      },
      {
        date: new Date("Oct 15, 2024"),
        title: "Phi Lamp",
        text: "A lamp designed with the golden spiral.",
        img: "/images/hardware/phi-lamp.jpg",
        category: "led",
        tech: ["LED", "USB"],
      },
      {
        date: new Date("Nov 28, 2023"),
        title: "Air Quality Monitor",
        text: "A unit of sensors to monitor air quality including particulate matter, CO₂, VOC, temperature and humidity. Built with an Artemis Redboard Nano. Read data over Bluetooth.",
        img: "/images/hardware/air-quality-monitor.jpg",
        category: "iot",
        tech: ["Artemis", "Bluetooth", "BME680", "PMS5003", "SGP30"],
      },
      {
        date: new Date("Feb 14, 2021"),
        title: "Physical NFT Prototype",
        text: "A prototype for a physical NFT using a Secure Element Chip to store cryptographic keys.",
        img: "/images/hardware/nft-prototype.jpg",
        category: "embedded",
        tech: ["NFT", "Secure Element", "Crypto"],
      },
      {
        date: new Date("Oct 7, 2020"),
        title: "LED Lily Pyramid Base",
        text: "A custom 3D printed base to house the LED Lily Controller and LiPo battery, with integrated charging and power management.",
        img: "/images/hardware/pyramid-board.jpeg",
        category: "led",
        tech: ["Eagle", "LiPo", "TP4056"],
      },
      {
        date: new Date("October 26, 2019"),
        title: "Dual RGBW Strip ArtNet Controller",
        text: "A Hand soldered PCB to control two RGBW LED strips with an ESP8266, receiving DMX-over-IP for professional lighting control.",
        img: "/images/hardware/dual-rgbw-artnet.jpg",
        category: "led",
        tech: ["ESP8266", "ArtNet", "RGBW LEDs"],
      },
      {
        date: new Date("October 26, 2019"),
        title: "Flex Lily PCB",
        text: "A Flex PCB to fit WS2812B-mini LEDs inside of an origami lily.",
        img: "",
        category: "led",
        tech: ["Origami", "RGB LEDs"],
      },
      {
        date: new Date("October 26, 2019"),
        title: "Touch n' Glow",
        text: "A PCB with capacitive touch pads, one WS2812B, and a 3.5mm port to connect RGB LEDs.",
        img: ["/images/hardware/TnG.jpg", "/images/hardware/touchnglow.jpg"],
        category: "led",
        tech: ["Capacitive Touch", "KiCad", "RGB LEDs"],
        repo: "https://github.com/skyfly200/touch-n-glow",
      },
      {
        date: new Date("Oct 18, 2019"),
        title: "Hexy Pix PCB",
        text: "A breakout board for WS2812B 5050 addressable LEDs in a hexagonal layout.",
        img: ["/images/hardware/hexypix.jpg", "/images/hardware/hexy.jpg", "/images/hardware/hexy3.jpg", "/images/hardware/hexy2.jpg"],
        category: "led",
        tech: ["WS2812B", "Eagle", "PCB"],
      },
      {
        date: new Date("August 26, 2019"),
        title: "Ill'uminator PCB",
        text: "My first designed and manufactured PCB! A basic RGB LED strip controller with sweet PCB art on the back. MOSFET-switched RGB channels, 12V input.",
        img: "/images/hardware/illuminator.jpg",
        category: "led",
        tech: ["MOSFET", "Eagle", "RGB", "12V"],
      },
      {
        date: new Date("July 2019"),
        title: "PT2399 Delay IC Echo Circuit",
        text: "Old-school bucket brigade delay IC circuit built around the PT2399, with adjustable delay time and feedback for guitar effects.",
        img: "",
        category: "audio",
        tech: ["PT2399", "Analog", "Guitar FX", "Through-hole"],
      },
      {
        date: new Date("March 15, 2019"),
        title: "ArtNet LED Strip Controller",
        text: "ArtNet WS2812b strip controller running on ESP32 Thing from SparkFun. Receives DMX-over-IP for professional lighting control.",
        img: "/images/hardware/ARTNET.png",
        category: "led",
        tech: ["ESP32", "ArtNet", "WS2812B", "DMX", "Wi-Fi"],
        repo: "https://github.com/skyfly200/Radio-Net-Hub",
      },
      {
        date: new Date("November 16, 2018"),
        title: "Tower of Power",
        text: "An animated LED artpiece made with a laser-cut logo for our station backed with some addressable LEDs. Running off a QT PY board from Adafruit.",
        img: "",
        category: "radio",
        tech: ["CircuitPython", "WS2812B", "Laser Cut", "Li-Po"],
      },
      {
        date: new Date("November 1, 2018"),
        title: "Sparky — 150W FM Transmitter",
        text: "A 150W stereo FM transmitter with laser-cut front and rear panels to mount all the hardware in an spare PC case.",
        img: "/images/hardware/sparky.jpg",
        category: "radio",
        tech: ["RF", "FM", "150W PA", "Laser Cut"],
      },
      {
        date: new Date("March 3, 2018"),
        title: "LED Lily Origami Fixture",
        text: "Origami flower modular LED fixture with embedded addressable LEDs, connects to a controller with a 3.5mm TRRS jack.",
        img: "/images/hardware/origami-lily.jpg",
        category: "led",
        tech: ["WS2812B", "Modular", "Origami"],
      },
      {
        date: new Date("March 2, 2018"),
        title: "Modular LED Controller",
        text: "ESP32 LED controller that connects to light fixtures via TRS jack. Bluetooth control with custom PWA app. Fully modular — one controller drives multiple fixtures.",
        img: "/images/hardware/esp32-pack.jpg",
        category: "led",
        tech: ["ESP32", "Bluetooth", "Modular", "Li-Po"],
        repo: "https://github.com/skyfly200/BLE-LED-PWA",
      },
      {
        date: new Date("Feb 4, 2018"),
        title: "LEGO DMX Moving Light",
        text: "A one axis pan/tilt moving head light fixture made out of LEGO, with an Arduino Uno and a MAX485 breadboard circuit to receive DMX512 control signals.",
        img: "/images/hardware/DMX.jpg",
        category: "led",
        tech: ["DMX512", "Arduino", "LEGO", "MAX485"],
      },
      {
        date: new Date("Dec 25, 2017"),
        title: "LED Origami Rose",
        text: "Origami rose with embedded addressable LEDs, selectable animation modes, and micro-USB recharging. Built with an Arduino pro mini, a Li-Po battery and a sparkfun charge controller / 5V boost module. A gift that blinks.",
        img: ["/images/hardware/rose.mp4", "/images/hardware/LED-Rose.jpg"],
        category: "led",
        tech: ["WS2812B", "Arduino", "LiPo", "USB Charging"],
      },
      {
        date: new Date("Dec 25, 2017"),
        title: "Light Painting Wand",
        text: "A string of addressable LEDs to light paint with, powered by an Arduino Pro Mini and a USB a cable for power.",
        img: "",
        category: "led",
        tech: ["WS2812B", "Arduino", "USB Powered"],
        repo: "https://github.com/skyfly200/light-painting-wand",
      },
      {
        date: new Date("November 16, 2017"),
        title: "Animated Musical Note Light",
        text: "A musical note-shaped LED matrix",
        img: "",
        category: "led",
        tech: ["Arduino", "WS2812B", "LED"],
        repo: "https://github.com/skyfly200/note-rainbow",
      },
      {
        date: new Date("Oct 27, 2017"),
        title: "Chasing EL Wire Vest",
        text: "Chasing EL wire vest with addressable LED belt pack. RJ45 expansion port for LEDs, buttons, and sensors.",
        img: "/images/hardware/EL_Vest.mp4",
        category: "led",
        tech: ["EL Wire", "WS2812B", "Arduino", "RJ45"],
        repo: "https://github.com/skyfly200/EL-Vest",
      },
      {
        date: new Date("Jan 29, 2017"),
        title: "TMP/RH PID Controller",
        text: "Arduino PID controller for temperature and humidity with LCD readout and light level sensor. Used for environmental control.",
        img: ["/images/hardware/PID.jpg", "/images/hardware/pid-controller.jpg"],
        category: "embedded",
        tech: ["Arduino", "PID", "DHT22", "LCD", "I2C"],
        repo: "https://github.com/skyfly200/PID-TMP-RH",
      },
      {
        date: new Date("Mar 8, 2014"),
        title: "80s Text-to-Speech Chip",
        text: "Arduino sketch for the SP0256A-AL2 IC manufactured in 1981, a vintage speech synthesis chip.",
        img: "/images/hardware/TTS-IC.jpg",
        category: "audio",
        tech: ["Arduino", "SP0256", "Vintage IC"],
        repo: "https://github.com/skyfly200/SP0256_AL2",
      },
      {
        date: new Date("June 2, 2013"),
        title: "Music Reactive LED Strip",
        text: "",
        img: "",
        category: "led",
        tech: ["Arduino", "LED"],
        repo: "https://github.com/skyfly200/MusicReactiveRGBStrip",
      },
      {
        date: new Date("May 2, 2013"),
        title: "Animated Musical Note",
        text: "A musical note-shaped LED matrix",
        img: "",
        category: "led",
        tech: ["Arduino", "WS2812B", "LED"],
        repo: "https://github.com/skyfly200/note-rainbow",
      },
      {
        date: new Date("May 2, 2013"),
        title: "Audio Spectrum Visualizer",
        text: "7-band graphic EQ chip hooked up to an Arduino, driving a shift register to PWM-control a row of LEDs to display the audio spectrum.",
        img: "/images/hardware/HW-p1.jpg",
        category: "audio",
        tech: ["Arduino", "MSGEQ7", "Shift Register", "PWM", "LED Matrix"],
      },
      {
        date: new Date("May 2, 2013"),
        title: "Wireless Weather Station",
        text: "",
        img: "/images/hardware/weather-station.jpg",
        category: "iot",
        tech: ["Arduino", "DHT22", "BMP180"],
        repo: "https://github.com/skyfly200/Wireless-Arduino-Weather-Station",
      },
    ],
    stats: [
      { num: "14+", label: "Years Building" },
      { num: "34+", label: "Hardware Projects" },
      { num: "7",   label: "Custom PCBs Made" },
      { num: "∞",   label: "LEDs Driven" },
    ],
  }),
  computed: {
    filteredProjects() {
      if (this.activeFilter === "all") return this.projects;
      return this.projects.filter(p => p.category === this.activeFilter);
    },
    isMobile() {
      return this.width < 600;
    },
  },
  mounted() {
    this.width = window.innerWidth;
    this._onResize = () => { this.width = window.innerWidth; };
    window.addEventListener('resize', this._onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this._onResize);
  },
  methods: {
    onVideoIntersect(isIntersecting, entries) {
      const video = entries[0].target;
      if (isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    },
    setFilter(val) {
      this.activeFilter = val;
    },
    openProject(project) {
      this.selected = project;
      this.dialog = true;
    },
    // Normalise img / imgs into a consistent array, filtering empty strings
    projectImgs(project) {
      const raw = project.imgs ?? (project.img ? [project.img] : []);
      return raw.filter(Boolean);
    },
    isVideo(src) {
      return /\.(mp4|webm|ogg)$/i.test(src);
    },
    formatDatetime(datetime) {
      return moment(datetime).format("MMM YYYY");
    },
    categoryColor(cat) {
      return {
        pcb:      "success",
        embedded: "primary",
        iot:      "info",
        led:      "warning",
        audio:    "error",
        radio:    "secondary",
      }[cat] || "default";
    },
    categoryIcon(cat) {
      return {
        pcb:      "fa-microchip",
        embedded: "fa-code",
        iot:      "fa-wifi",
        led:      "fa-lightbulb",
        audio:    "fa-volume-up",
        radio:    "fa-broadcast-tower",
      }[cat] || "fa-bolt";
    },
    categoryLabel(cat) {
      return this.categories.find(c => c.value === cat)?.label || cat;
    },
  },
};
</script>

<style lang="sass">
.hardware
  width: 100%
  color: white
  padding-bottom: 80px

  .home-btn
    margin: 16px 0 0 16px

  // ── Page Header ──────────────────────────────────────────
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
      font-size: clamp(2.2rem, 5vw, 3.5rem)
      font-weight: 700
      line-height: 1.1
      margin-bottom: 16px

    .header-sub
      font-family: 'Raleway', sans-serif
      font-size: 1.05rem
      opacity: 0.7
      margin-bottom: 24px

    .header-chips
      display: flex
      flex-wrap: wrap
      justify-content: center
      gap: 6px

  // ── Stats ─────────────────────────────────────────────────
  .stats-row
    display: flex
    justify-content: center
    gap: 48px
    flex-wrap: wrap
    padding: 16px 24px

    .stat
      text-align: center
      .stat-num
        font-family: 'Nixie One', sans-serif
        font-size: 2.4rem
        font-weight: 700
        color: #7627D0
        line-height: 1
      .stat-label
        font-family: 'Raleway', sans-serif
        font-size: 0.75rem
        opacity: 0.6
        text-transform: uppercase
        letter-spacing: 0.1em
        margin-top: 4px

  // ── Timeline ─────────────────────────────────────────────
  .projects-timeline
    padding: 0 16px
    max-width: 900px
    margin: 0 auto

    @media (max-width: 600px)
      padding: 0 8px

    // Date alignment — controlled directly from template via index
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
        padding-left: 0

    // Media wrapper — makes chip overlay work
    .media-wrap
      position: relative

      .chip-overlay
        position: absolute
        bottom: 8px
        left: 8px
        z-index: 2

    .project-card
      border-radius: 8px
      overflow: hidden
      margin-bottom: 8px
      background: rgba(255,255,255,0.04) !important
      border: 1px solid rgba(255,255,255,0.08)
      transition: border-color 0.2s, transform 0.2s

      &:hover
        border-color: rgba(118, 39, 208, 0.5)
        transform: translateY(-2px)

      .project-img
        position: relative
        .img-overlay
          position: absolute
          bottom: 8px
          left: 8px

      .no-img-header
        padding: 12px 16px 0

      .category-chip
        font-size: 0.65rem !important

      .project-title
        font-family: 'Nixie One', sans-serif
        font-size: 1.1rem
        padding-bottom: 4px

      .project-text
        font-family: 'Raleway', sans-serif
        font-size: 0.9rem
        opacity: 0.8
        padding-bottom: 4px

      .tech-chips
        padding: 0 16px 8px

  // ── Clickable cards ───────────────────────────────────────
  .clickable
    cursor: pointer
    &:hover
      border-color: rgba(118, 39, 208, 0.6) !important
      transform: translateY(-3px)

  .card-hint
    font-size: 0.7rem
    opacity: 0.35
    padding: 4px 16px 12px
    display: flex
    align-items: center

  // ── Card video thumbnail ──────────────────────────────────
  .card-video
    width: 100%
    height: 200px
    object-fit: cover
    display: block

  // ── CTA icon ─────────────────────────────────────────────
  .cta-icon-wrap
    display: flex
    justify-content: center
    margin-bottom: 12px

  .cta-icon
    font-size: 2.2rem
    color: #7627D0

  // ── Modal ─────────────────────────────────────────────────
  .modal-card
    background: #1a1a2e !important
    color: #e0e0e0 !important
    position: relative
    overflow: hidden

    .modal-close
      position: absolute
      top: 12px
      right: 12px
      z-index: 10

    .modal-video,
    .modal-video-single
      width: 100%
      height: 360px
      object-fit: cover
      display: block

    .modal-body
      padding: 20px 24px 28px

    .modal-meta
      display: flex
      align-items: center
      gap: 8px
      margin-bottom: 12px

    .modal-date
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      opacity: 0.5

    .modal-title
      font-family: 'Nixie One', sans-serif
      font-size: 1.6rem
      font-weight: 400
      margin-bottom: 12px

    .modal-text
      font-family: 'Raleway', sans-serif
      font-size: 0.95rem
      line-height: 1.75
      opacity: 0.85

    .modal-actions
      display: flex
      flex-wrap: wrap
  .contact-cta
    max-width: 680px
    margin: 0 auto
    padding: 0 24px

    .cta-card
      border-radius: 12px !important

    .cta-title
      font-family: 'Nixie One', sans-serif
      font-size: 1.6rem
      margin-bottom: 12px

    .cta-text
      font-family: 'Raleway', sans-serif
      opacity: 0.8
      margin-bottom: 24px

    .cta-actions
      display: flex
      justify-content: center
      flex-wrap: wrap
      gap: 12px
</style>