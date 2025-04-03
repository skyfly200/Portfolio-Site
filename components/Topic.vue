<template lang="pug">
router-link.topic.wow(:to="link")
  .icon-box
    .topic-icon
      span.fa-stack.fa-3x
        svg.fas.fa-circle.fa-stack-2x
        svg.fa.fa-stack-1x.fa-inverse(:class="icon")
  .topic-title
    h1 {{ name }}
  .topic-list
      p(v-for="line in summary") {{ line }}
</template>

<script>
export default {
  name: "topic",
  props: {
    link: String,
    icon: String,
    name: String,
    summary: Array
  }
};
</script>

<style lang="sass">
@import "~/assets/sass/vars.sass" // Adjust the path to your global SASS file
@import "~/assets/sass/mixins.sass" // Adjust the path to your global SASS file

.topic
  padding: 10px 10px
  margin: 0px
  height: auto
  min-height: 250px
  max-width: 33%
  flex-basis: 33%
  animation: 500ms ease-in-out 1 fadeIn
  transition: all 200ms
  text-decoration: none

  .icon-box
    @extend .flex-box-center
    color: $grey-0
    .topic-icon
      margin: 10px
      padding: 0px
      text-shadow: 2px 5px 15px rgba(0,0,0,1)
      transition: text-shadow
      .fa-circle
        width: 1em

    .fa-inverse
      color: $color-primary-1
      text-shadow: none
      text-shadow: 0px 0px 1px rgba(255,255,255,0.75)

  .topic-title
    text-align: center
    margin: 10px

  .topic-list
    text-align: center
    font-size: 125%
    color: $grey-0

  &:hover
    background-color: $grey-0
    color: #FFF
    .topic-list
      color: #FFF
    .topic-icon
      color: $color-primary-4
      .fa-inverse
        color: #FFF
        text-shadow: 0px 0px 5px rgba(255,255,255,0.75)

  @media (max-width: 1124px)
    max-width: 33%
    flex: 33%

  @media (max-width: 570px)
    max-width: 100%
    flex: 100%
</style>
