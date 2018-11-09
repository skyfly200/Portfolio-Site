<template lang="pug">
  a.topic.wow(:id="hash" v-on:click="showTopic")
    .icon-box
      .topic-icon
        span.fa-stack.fa-3x
          i.fa.fa-circle.fa-stack-2x
          i.fa.fa-stack-1x.fa-inverse(:class="icon")
    .topic-title
      h2 {{ name }}
    .topic-cont
      .topic-short
        p(v-for="line in summary") {{ line }}
</template>

<script>
export default {
  name: "topic",
  props: {
    hash: String,
    icon: String,
    name: String,
    summary: Array
  },
  methods: {
    showTopic() {
      this.$store.commit("showTopic", this.hash);
    }
  }
};
</script>

<style lang="sass">
  .topic
    padding: 10px 10px
    margin: 0px
    height: auto
    min-height: 250px
    max-width: 25%
    flex-basis: 25%
    animation: 500ms ease-in-out 1 fadeIn
    transition: all 200ms

    .icon-box
      @extend .flex-box-center
      color: $grey-0
      .topic-icon
        padding: 0px
        text-shadow: 2px 5px 15px rgba(0,0,0,1)
        transition: text-shadow 2s

    .fa-inverse
      color: $color-primary-1
      text-shadow: none
      text-shadow: 0px 0px 1px rgba(255,255,255,0.75)

    .topic-title
      text-align: center
      text-shadow: 0px 2px 5px rgba(0,0,0,0.75)

    .topic-short
      text-align: center
      font-size: 135%

    .topic-close
      display: none
      float: right
      position: relative
      top: -9.5vh
      right: 3vh
      a
        color: #FFF
      @media (max-width: 320px)
        top: -12vh
        right: 1vh

    &:hover
      background-color: $grey-0
      color: #FFF
      .topic-icon
        color: $color-primary-4
        .fa-inverse
          color: #FFF
          text-shadow: 0px 0px 5px rgba(255,255,255,0.75)

    @media (max-width: 1124px)
      max-width: 50%
      flex: 50%

    @media (max-width: 570px)
      max-width: 100%
      flex: 100%

    &.topic-expanded
      order: -1
      flex: 100%
      max-width: 100%
      //min-height: 100vh
      color: #FFF
      background-color: $grey-0
      padding: 0px
      .icon-box
        float: left
        z-index: 21
      .topic-icon
        color: $color-primary-4
        .fa-inverse
          color: #FFF
          text-shadow: 0px 0px 5px rgba(255,255,255,0.75)
      .topic-title
        text-align: left
        position: relative
        padding: 0px
        margin: 0px
        top: 5px
        left: 20px
        @media (max-width: 400px)
          h2
            font-size: 1.8em
        @media (max-width: 350px)
          h2
            font-size: 1.5em
      .topic-short
        display: none
      .topic-close
        display: block
        margin-top: 10px
      .topic-full
        display: flex
        justify-content: center
</style>
