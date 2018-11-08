<template lang="pug">
  .topic.wow(:id="hash")
    .icon-box
      .topic-icon
        span.fa-stack.fa-3x
          i.fa.fa-circle.fa-stack-2x
          i.fa.fa-stack-1x.fa-inverse(:class="icon")
    .topic-title
      h2 {{ name }}
    .topic-close
      a(href="#null")
        i.fa.fa-close.fa-2x
    .topic-content
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
  }
};
</script>

<style lang="sass">

</style>
