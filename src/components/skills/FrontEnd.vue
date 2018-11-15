<template lang="pug">
  .front-end.skill
    h2 This website represents my present skillset in front end design.
    h3 It utilizes modern tecnologies
    .logos
      img(src="/images/front-end/logos/html5.png").html5-logo.logo
      img(src="/images/front-end/logos/JS.png").js-logo.logo
      img(src="/images/front-end/logos/jquery.png").jquery-logo.logo
      img(src="/images/front-end/logos/sass.png").sass-logo.logo
      img(src="/images/front-end/logos/pug.png").pug-logo.logo
    h3 Features Responsive Layouts
    .responsive-pics
      img(src="/images/front-end/Mobile.png").mobile-pic.site-pic
      img(src="/images/front-end/Desktop.png").desktop-pic.site-pic
    h3 Build tasks are managed with Gulp
    .gulp-pics
      img(src="/images/front-end/GulpCode.jpg").gulp-code-pic.site-pic
      img(src="/images/front-end/logos/gulp.png").gulp-logo.logo
      img(src="/images/front-end/GulpTasks.jpg").gulp-tasks-pic.site-pic
    h3 Source Managed and Published with GitHub
    .site-github.github-button
      a(href="https://github.com/skyfly200/Portfolio-Site" target="_blank")
        button
          i.fa.fa-github.fa.lg
          span &nbsp;View the source code

</template>

<script>
export default {
  name: "front-end",
  components: {}
};
</script>

<style lang="sass">
  .front-end
    align-items: center
    flex-direction: column
    text-align: center
    .logos
      display: flex
      justify-content: center
      align-items: center
    .logo
      width: 15%
      height: 15%
    .responsive-pics
      display: flex
      justify-content: center
      align-items: center
      .mobile-pic
        width: 18%
        height: 18%
      .desktop-pic
        width: 75%
        height: 75%
      img
        margin: 10px
    .site-pic
      box-shadow: 0px 0px 5px #FFF
    .gulp-pics
      display: flex
      justify-content: center
      .mobile-pic
        width: auto
        height: 440px
      .desktop-pic
        width: auto
        height: 440px
      img
        margin: 10px
      .gulp-code-pic
        width: 30%
        height: 30%
      .gulp-logo
        height: 15%
      .gulp-tasks-pic
        width: 30%
        height: 30%
    .github-button
      display: flex
      justify-content: center
      button
        min-width: 355px
        font-size: 2em
        align-items: center
        @media (max-width: 380px)
          min-width: 240px
          font-size: 1.3em
    @media (max-width: 800px)
      .site-images a img
        width: 100%
</style>
