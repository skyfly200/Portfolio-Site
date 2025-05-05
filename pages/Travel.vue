<template lang="pug">
  .travels
    v-fab(to="/" flat location="bottom start" app).home-btn Back
    v-fab(flat location="bottom end" app)
    Map
    v-navigation-drawer
      v-timeline.bio-info(:density="width < 650 ? 'compact' : 'default'" align="start")
        v-timeline-item(v-for="entry in travelStore.filteredEvents" :key="entry.title")
          span(slot="opposite") {{ formatDatetime(entry.date) }}
          v-card(max-width="45vw")
            v-card-title {{ entry.title }}
            v-card-text(v-if="entry.text") {{ entry.text }}
          iframe.video-player(v-if="entry.video" width="100%" style="aspect-ratio: 16 / 9" :src="entry.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>
    
<script setup lang="ts">
  import moment from "moment";
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { useTravelStore } from '~/stores/travelStore'; // Adjust the import path if needed
  import type { EventData } from '~/stores/travelStore'; // Import the interface for type safety

  const travelStore = useTravelStore();
  let width = ref(0);

  const onResize = () => {
    width.value = window.innerWidth;
  };

  const formatDatetime = (datetime: string) => {
    return moment(datetime).format("MMM YYYY"); // Changed format to include year for clarity
  };

  onMounted(() => {
    onResize();
    window.addEventListener('resize', onResize);
    travelStore.loadEvents();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
  });

  // No need for the 'name' property in <script setup>
  // The 'data' function is replaced by using 'ref' for reactive variables.
  // The 'methods' object is replaced by defining functions directly in the setup scope.
</script>
    
<style lang="sass" scoped>
  .travels
    text-align: center
    color: white
    &.topic-expanded
      display: flex
      align-items: center
    .bio-info
      padding: 10px 25px
      width: auto
      margin: auto
      p
        font-size: 1.2em
    .v-container
      width: 100% !important
      max-width: 100% !important
    @media (max-width: 1050px)
      flex-direction: column
      .video-info
        width: 100%
    @media (max-width: 800px)
      padding: 0px
      .video-player
        iframe
          width: 480px
          height: 360px
  
    .home-btn
      a
        color: white
  
</style>
    