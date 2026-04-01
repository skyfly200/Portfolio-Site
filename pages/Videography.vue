<template lang="pug">
.video.skill

  v-btn(href="/multimedia" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Multimedia

  .page-header(data-aos="fade-down")
    .header-eyebrow Multimedia
    h1.header-title Videography
    p.header-sub Video is a powerful medium for conveying complex messages in an easily digestible form — I harness it to educate, inspire, and provoke new perspectives.

  v-divider.my-6

  .content-wrap
    v-row
      v-col(cols="12" v-for="video in videos" :key="video.title")
        v-card.info-card
          v-card-title.card-title {{ video.title }}
          v-card-subtitle.card-sub {{ video.subtitle }}
          v-card-text.video-wrap
            iframe(
              :src="video.src"
              :title="video.title"
              width="100%"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            )
</template>

<script>
export default {
  name: "videography",
  data: () => ({
    videos: [
      {
        title: "Matajur Peak Timelapse",
        subtitle: "A 90-minute timelapse looking out over Slovenia's Soča River Valley from Matajur Peak, 2024",
        src: "https://www.youtube.com/embed/KmDGvHkVhvk?si=AjnIDopAG_EvvAmv",
      },
      {
        title: "American Ninja Warrior Entry Video",
        subtitle: "Produced for my friend Critter, 2015",
        src: "https://www.youtube.com/embed/9o6mhFOJO5c?rel=0",
      },
      {
        title: "Cloud Sea Timelapse",
        subtitle: "Filmed near Nederland, CO",
        src: "https://www.youtube.com/embed/L46CGIbLuAg?si=ypXafbe4WhIdw69S",
      },
      {
        title: "Way High Radio Promo Video",
        subtitle: "Produced in 2015",
        src: "https://www.youtube.com/embed/gYpYreUpXYk?si=sJokumzSesxNq6mq",
      },
    ],
  }),
};
</script>

<style lang="sass">
.video
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

  .content-wrap
    max-width: 960px
    margin: 0 auto
    padding: 0 24px

  .info-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important
    overflow: hidden

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.1rem

  .card-sub
    font-family: 'Raleway', sans-serif
    opacity: 0.6

  .video-wrap
    iframe
      width: 100%
      aspect-ratio: 16 / 9
      border-radius: 4px
</style>