<template lang="pug">
a.hyphi-brand-link(href="https://hyphi.art" target="_blank" rel="noopener noreferrer")
  span.hyphi-brand-link__cta Check out my new Lighting Brand
  .hyphi-brand-link__brand
    img.hyphi-brand-link__logo(src="/ColorLogo.svg" alt="Hyphi")
    span.hyphi-brand-link__name HYPHI
</template>

<script>
export default {
  name: "HyphiBrandLink"
}
</script>

<style lang="sass" scoped>
.hyphi-brand-link
  display: inline-flex
  flex-direction: column
  align-items: center
  gap: .5rem
  padding: 1.25rem 2rem
  border-radius: 6px
  border: 1px solid rgba(123, 92, 250, 0.3)
  background: rgba(10, 10, 15, 0.6)
  backdrop-filter: blur(8px)
  text-decoration: none
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s

  &:hover
    border-color: rgba(255, 107, 53, 0.5)
    box-shadow: 0 0 20px rgba(123, 92, 250, 0.12), 0 0 40px rgba(255, 107, 53, 0.06)
    transform: translateY(-1px)

  &__cta
    font-size: .8rem
    color: rgba(255, 255, 255, 0.65)
    letter-spacing: .03em

  &__brand
    display: flex
    align-items: center
    gap: .6rem

  &__logo
    width: 40px
    height: 40px
    flex-shrink: 0

  &__name
    font-size: 2rem
    letter-spacing: .12em
    background: linear-gradient(to right, #d8c8ff, #ffc4a0)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    line-height: 1

  &:hover &__name
    background: linear-gradient(to right, #b09ae8, #f09060)
    -webkit-background-clip: text
    background-clip: text
</style>
