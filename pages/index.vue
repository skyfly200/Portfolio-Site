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
        button.hyphi-float__close(@click="hyphiVisible = false" aria-label="Close") ×
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
  bottom: 16px
  left: 16px
  z-index: 9999

  &__close
    position: absolute
    top: 6px
    right: 6px
    background: rgba(255, 255, 255, 0.08)
    border: 1px solid rgba(255, 255, 255, 0.2)
    color: rgba(255, 255, 255, 0.55)
    border-radius: 50%
    width: 20px
    height: 20px
    font-size: .9rem
    line-height: 1
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    padding: 0
    transition: color 0.2s, border-color 0.2s, background 0.2s
    &:hover
      color: white
      background: rgba(255, 255, 255, 0.15)
      border-color: rgba(255, 255, 255, 0.45)

.hyphi-pop-enter-active
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)

.hyphi-pop-leave-active
  transition: opacity 0.2s ease, transform 0.2s ease

.hyphi-pop-enter-from,
.hyphi-pop-leave-to
  opacity: 0
  transform: translateY(20px)
</style>
