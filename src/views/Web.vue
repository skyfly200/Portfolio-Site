<template lang="pug">
.web.skill
  v-fab(to="/software" flat location="top start" app).home-btn Back
  br
  h1 This portfolio site is built on my favorite modern stack
  br
  v-card.ma-2
    v-container(fluid grid-list)
      v-layout(row wrap).logos
        v-col(v-for="logo in siteTools").logo-flex
          a(:href="logo.url" target="_blank").logo-card
            v-img(:src="'/images/front-end/logos/' + logo.img" :id="logo.id" contain).logo
            h4 {{ logo.caption }}

  br
  GitHubBtn(text="View Source" repo="Portfolio-Site")
  br
  h1 Some other tools I like to use
  br
  v-card.ma-2
    v-container(fluid grid-list)
      v-layout(row wrap).logos
        v-col(v-for="logo in allTools").logo-flex
          a(:href="logo.url" target="_blank").logo-card
            v-img(:src="'/images/front-end/logos/' + logo.img" :id="logo.id" contain).logo
            h4 {{ logo.caption }}
  .disclaimer
    p All product and company names and logos are trademarks™ or registered® trademarks of their respective holders.
    p Use of them does not imply any affiliation with or endorsement by them.
  br
  v-divider
  h1 Projects
  v-container(fluid grid-list-large)
    v-layout(row wrap)
      v-col(v-for="site in sites" lg="3" md="4" sm="6" xs="12")
        v-card.ma-2
          a(:href="site.url" target="_blank")
            v-img(:src="site.img")
          v-card-title(primary-title)
            .headline {{ site.title }}
          v-card-text
            p {{ site.description }}
            h3 Technologies
            span
              v-chip(v-for="t in site.tech" outline color="white").tech {{ t }}
          v-divider
          v-card-actions.action-btns
            v-btn(:href="site.url" target="_blank" flat) Explore
            v-btn(:href="site.repo" target="_blank" flat) View Source

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "web",
  components: {
    GitHubBtn
  },
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
      allTools: [
        {
          caption: "Python",
          id: "python-logo",
          img: "python.png",
          url: "https://www.python.org/"
        },
        {
          caption: "PHP",
          id: "php-logo",
          img: "php.png",
          url: "http://php.net/"
        },
        {
          caption: "JS",
          id: "js-logo",
          img: "JS.png",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
          caption: "React",
          id: "react-logo",
          img: "react.png",
          url: "https://reactjs.org/"
        },
        {
          caption: "Webpack",
          id: "webpack-logo",
          img: "webpack.png",
          url: "https://webpack.js.org/"
        },
        {
          caption: "Bootstrap",
          id: "bootstrap-logo",
          img: "bootstrap.svg",
          url: "https://getbootstrap.com/"
        },
        {
          caption: "VuePress",
          id: "vuepress-logo",
          img: "vuepress.png",
          url: "https://vuepress.vuejs.org/"
        },
        {
          caption: "Git",
          id: "git-logo",
          img: "git.png",
          url: "https://git-scm.com/"
        },
        {
          caption: "DigitalOcean",
          id: "do-logo",
          img: "do.png",
          url: "https://www.digitalocean.com/"
        }
      ],
      sites: [
        {
          title: "TinyBoxes DAPP",
          img: "/images/front-end/tinybox.shop.png",
          description:
            "Site for minting and viewing NFTs stored on the Ethereum blockchain",
          tech: ["Solidity", "Hardhat", "Node", "Vue", "Netlify"],
          url: "http://tinybox.shop/",
          repo: "https://github.com/skyfly200/tiny-boxes"
        },
        {
          title: "Colorado Community Radio Network",
          img: "/images/front-end/coloradocommunityradio.png",
          description:
            "Official site to connect stations and share the purpose of our network",
          tech: ["PHP", "Bootstrap", "Digital Ocean"],
          url: "http://coloradocommunityradio.com",
          repo: "https://github.com/skyfly200/CCRN-Website"
        },
        {
          title: "Polytope Solutions",
          img: "/images/front-end/PolytopeSolutions.png",
          description: "Tech solutions consulting brand",
          tech: ["Vue", "Vuetify", "Netlify Functions", "Mailgun"],
          url: "https://polytopesolutions.com/",
          repo: "https://github.com/skyfly200/Polytope-Solutions"
        },
        {
          title: "Landscaping Website",
          img: "/images/front-end/daniel-vega.png",
          description:
            "Site for a local landscaping company to showcase their work",
          tech: ["Vue", "Nuxt", "Vuetify", "Netlify"],
          url: "https://earthaccents.netlify.app/",
          repo: "https://github.com/skyfly200/earth-accents-site"
        },
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
  h1
    padding: 2rem
  .disclaimer p
    font-size: 0.8rem
  .logos
    display: flex
    justify-content: flex-start
    align-items: left
  .tech 
    margin: 5px
  .logo-flex
    justify-content: center
    width: 200px
    @media (max-width: 700px)
      width: 150px
  .logo-card
    display: flex
    flex-direction: column
    align-items: center
      width: 200px
    @media (max-width: 700px)
      width: 150px
    h4
      text-align: center
      color: $color-secondary-2-0
  .action-btns a:visited
    color: white

  .logo
    margin: 30px
    width: 100px
    height: 100px
    @media (max-width: 700px)
      margin: 15px
      width: 75px
      height: 75px
  
  .home-btn
    a
      color: white

</style>
