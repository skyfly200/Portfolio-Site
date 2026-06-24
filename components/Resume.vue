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
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").resume-icon
              path(fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z")
            .btn-text &nbsp;Software and IT
      .resume-button(data-aos="flip-down" data-aos-delay="200" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1YRo70HkkRz94AQ7oEAPIKkPbyw5t5kzFkKZDYlIV0Lw/edit?usp=sharing", target="_blank")
          button.resume-btn.btn.btn-default.wow.zoomIn
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").resume-icon
              path(fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2h-1v2h1a1 1 0 0 1 0 2h-1v2h1a1 1 0 0 1 0 2h-1v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1H4a1 1 0 0 1 0-2h1v-2H4a1 1 0 0 1 0-2h1V9H4a1 1 0 0 1 0-2h1V4a2 2 0 0 1 2-2zm2 5v10h6V7H9zm1 2h4v2h-4V9zm0 4h4v2h-4v-2z")
            .btn-text &nbsp;Hardware
      .resume-button(data-aos="flip-down" data-aos-delay="300" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1zUutU1to6t_TuzwV2zGfHN0kTeCDZ00fRqHvL5A_n-Y/edit?usp=sharing", target="_blank")
          button.resume-btn.btn.btn-default.wow.zoomIn
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").resume-icon
              path(fill="currentColor" d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z")
            .btn-text &nbsp;Web3
      .resume-button(data-aos="flip-down" data-aos-delay="400" data-aos-duration="750" data-aos-anchor="#resume")
        a(href="https://docs.google.com/document/d/1SrNxaV6kmGSgyJfo2iXVY9L-e66pVPKJBvSu4CQSrsk/edit?usp=sharing", target="_blank")
          button.resume-btn.btn.btn-default.wow.zoomIn
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24").resume-icon
              path(fill="currentColor" d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z")
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
    margin-top: 30px
    margin-bottom: 30px
  @media (max-width: 768px)
    padding-top: 60px

  .resume-buttons
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: flex-start
    margin-bottom: 40px

    .resume-button
      flex: 0 0 calc(40% - 40px)
      margin: 20px
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
      svg.resume-icon
        width: 1.5em
        height: 1.5em
        flex-shrink: 0
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
