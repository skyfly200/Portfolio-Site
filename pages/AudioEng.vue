<template lang="pug">
.audio-eng.skill

  v-btn(href="/multimedia" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    | Multimedia

  .page-header(data-aos="fade-down")
    .header-eyebrow Multimedia
    h1.header-title Sound Engineering
    p.header-sub Live sound, studio recording, FM broadcasting, and community radio — with a well-refined ear.

  v-divider.my-6

  .content-wrap
    v-card.info-card.mb-6
      v-card-text
        p.card-body With a comprehensive understanding of signal flow and equipment, as well as a well-refined ear, I'm confident in my ability to create clear and powerful sounding experiences.
        p.card-body.mt-3 I have run sound at venues in the Boulder area, including Shine, The Laughing Goat, and The Caribou Room. I worked as a Stage Manager at Frozen Dead Guy Days 2017 and 2018. Comfortable in a studio environment as well, I've tracked, mixed and mastered content at Kodiak Lake Studios.
        p.card-body.mt-3 A founder of Colorado Community Radio Network (CCRN) and Technical Director of Way High Radio. I manage a large swath of infrastructure, coordinate syndication and create content, to keep our community radio network running smoothly.
      v-card-actions.card-actions
        v-btn(color="primary" variant="elevated" href="http://coloradocommunityradio.com/" target="_blank") Learn More About CCRN
        v-btn(color="primary" variant="outlined" href="http://wayhighradio.com/" target="_blank") Learn More About KWHR

    .section-title Recordings

    v-row
      v-col(cols="12" md="6")
        v-card.info-card
          v-card-title.card-title Telluride Brews and Blues 2015
          v-card-text
            iframe(src="https://archive.org/embed/CCRN-TBB2015&playlist=1&list_height=190" width="100%" height="190" frameborder="0" allowfullscreen)
          v-card-actions
            v-btn(variant="outlined" color="primary" href="https://archive.org/details/CCRN-TBB2015" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | View on Archive.org
      v-col(cols="12" md="6")
        v-card.info-card
          v-card-title.card-title William Padilla Brown Interview
          v-card-text
            iframe(src="https://archive.org/embed/WilliamPadillaBrownInterview&playlist=1&list_height=70" width="100%" height="70" frameborder="0" allowfullscreen)
          v-card-actions
            v-btn(variant="outlined" color="primary" href="https://archive.org/details/WilliamPadillaBrownInterview" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              | View on Archive.org

    .mt-6.text-center
      v-btn(color="primary" variant="tonal" href="https://archive.org/details/@skybfly" target="_blank")
        i.fas.fa-headphones.mr-2
        | More Recordings

    v-divider.my-8

    .section-title Live Sound Gigs

    v-row
      v-col(v-for="gig in gigs" :key="gig.title" cols="12" sm="6" lg="4")
        v-card.info-card.gig-card
          v-img(v-if="gig.img" :src="gig.img" cover height="180")
          .gig-placeholder(v-else)
          v-card-title.card-title {{ gig.title }}
          v-card-subtitle.card-sub {{ gig.role }}
          v-card-text
            p.card-body {{ gig.description }}
</template>

<script>
export default {
  name: "audioEng",
  data: () => ({
    gigs: [
      { title: "The Laughing Goat", role: "Live Sound Engineer", description: "Live sound at The Laughing Goat, Boulder.", img: "" },
      { title: "Shine", role: "Live Sound Engineer", description: "Live sound engineering at this beloved Boulder venue.", img: "" },
      { title: "The Caribou Room", role: "Live Sound Engineer", description: "Live sound at this Nederland mountain music venue.", img: "" },
      { title: "Frozen Dead Guy Days 2017", role: "Stage Manager & Live Sound Engineer", description: "Stage management and live sound at Nederland's iconic annual festival.", img: "" },
      { title: "Frozen Dead Guy Days 2018", role: "Stage Manager & Live Sound Engineer", description: "Stage management and live sound at Nederland's iconic annual festival.", img: "" },
      { title: "Way High Radio Benefit — Halloween", role: "Live Sound Engineer", description: "Live sound for the Way High Radio Halloween benefit show.", img: "" },
      { title: "Microcosm", role: "Live Sound Engineer", description: "Live sound for the Microcosm event.", img: "" },
    ],
  }),
};
</script>

<style lang="sass">
.audio-eng
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
    max-width: 1100px
    margin: 0 auto
    padding: 0 24px

  .section-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.3rem
    margin: 0 0 16px
    color: white

  .info-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.1rem

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.95rem
    line-height: 1.8
    opacity: 0.85

  .card-actions
    display: flex
    flex-wrap: wrap
    gap: 12px
    padding: 8px 16px 16px

  .gig-card
    overflow: hidden
    height: 100%

  .gig-placeholder
    height: 180px
    background: linear-gradient(135deg, rgba(118,39,208,0.3), rgba(30,10,60,0.6))

  .card-sub
    font-family: 'Raleway', sans-serif
    opacity: 0.6
</style>