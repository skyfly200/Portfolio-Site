<template lang="pug">
.hardware.skill

  //- Back button
  v-btn(href="/" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Home

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

  //- Timeline
  v-container.timeline-container
    .projects-timeline
      v-timeline(:truncate-line="'both'" align="start" :side="isMobile ? 'end' : undefined")
        v-timeline-item(
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          :dot-color="categoryColor(project.category)"
          size="small"
          data-aos="fade-left"
          data-aos-offset="80"
        )
          template(#opposite)
            .timeline-date(:class="index % 2 === 0 ? 'date-right' : 'date-left'") {{ formatDatetime(project.date) }}

          v-card.project-card(elevation="3" @click="openProject(project)").clickable

            .media-wrap(v-if="projectImgs(project).length > 1")
              v-carousel.square-media(hide-delimiter-background show-arrows="hover" @click.stop)
                v-carousel-item(
                  v-for="(src, i) in projectImgs(project)"
                  :key="i"
                  :src="isVideo(src) ? undefined : src"
                  cover
                )
                  video.card-video(v-if="isVideo(src)" loop muted playsinline v-intersect="onVideoIntersect")
                    source(:src="src")
              .chip-overlay
                v-chip(size="small" :color="categoryColor(project.category)" variant="elevated").category-chip
                  i.fas.mr-1(:class="categoryIcon(project.category)")
                  | {{ categoryLabel(project.category) }}

            .media-wrap(v-else-if="projectImgs(project).length === 1")
              video.card-video.square-media(v-if="isVideo(projectImgs(project)[0])" loop muted playsinline v-intersect="onVideoIntersect")
                source(:src="projectImgs(project)[0]")
              v-img.square-media(v-else :src="projectImgs(project)[0]" cover)
              .chip-overlay
                v-chip(size="small" :color="categoryColor(project.category)" variant="elevated").category-chip
                  i.fas.mr-1(:class="categoryIcon(project.category)")
                  | {{ categoryLabel(project.category) }}

            .no-img-header(v-else)
              v-chip(size="small" :color="categoryColor(project.category)" variant="elevated").category-chip
                i.fas.mr-1(:class="categoryIcon(project.category)")
                | {{ categoryLabel(project.category) }}

            v-card-title.project-title {{ project.title }}
            v-card-subtitle.project-date {{ formatDatetime(project.date) }}
            v-card-text.project-text {{ project.text }}

            .tech-chips(v-if="project.tech && project.tech.length")
              v-chip(v-for="t in project.tech" :key="t" size="x-small" variant="tonal" color="primary" class="mr-1 mb-1") {{ t }}

  v-divider.my-8

  .contact-cta(data-aos="fade-up")
    v-card(variant="elevated" class="pa-6 text-center").cta-card
      .cta-icon-wrap
        i.fas.fa-bolt.cta-icon
      h2.cta-title Interested in my hardware work?
      p.cta-text All PCB source files, firmware, and BOMs are available on GitHub. I'm currently looking for Embedded Hardware Engineer roles where I can design, build, and ship real products.
      .cta-actions
        v-btn(href="https://github.com/skyfly200" target="_blank" color="primary" variant="elevated" class="mr-3")
          i.fab.fa-github.mr-2
          | GitHub
        v-btn(href="/#contact" color="primary" variant="outlined") Contact Me

  v-dialog(v-model="dialog" :max-width="isMobile ? '100vw' : '920px'" :fullscreen="isMobile" scrollable)
    .modal-wrapper(v-if="selected")
      v-btn.modal-close(icon variant="elevated" color="default" size="small" @click="dialog = false")
        i.fas.fa-times

      v-card.modal-card
        .modal-layout

          .modal-media-col(v-if="projectImgs(selected).length > 0")
            .media-wrap(v-if="projectImgs(selected).length > 1")
              v-carousel.modal-media(hide-delimiter-background show-arrows="hover")
                v-carousel-item(
                  v-for="(src, i) in projectImgs(selected)"
                  :key="i"
                  :src="isVideo(src) ? undefined : src"
                  cover
                )
                  video.modal-video(v-if="isVideo(src)" autoplay loop muted playsinline)
                    source(:src="src")

            .media-wrap(v-else)
              video.modal-video(v-if="isVideo(projectImgs(selected)[0])" autoplay loop muted playsinline)
                source(:src="projectImgs(selected)[0]")
              v-img.modal-media(v-else :src="projectImgs(selected)[0]" cover)

          .modal-info-col
            .modal-meta
              v-chip(size="small" :color="categoryColor(selected.category)" label class="mr-2")
                i.fas.mr-1(:class="categoryIcon(selected.category)")
                | {{ categoryLabel(selected.category) }}
              span.modal-date {{ formatDatetime(selected.date) }}

            h2.modal-title {{ selected.title }}
            p.modal-text {{ selected.text }}
            p.modal-details(v-if="selected.details") {{ selected.details }}

            .tech-chips.mt-3(v-if="selected.tech && selected.tech.length")
              v-chip(v-for="t in selected.tech" :key="t" size="small" variant="tonal" color="primary" class="mr-2 mb-2") {{ t }}

            .modal-actions.mt-4
              v-btn(v-if="selected.repo" :href="selected.repo" target="_blank" variant="elevated" color="primary" class="mr-2 mb-2")
                i.fab.fa-github.mr-2
                | View Code
              v-btn(v-if="selected.link" :href="selected.link" target="_blank" variant="tonal" color="primary" class="mr-2 mb-2")
                i.fas.fa-external-link-alt.mr-2
                | Open Link
              v-btn(v-if="selected.gerbers" :href="selected.gerbers" target="_blank" variant="tonal" color="success" class="mr-2 mb-2")
                i.fas.fa-download.mr-2
                | Gerbers
              v-btn(v-if="selected.bom" :href="selected.bom" target="_blank" variant="tonal" color="success" class="mr-2 mb-2")
                i.fas.fa-download.mr-2
                | BOM
</template>

<script>
import moment from "moment";
import { projects, stats } from "./hardwareProjects.js";

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
    projects,
    stats,
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
    // Normalise img (string or array) / imgs into a consistent flat array
    projectImgs(project) {
      const raw = project.imgs
        ?? (Array.isArray(project.img) ? project.img : (project.img ? [project.img] : []));
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
  .timeline-container
    max-width: 960px !important
    padding: 0 16px

    @media (max-width: 600px)
      padding: 0 8px

  .projects-timeline
    width: 100%

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

    // Media wrapper — position:relative anchors the chip overlay
    .media-wrap
      position: relative

      .chip-overlay
        position: absolute
        top: 8px
        left: 8px
        z-index: 2

    .project-card
      border-radius: 8px
      overflow: hidden
      margin-bottom: 8px
      background: rgba(255,255,255,0.04) !important
      border: 1px solid rgba(255,255,255,0.08)
      transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s
      cursor: pointer

      // Subtle animated bottom bar as interaction cue
      &::after
        content: ''
        display: block
        height: 2px
        width: 0
        background: linear-gradient(90deg, #7627D0, #a855f7)
        transition: width 0.3s ease

      &:hover
        border-color: rgba(118, 39, 208, 0.7) !important
        transform: translateY(-3px)
        box-shadow: 0 6px 24px rgba(118, 39, 208, 0.25) !important
        &::after
          width: 100%

      .no-img-header
        padding: 12px 16px 0

      .category-chip
        font-size: 0.72rem !important
        font-weight: 600 !important
        letter-spacing: 0.02em
        text-shadow: 0 1px 2px rgba(0,0,0,0.4)

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
        padding: 0 16px 16px
        margin-top: 12px

  // ── Square aspect ratio — cards + modal ───────────────────
  .square-media
    aspect-ratio: 1 / 1
    width: 100%

  // ── Video elements ────────────────────────────────────────
  .card-video
    width: 100%
    aspect-ratio: 1 / 1
    object-fit: cover
    display: block

  // ── CTA ───────────────────────────────────────────────────
  .contact-cta
    max-width: 680px
    margin: 0 auto
    padding: 0 24px

    .cta-card
      border-radius: 12px !important
      background: rgba(118, 39, 208, 0.15) !important
      border: 1px solid rgba(118, 39, 208, 0.4) !important

    .cta-icon-wrap
      display: flex
      justify-content: center
      margin-bottom: 12px

    .cta-icon
      font-size: 2.2rem
      color: #7627D0

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

  // ── Modal ─────────────────────────────────────────────────
  .modal-wrapper
    position: relative

  .modal-close
    position: absolute
    top: -16px
    right: -16px
    z-index: 20

  .modal-card
    background: #1e1230 !important
    color: #e0e0e0 !important
    overflow: hidden

  // Dim the dialog scrim so the page shows through more
  .v-overlay__scrim
    opacity: 0.55 !important

  .modal-layout
    display: flex
    flex-direction: row
    min-height: 0

    @media (max-width: 700px)
      flex-direction: column

  .modal-media-col
    flex: 0 0 42%
    max-width: 42%
    display: flex
    flex-direction: column

    @media (max-width: 700px)
      flex: none
      max-width: 100%

    .media-wrap
      position: relative
      height: 100%

      .modal-media,
      .modal-video
        width: 100%
        height: 100%
        object-fit: cover
        display: block
        aspect-ratio: unset

      // Carousel fills the full column height
      .v-carousel
        height: 100% !important

  .modal-info-col
    flex: 1
    padding: 28px 28px 28px 28px
    overflow-y: auto
    display: flex
    flex-direction: column
    gap: 4px

    @media (max-width: 700px)
      padding: 20px 20px 28px

    .modal-meta
      display: flex
      align-items: center
      gap: 8px
      margin-bottom: 8px

    .modal-date
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      opacity: 0.5

    .modal-title
      font-family: 'Nixie One', sans-serif
      font-size: 1.5rem
      font-weight: 400
      margin-bottom: 10px
      line-height: 1.2

    .modal-text
      font-family: 'Raleway', sans-serif
      font-size: 0.95rem
      line-height: 1.75
      opacity: 0.85
      margin-bottom: 4px

    .modal-details
      font-family: 'Raleway', sans-serif
      font-size: 0.88rem
      line-height: 1.75
      opacity: 0.65
      margin-top: 8px
      padding-top: 8px
      border-top: 1px solid rgba(255,255,255,0.08)

    .tech-chips
      margin-top: 8px

    .modal-actions
      display: flex
      flex-wrap: wrap
      gap: 8px
      margin-top: 12px
</style>