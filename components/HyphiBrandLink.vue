<template lang="pug">
a.hyphi-brand-link(href="https://hyphi.art" target="_blank" rel="noopener noreferrer")
  img.hyphi-brand-link__logo(src="/ColorLogo.svg" alt="Hyphi")
  .hyphi-brand-link__text
    span.hyphi-brand-link__cta Check out my new Lighting Brand
    span.hyphi-brand-link__name HYPHI
    span.hyphi-brand-link__arrow →
</template>

<script>
export default {
  name: "HyphiBrandLink"
}
</script>

<style lang="sass" scoped>
.hyphi-brand-link
  display: inline-flex
  align-items: center
  gap: 1rem
  padding: .75rem 1.25rem .75rem 1rem
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

  &__logo
    width: 40px
    height: 40px
    flex-shrink: 0

  &__text
    display: flex
    flex-direction: column
    gap: .1rem

  &__cta
    font-size: .8rem
    color: #7a7a9a
    letter-spacing: .03em

  &__name
    font-size: 1.5rem
    letter-spacing: .12em
    background: linear-gradient(to right, #7b5cfa, #ff6b35)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    line-height: 1

  &__arrow
    font-size: 1.1rem
    color: #7a7a9a
    margin-left: .25rem
    transition: color 0.2s, transform 0.2s

  &:hover &__arrow
    color: #ff6b35
    transform: translateX(3px)
</style>
