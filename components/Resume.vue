<template lang="pug">
// Resume Download Section
.resume-download#resume
  ClientOnly
    .resume-header(data-aos="fade" data-aos-delay="200")
      h1 View my resume
    .resume-buttons
      .resume-button(data-aos="flip-down" data-aos-delay="100" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1eOP-9JIYIdzsZDjC8GpUtUooQatW6zjNYp13QWB6wqc/edit?usp=sharing", target="_blank")
          button.resume-btn
            i.fas.fa-cogs
            .btn-text Software &amp; IT
      .resume-button(data-aos="flip-down" data-aos-delay="200" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1YRo70HkkRz94AQ7oEAPIKkPbyw5t5kzFkKZDYlIV0Lw/edit?usp=sharing", target="_blank")
          button.resume-btn
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").svg-inline--fa.fa-w-16
              path(fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2h-1v2h1a1 1 0 0 1 0 2h-1v2h1a1 1 0 0 1 0 2h-1v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1H4a1 1 0 0 1 0-2h1v-2H4a1 1 0 0 1 0-2h1V9H4a1 1 0 0 1 0-2h1V4a2 2 0 0 1 2-2zm2 5v10h6V7H9zm1 2h4v2h-4V9zm0 4h4v2h-4v-2z")
            .btn-text Hardware
      .resume-button(data-aos="flip-down" data-aos-delay="300" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1zUutU1to6t_TuzwV2zGfHN0kTeCDZ00fRqHvL5A_n-Y/edit?usp=sharing", target="_blank")
          button.resume-btn
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").ethereum-icon.svg-inline--fa.fa-w-16
              path(fill="currentColor" d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z")
            .btn-text Web3
      .resume-button(data-aos="flip-down" data-aos-delay="400" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1SrNxaV6kmGSgyJfo2iXVY9L-e66pVPKJBvSu4CQSrsk/edit?usp=sharing", target="_blank")
          button.resume-btn
            i.fas.fa-film
            .btn-text Multimedia


</template>

<script>
export default {
  name: "resume",
  components: {}
};
</script>

<style lang="sass">
// Resume Download Styles
.resume-download
  width: 100%
  padding: 30px
  background-color: $color-secondary-2-2
  @extend .flex-box-center
  flex-direction: column
  text-align: center
  @include card-depth(4)
  .resume-header
    margin-top: 30px
    margin-bottom: 30px
  @media (max-width: 768px)
    padding-top: 60px

  .resume-buttons
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: stretch
    gap: 24px
    max-width: 900px
    margin-bottom: 40px

    .resume-button
      flex: 0 0 200px
      display: flex
      a
        display: block
        width: 100%

    button.resume-btn
      width: 100%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      gap: 14px
      padding: 32px 20px
      background-color: transparent
      color: #FFF
      border: 2px solid rgba(255,255,255,0.6)
      border-radius: 14px
      font-family: 'Nixie One', sans-serif
      cursor: pointer
      transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease
      svg
        height: 2.4em
        width: 2.4em
        transition: transform 180ms ease
      i
        font-size: 2.4em
        transition: transform 180ms ease
      .btn-text
        font-size: 1.15em
        letter-spacing: 0.03em
      &:hover, &:focus-visible
        transform: translateY(-5px)
        border-color: #fff
        background-color: rgba(255,255,255,0.12)
        box-shadow: 0px 10px 26px rgba(0,0,0,0.55)
        svg, i
          transform: scale(1.12)

    @media (max-width: 768px)
      .resume-button
        flex: 0 0 calc(50% - 24px)
    @media (max-width: 420px)
      .resume-button
        flex: 0 0 100%

</style>
