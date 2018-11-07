<template lang="pug">
  .wrapper
    Landing
    //- include views/welcome.pug
    //- include views/skills.pug
    //- include views/blog-preview.pug
    //- include views/resume.pug
    //- include views/contact.pug
    Footer
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Landing,
    Footer
  }
};
</script>
