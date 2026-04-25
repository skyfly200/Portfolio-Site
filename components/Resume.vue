<template lang="pug">
// Resume Download Section
.resume-download#resume
  ClientOnly
    .resume-header(data-aos="fade" data-aos-delay="200")
      h1 View my resume
    .resume-buttons
      .resume-button(data-aos="flip-down" data-aos-delay="100" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1eOP-9JIYIdzsZDjC8GpUtUooQatW6zjNYp13QWB6wqc/edit?usp=sharing", target="_blank")
          button.resume-btn.btn.btn-default.wow.zoomIn
            svg.fa.fa-cogs
            .btn-text &nbsp;Software and IT
      .resume-button(data-aos="flip-down" data-aos-delay="200" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1aF1ZYINRUTcA3LMiVBZYL5ojxHYw_V1haFGfZ_ALJtM/edit?usp=drivesdk", target="_blank")
          button.resume-btn.btn.btn-default.wow.zoomIn
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").svg-inline--fa.fa-w-16
              path(fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2h-1v2h1a1 1 0 0 1 0 2h-1v2h1a1 1 0 0 1 0 2h-1v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1H4a1 1 0 0 1 0-2h1v-2H4a1 1 0 0 1 0-2h1V9H4a1 1 0 0 1 0-2h1V4a2 2 0 0 1 2-2zm2 5v10h6V7H9zm1 2h4v2h-4V9zm0 4h4v2h-4v-2z")
            .btn-text &nbsp;Hardware
      .resume-button(data-aos="flip-down" data-aos-delay="300" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1zUutU1to6t_TuzwV2zGfHN0kTeCDZ00fRqHvL5A_n-Y/edit?usp=sharing", target="_blank")
          button.resume-btn.btn.btn-default.wow.zoomIn
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").ethereum-icon.svg-inline--fa.fa-w-16
              path(fill="currentColor" d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z")
            .btn-text &nbsp;Web3
      .resume-button(data-aos="flip-down" data-aos-delay="400" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1SrNxaV6kmGSgyJfo2iXVY9L-e66pVPKJBvSu4CQSrsk/edit?usp=sharing", target="_blank")
          button.resume-btn.btn.btn-default.wow.zoomIn
            svg.fa.fa-film
            .btn-text &nbsp;Multimedia


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
    margin-top: 50px
    margin-bottom: 30px
  @media (max-width: 768px)
    padding-top: 60px

  .resume-buttons
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: flex-start
    margin-bottom: 20px

    .resume-button
      flex: 0 0 calc(40% - 20px)
      margin: 10px
      display: flex
      a
        display: block
        width: 100%

    button.resume-btn
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      padding: 12px 10px
      font-size: 1.4em
      background-color: rgba(0,0,0,0.8)
      color: #FFF
      border-radius: 0px
      border: 1px solid white
      font-family: 'Nixie One', sans-serif
      box-shadow: 1px 2px 5px rgba(0,0,0,1)
      transition: all 150ms ease-in-out
      &:hover, &:active
        box-shadow: 0px 5px 15px rgba(0,0,0,1)
        background-color: rgba(255,255,255,0.8)
        color: #000

    @media (max-width: 768px)
      .resume-button
        flex: 0 0 calc(80% - 20px)
        margin: 8px auto

</style>
