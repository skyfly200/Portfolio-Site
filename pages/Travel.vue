<template lang="pug">
    .travels
      v-fab(to="/" flat location="top start" app).home-btn Back
    
      .v-container
        .v-row(sm=12)
          h1.ma-2 Travels
        .v-row
          .v-col(sm=12)
            v-timeline.bio-info(:density="width < 650 ? 'compact' : 'default'" align="start")
              v-timeline-item(v-for="entry in timelineEntries" :key="entry.title")
                span(slot="opposite") {{ formatDatetime(entry.date) }}
                v-card(max-width="45vw")
                  v-card-title {{ entry.title }}
                  v-card-text(v-if="entry.text") {{ entry.text }}
                  img.image(:src="entry.image" v-if="entry.image" width="100%")
                  iframe.video-player(v-if="entry.video" width="100%" style="aspect-ratio: 16 / 9" :src="entry.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    </template>
    
    <script>
    import moment from "moment";
    
    export default {
      name: "travels",
      data: () => ({
        width: 0,
        timelineEntries: [
          { date: "2022", title: "First Time to Europe", text: "Lisbon, Amsterdam, Paris" },
          { date: "2023", title: "Moab" },
          { date: "2024", title: "Texas", text: "Dallas, Austin, Eclipse Fest, Big Bend" },
          { date: "2024", title: "Europe", text: "Netherlands, Germany, Austria, Hungary, Italy, Slovenia, Switzerland, France, Belgium", image: "/images/izone.webp" },
        ]
      }),
      mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
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
    