<template lang="pug">
.wrapper
  Landing
  Welcome
  Skills
  Resume
  Quote
  Contact
  Footer
  Teleport(to="body")
    Transition(name="hyphi-pop")
      .hyphi-float(v-if="hyphiVisible")
        HyphiBrandLink
</template>

<script>
import HyphiBrandLink from "../components/HyphiBrandLink.vue";

export default {
  name: "home",
  components: { HyphiBrandLink },
  data: () => ({ hyphiVisible: false }),
  mounted() {
    const welcome = document.querySelector("#welcome");
    if (!welcome) return;
    this._hyphiObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) this.hyphiVisible = true; },
      { threshold: 0.2 }
    );
    this._hyphiObserver.observe(welcome);
  },
  beforeUnmount() {
    if (this._hyphiObserver) this._hyphiObserver.disconnect();
  },
};
</script>

<style lang="sass">
.wrapper footer
  z-index: 400
  @include card-depth(5)
  h4
    color: black
  button
    margin: 20px 0px
    padding: 5px 10px
    min-width: 200px
    font-size: 1.4em
    box-shadow: 0px 1px 3px #000
    font-family: 'Nixie One', sans-serif
    @media (max-width: 600px)
      font-size: 1.6em

.hyphi-float
  position: fixed
  bottom: 24px
  left: 50%
  transform: translateX(-50%)
  z-index: 9999

.hyphi-pop-enter-active
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)

.hyphi-pop-enter-from
  opacity: 0
  transform: translateX(-50%) translateY(20px)
</style>
