<template lang="pug">
// Resume Download Section
.resume-download#resume
  .resume-header(data-aos="fade" data-aos-delay="200")
    h1 Download my resume
  .resume-buttons
    .resume-button(data-aos="flip-down" data-aos-delay="200" data-aos-duration="750")
      a(href="https://docs.google.com/document/d/1LhEbXxxuoJ2cZf7JwBqwVxxfu7WX4ovKvswWQmyxmn0/edit?usp=sharing", target="_blank")
        button.resume-btn.btn.btn-default.wow.zoomIn
          svg.fa.fa-cogs
          .btn-text &nbsp;Software
    .resume-button(data-aos="flip-down" data-aos-delay="200" data-aos-duration="750")
      a(href="https://docs.google.com/document/d/1zUutU1to6t_TuzwV2zGfHN0kTeCDZ00fRqHvL5A_n-Y/edit?usp=sharing", target="_blank")
        button.resume-btn.btn.btn-default.wow.zoomIn
          svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24").ethereum-icon
            path(fill="currentColor" d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z")
          .btn-text &nbsp;Web3
    .resume-button(data-aos="flip-down" data-aos-delay="200" data-aos-duration="750")
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
  padding: 10px
  background-color: $color-secondary-2-2
  @extend .flex-box-center
  flex-direction: column
  text-align: center
  @include card-depth(4)
  .resume-header
    margin-top: 30px

  .resume-buttons
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    margin-bottom: 40px
    button.resume-btn
      min-width: 200px
      display: flex
      justify-content: center
      align-items: center
      margin: 30px
      padding: 5px 15px
      font-size: 180%
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

    @media (max-width: 900px)
      button.resume-btn
        margin: 10px
        font-size: 1.8em
        padding-left: 15px
        padding-right: 15px
    @media (max-width: 700px)
      flex-direction: column
      justify-content: center
      padding: 10px
      button.resume-btn
        margin: 20px 0px
        padding: 10px 20px

</style>
