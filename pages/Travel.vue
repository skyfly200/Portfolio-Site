<template lang="pug">
.travels

  v-btn(href="/" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Home

  Map

  v-navigation-drawer(permanent location="right" width="380").travel-drawer
    .drawer-header
      .header-eyebrow Travels
      h2.drawer-title Journey Log

    v-divider.my-3

    v-timeline.travel-timeline(:density="width < 650 ? 'compact' : 'default'" align="start" truncate-line="both")
      v-timeline-item(
        v-for="entry in travelStore.filteredEvents"
        :key="entry.title"
        dot-color="primary"
        size="small"
      )
        template(#opposite)
          .timeline-date {{ formatDatetime(entry.time) }}

        v-card.travel-card
          v-card-title.travel-card-title {{ entry.title }}
          v-card-text.travel-card-text(v-if="entry.text") {{ entry.text }}
          .video-wrap(v-if="entry.video")
            iframe(
              width="100%"
              style="aspect-ratio: 16 / 9"
              :src="entry.video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            )
</template>

<script setup lang="ts">
import moment from "moment";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useTravelStore } from '~/stores/travelStore';
import type { EventData } from '~/stores/travelStore';

const travelStore = useTravelStore();
let width = ref(0);

const onResize = () => { width.value = window.innerWidth; };

const formatDatetime = (datetime: string) => moment(datetime).format("MMM YYYY");

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
  travelStore.loadEvents();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style lang="sass">
.travels
  width: 100%
  min-height: 100vh
  color: white
  position: relative

  .home-btn
    position: fixed
    top: 16px
    left: 16px
    z-index: 100

  // ── Drawer ─────────────────────────────────────────────────
  .travel-drawer
    background: rgba(18, 8, 30, 0.95) !important
    border-left: 1px solid rgba(255,255,255,0.08) !important
    overflow-y: auto

  .drawer-header
    padding: 24px 20px 8px

    .header-eyebrow
      font-family: 'Nixie One', sans-serif
      font-size: 0.8rem
      letter-spacing: 0.25em
      text-transform: uppercase
      color: #7627D0
      margin-bottom: 8px

    .drawer-title
      font-family: 'Nixie One', sans-serif
      font-size: 1.5rem
      font-weight: 400
      color: white

  // ── Timeline ──────────────────────────────────────────────
  .travel-timeline
    padding: 8px 12px 24px

  .timeline-date
    font-family: 'Nixie One', sans-serif
    font-size: 0.8rem
    opacity: 0.55
    padding: 2px 4px

  // ── Cards ─────────────────────────────────────────────────
  .travel-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 8px !important
    margin-bottom: 4px
    overflow: hidden
    transition: border-color 0.25s

    &:hover
      border-color: rgba(118, 39, 208, 0.5) !important

  .travel-card-title
    font-family: 'Nixie One', sans-serif
    font-size: 0.95rem
    padding-bottom: 4px

  .travel-card-text
    font-family: 'Raleway', sans-serif
    font-size: 0.85rem
    opacity: 0.8
    line-height: 1.7

  .video-wrap
    padding: 0 12px 12px
    iframe
      width: 100%
      border-radius: 4px

  @media (max-width: 800px)
    .travel-drawer
      width: 100% !important
      position: relative !important
      height: auto
</style>