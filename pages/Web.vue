<template lang="pug">
.web.skill

  v-btn(href="/software" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    span Software

  .page-header(data-aos="fade-down")
    .header-eyebrow Software
    h1.header-title Full-Stack Web Development
    p.header-sub Modern stacks, responsive design, and production-grade applications — from prototype to deployment.

  v-divider.my-6

  .content-wrap

    .section-title This portfolio is built on my favourite modern stack

    v-card.logo-card.mb-6
      v-card-text
        .logos-grid
          a.logo-item(v-for="logo in siteTools" :key="logo.id" :href="logo.url" target="_blank")
            v-img(:src="'/images/front-end/logos/' + logo.img" :id="logo.id" contain height="80" width="80")
            span.logo-caption {{ logo.caption }}

    .source-btn.mb-8
      v-btn(color="primary" variant="outlined" href="https://github.com/skyfly200/Portfolio-Site" target="_blank")
        i.fab.fa-github.mr-2
        span View Source

    .section-title Other tools I like to use

    v-card.logo-card.mb-8
      v-card-text
        .logos-grid
          a.logo-item(v-for="logo in allTools" :key="logo.id" :href="logo.url" target="_blank")
            v-img(:src="'/images/front-end/logos/' + logo.img" :id="logo.id" contain height="80" width="80")
            span.logo-caption {{ logo.caption }}

    p.disclaimer All product and company names and logos are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.

    v-divider.my-6

    .section-title Projects

    v-row
      v-col(v-for="site in sites" :key="site.title" cols="12" sm="6" lg="4")
        v-card.skill-card
          a(:href="site.url" target="_blank")
            v-img(v-if="site.img" :src="site.img" cover height="180")
            .card-placeholder(v-else)
              img.brand-logo(v-if="site.logo" :src="site.logo" alt="logo")
              i.fas(v-else :class="site.placeholderIcon || 'fa-code'")
          v-card-title.card-title {{ site.title }}
          v-card-text
            p.card-body {{ site.description }}
            .tech-chips
              v-chip(v-for="t in site.tech" :key="t" size="x-small" variant="tonal" color="primary" class="mr-1 mb-1") {{ t }}
          v-card-actions
            v-btn(variant="outlined" color="primary" :href="site.url" target="_blank")
              i.fas.fa-external-link-alt.mr-2
              span Explore
            v-btn(v-if="site.repo" variant="text" color="primary" :href="site.repo" target="_blank")
              i.fab.fa-github.mr-2
              span Source

    v-divider.my-8

    .section-title AI-Assisted Development Workflow

    .workflow-card.mb-6
      p.workflow-intro This site is built and iterated using an AI-powered pipeline — from a plain-English prompt to a live preview in minutes, with no manual deployment steps.
      .workflow-pipeline
        .pipeline-step
          .step-icon
            i.fas.fa-comment-alt
          .step-label Prompt
        .pipeline-arrow
          i.fas.fa-chevron-right
        .pipeline-step
          .step-icon
            i.fas.fa-robot
          .step-label Claude Code
        .pipeline-arrow
          i.fas.fa-chevron-right
        .pipeline-step
          .step-icon
            i.fab.fa-github
          .step-label GitHub Push
        .pipeline-arrow
          i.fas.fa-chevron-right
        .pipeline-step
          .step-icon
            i.fas.fa-cogs
          .step-label Netlify CI/CD
        .pipeline-arrow
          i.fas.fa-chevron-right
        .pipeline-step
          .step-icon
            i.fas.fa-rocket
          .step-label Live Preview
      .workflow-details
        .detail-item
          i.fas.fa-check-circle.detail-icon
          span Claude Code agents read, edit, and commit code changes autonomously
        .detail-item
          i.fas.fa-check-circle.detail-icon
          span Each push triggers an automatic Netlify build with a unique preview URL
        .detail-item
          i.fas.fa-check-circle.detail-icon
          span Changes go from idea to testable preview in under two minutes
</template>

<script>
export default {
  name: "web",
  data: () => ({
    siteTools: [
      { caption: "Vue",     id: "vue-logo",     img: "vue.png",     url: "https://vuejs.org/" },
      { caption: "Vuetify", id: "vuetify-logo", img: "vuetify.svg", url: "https://vuetifyjs.com/" },
      { caption: "SASS",    id: "sass-logo",    img: "sass.png",    url: "https://sass-lang.com/" },
      { caption: "Pug",     id: "pug-logo",     img: "pug.png",     url: "https://pugjs.org" },
      { caption: "Netlify", id: "netlify-logo", img: "netlify.png", url: "https://www.netlify.com/" },
      { caption: "GCP",     id: "gcp-logo",     img: "gcp.png",     url: "https://cloud.google.com" },
    ],
    allTools: [
      { caption: "Python",       id: "python-logo",    img: "python.png",    url: "https://www.python.org/" },
      { caption: "PHP",          id: "php-logo",       img: "php.png",       url: "http://php.net/" },
      { caption: "JS",           id: "js-logo",        img: "JS.png",        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { caption: "React",        id: "react-logo",     img: "react.png",     url: "https://reactjs.org/" },
      { caption: "Webpack",      id: "webpack-logo",   img: "webpack.png",   url: "https://webpack.js.org/" },
      { caption: "Bootstrap",    id: "bootstrap-logo", img: "bootstrap.svg", url: "https://getbootstrap.com/" },
      { caption: "VuePress",     id: "vuepress-logo",  img: "vuepress.png",  url: "https://vuepress.vuejs.org/" },
      { caption: "Git",          id: "git-logo",       img: "git.png",       url: "https://git-scm.com/" },
      { caption: "DigitalOcean", id: "do-logo",        img: "do.png",        url: "https://www.digitalocean.com/" },
    ],
    sites: [
      { title: "Bright Waves", img: "", logo: "/images/bright-waves-logo.svg", description: "Generative algorithmic art portfolio for the Bright Waves creative brand — interactive sketches and procedural visuals built with JavaScript and Canvas.", tech: ["JavaScript","Canvas API","WebGL","Netlify"], url: "https://algo-sketch.netlify.app/", repo: "" },
      { title: "Nedernet Channel Planner", img: "", placeholderIcon: "fa-wifi", description: "A visual React tool for planning WiFi frequency band assignments across mesh ISP network nodes — built to minimize interference and optimize channel allocation.", tech: ["React","CSS","CodePen"], url: "https://codepen.io/skyfly200/pen/aqemgp", repo: "" },
      { title: "Hyphi", img: "/images/front-end/hyphi.png", description: "Site for an open-source LED art hardware design company crafting luminescent pieces for live events, flow arts, and living spaces.", tech: ["HTML","Netlify"], url: "https://hyphi.art/", repo: "" },
      { title: "Hyphi Tools", img: "/images/front-end/hyphi-tools.png", description: "A set of tools for origami design, QR code generation, and link shortening.", tech: ["React","Vue","Rabbit Ear"], url: "https://tools.hyphi.art/", repo: "https://github.com/skyfly200/hyphi-tools" },
      { title: "Front Range Mycological Society", img: "/images/front-end/frms.png", description: "A website for the Front Range Mycological Society, exploring the world of fungi through education, forays, and community building.", tech: ["Vue","Nuxt","Markdown","Netlify"], url: "https://frontrangemycosociety.org/", repo: "https://github.com/skyfly200/frms-site" },
      { title: "TinyBoxes DAPP", img: "/images/front-end/tinybox.shop.png", description: "Site for minting and viewing NFTs stored on the Ethereum blockchain.", tech: ["Solidity","Hardhat","Node","Vue","Netlify"], url: "http://tinybox.shop/", repo: "https://github.com/skyfly200/tiny-boxes" },
      { title: "Polytope Solutions", img: "/images/front-end/PolytopeSolutions.png", description: "Tech solutions consulting brand.", tech: ["Vue","Vuetify","Netlify Functions","Mailgun"], url: "https://polytopesolutions.com/", repo: "https://github.com/skyfly200/Polytope-Solutions" },
      { title: "Landscaping Website", img: "/images/front-end/earth-accents.png", description: "Site for a local landscaping company to showcase their work.", tech: ["Vue","Nuxt","Vuetify","Netlify"], url: "https://earthaccents.netlify.app/", repo: "https://github.com/skyfly200/earth-accents-site" },
      { title: "Colorado Community Radio Network", img: "/images/front-end/coloradocommunityradio.png", description: "Official site to connect stations and share the purpose of our network.", tech: ["PHP","Bootstrap","Digital Ocean"], url: "http://coloradocommunityradio.com", repo: "https://github.com/skyfly200/CCRN-Website" },
    ],
  }),
};
</script>

<style lang="sass">
.web
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
    font-size: 1.4rem
    margin-bottom: 16px
    color: white

  .logo-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important

  .logos-grid
    display: flex
    flex-wrap: wrap
    gap: 24px
    justify-content: center

  .logo-item
    display: flex
    flex-direction: column
    align-items: center
    gap: 8px
    text-decoration: none
    opacity: 0.8
    transition: opacity 0.2s
    &:hover
      opacity: 1

  .logo-caption
    font-family: 'Raleway', sans-serif
    font-size: 0.8rem
    color: rgba(255,255,255,0.7)
    text-align: center

  .source-btn
    text-align: center

  .disclaimer
    font-family: 'Raleway', sans-serif
    font-size: 0.78rem
    opacity: 0.45
    text-align: center
    margin-bottom: 8px

  .skill-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important
    overflow: hidden
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s
    height: 100%

    &::after
      content: ''
      display: block
      height: 2px
      width: 0
      background: linear-gradient(90deg, #7627D0, #a855f7)
      transition: width 0.3s ease

    &:hover
      border-color: rgba(118, 39, 208, 0.7) !important
      transform: translateY(-3px)
      box-shadow: 0 6px 24px rgba(118, 39, 208, 0.25) !important
      &::after
        width: 100%

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.05rem

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.88rem
    line-height: 1.7
    opacity: 0.82
    margin-bottom: 8px

  .tech-chips
    display: flex
    flex-wrap: wrap

  .card-placeholder
    height: 180px
    display: flex
    align-items: center
    justify-content: center
    background: linear-gradient(135deg, rgba(118,39,208,0.2), rgba(168,85,247,0.1))
    font-size: 3rem
    color: rgba(255,255,255,0.25)
    .brand-logo
      max-height: 120px
      max-width: 75%
      object-fit: contain
      filter: brightness(0) invert(1)
      opacity: 0.85
      transition: opacity 0.2s
    &:hover .brand-logo
      opacity: 1

  .workflow-card
    background: rgba(255,255,255,0.04)
    border: 1px solid rgba(255,255,255,0.08)
    border-radius: 12px
    padding: 28px 28px 20px

  .workflow-intro
    font-family: 'Raleway', sans-serif
    font-size: 0.95rem
    line-height: 1.7
    opacity: 0.75
    margin-bottom: 28px

  .workflow-pipeline
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
    gap: 8px
    margin-bottom: 28px

  .pipeline-step
    display: flex
    flex-direction: column
    align-items: center
    gap: 8px
    .step-icon
      width: 52px
      height: 52px
      border-radius: 50%
      background: rgba(118,39,208,0.25)
      border: 1px solid rgba(118,39,208,0.5)
      display: flex
      align-items: center
      justify-content: center
      font-size: 1.2rem
      color: #a855f7
    .step-label
      font-family: 'Raleway', sans-serif
      font-size: 0.75rem
      opacity: 0.7
      text-align: center

  .pipeline-arrow
    color: rgba(118,39,208,0.6)
    font-size: 1.1rem
    margin-bottom: 20px
    @media (max-width: 500px)
      display: none

  .workflow-details
    display: flex
    flex-direction: column
    gap: 10px
    border-top: 1px solid rgba(255,255,255,0.06)
    padding-top: 20px

  .detail-item
    display: flex
    align-items: flex-start
    gap: 10px
    font-family: 'Raleway', sans-serif
    font-size: 0.88rem
    line-height: 1.6
    opacity: 0.75
    .detail-icon
      color: #7627D0
      margin-top: 2px
      flex-shrink: 0
</style>