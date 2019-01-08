<template lang="pug">
  .web.skill
    h1 This portfolio site is built with these modern tools
    br
    v-container(fluid grid-list)
      v-layout(row wrap).logos
        v-flex(v-for="logo in siteTools")
          a(:href="logo.url" target="_blank").logo-card
            v-img(:src="'/images/front-end/logos/' + logo.img" :id="logo.id" contain).logo
            h4 {{ logo.caption }}

    br
    .site-github.github-button
      v-btn(href="https://github.com/skyfly200/Portfolio-Site" target="_blank" color="primary")
        svg.fab.fa-github.fa-lg
        span &nbsp;View Source

    br
    h1 Some other tools I use
    br
    v-container(fluid grid-list)
      v-layout(row wrap).logos
        v-flex(v-for="logo in allTools")
          a(:href="logo.url" target="_blank").logo-card
            v-img(:src="'/images/front-end/logos/' + logo.img" :id="logo.id" contain).logo
            h4 {{ logo.caption }}
    br
    h1 Projects
    v-container(fluid grid-list-large)
      v-layout(row wrap)
        v-flex(v-for="site in sites" md6)
          v-card.ma-2
            a(:href="site.url" target="_blank")
              v-img(:src="site.img")
            v-card-title(primary-title)
              .headline {{ site.title }}
            v-card-text
              p {{ site.description }}
              h3 Technologies
              span
                v-chip(v-for="t in site.tech" outline color="white") {{ t }}
            v-divider
            v-card-actions
              v-btn(:href="site.url" target="_blank" flat) Explore
              v-btn(:href="site.repo" target="_blank" flat) View Source

</template>

<script>
export default {
  name: "web",
  components: {},
  data: function() {
    return {
      siteTools: [
        {
          caption: "Vue",
          id: "vue-logo",
          img: "vue.png",
          url: "https://vuejs.org/"
        },
        {
          caption: "Vuetify",
          id: "vuetify-logo",
          img: "vuetify.svg",
          url: "https://vuetifyjs.com/"
        },
        {
          caption: "SASS",
          id: "sass-logo",
          img: "sass.png",
          url: "https://sass-lang.com/"
        },
        {
          caption: "Pug",
          id: "pug-logo",
          img: "pug.png",
          url: "https://pugjs.org"
        },
        {
          caption: "Netlify",
          id: "netlify-logo",
          img: "netlify.png",
          url: "https://www.netlify.com/"
        },
        {
          caption: "GCP",
          id: "gcp-logo",
          img: "gcp.png",
          url: "https://cloud.google.com"
        }
      ],
      sallTools: [
        {
          caption: "JS",
          id: "js-logo",
          img: "js.png",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
      ],
      sites: [
        {
          title: "Black Kettle Mountain Petition",
          img: "/images/front-end/black-kettle-mountain.png",
          description: "Site Description",
          tech: ["Vue", "Pug", "Sass", "Express", "Google Cloud"],
          url: "http://black-kettle-mountain.appspot.com/",
          repo: "https://github.com/skyfly200/black-kettle-mtn"
        },
        {
          title: "Daniel Vega",
          img: "/images/front-end/daniel-vega.png",
          description: "Site Description",
          tech: ["VuePress", "Vuetify", "NetlifyCMS"],
          url: "https://daniel-vega.netlify.com",
          repo: "https://github.com/skyfly200/Daniel-Vega-Site"
        },
        {
          title: "Colorado Community Radio Network",
          img: "/images/front-end/coloradocommunityradio.png",
          description: "Site Description",
          tech: ["PHP", "Bootstrap", "Digital Ocean"],
          url: "http://coloradocommunityradio.com",
          repo: "https://github.com/skyfly200/CCRN-Website"
        },
        {
          title: "Polytope Solutions",
          img: "/images/front-end/PolytopeSolutions.png",
          description: "Site Description",
          tech: ["Vue", "Vuetify", "Netlify Functions", "Mailgun"],
          url: "https://polytopesolutions.com/",
          repo: "https://github.com/skyfly200/Polytope-Solutions"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
  .web
    align-items: center
    flex-direction: column
    text-align: center
    .logos
      display: flex
      justify-content: center
      align-items: center
    .logo-card
      display: flex
      flex-direction: column
      align-items: center
      width: 150px
      h4
        text-align: center
        color: $color-secondary-2-0
    .logo
      width: 150px
      height: 150px
      @media (max-width: 700px)
        width: 100px
        height: 100px
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
</style>
