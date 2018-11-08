<template lang="pug">
  .wrapper
    Landing
    Welcome
    Skills
    Resume
    Contact
    Footer
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Welcome from "@/components/Welcome.vue";
import Skills from "@/components/Skills.vue";
import Resume from "@/components/Resume.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Landing,
    Welcome,
    Skills,
    Resume,
    Contact,
    Footer
  }
};
</script>
