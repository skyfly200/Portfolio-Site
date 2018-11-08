<template lang="pug">
  // Resume Download Section
  .resume-download#resume
    .resume-header.wow.fadeInDown
      h1 Download my resume
    .resume-buttons.wow.fadeInUp
      a(href="https://docs.google.com/document/d/1LhEbXxxuoJ2cZf7JwBqwVxxfu7WX4ovKvswWQmyxmn0/edit?usp=sharing", target="_blank")
        button.resume-btn.btn.btn-default.wow.zoomIn
          i.fa.fa-cogs &nbsp;
          .btn-text Software
      a(href="https://docs.google.com/document/d/1SrNxaV6kmGSgyJfo2iXVY9L-e66pVPKJBvSu4CQSrsk/edit?usp=sharing", target="_blank")
        button.resume-btn.btn.btn-default.wow.zoomIn
          i.fa.fa-film &nbsp;
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
        width: 200px
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
          box-shadow: 2px 5px 10px rgba(0,0,0,1)
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
