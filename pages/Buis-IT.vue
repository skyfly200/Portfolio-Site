<template lang="pug">
.buis-it.skill
  v-fab(to="/services" flat location="top start" app).home-btn Back
  .buis-it-info
    .headline
      h1 Buisness IT Solutions
    v-container
      v-row
        v-col(cols="12" md="6" lg="4")
          v-card
            v-card-title Buisness IT Solutions
            v-card-text
              | I provide comprehensive IT solutions for small to medium-sized businesses, including network setup and management, cybersecurity, cloud services, and hardware/software procurement. My goal is to help businesses streamline their operations and enhance productivity through effective technology solutions.
            v-card-actions
              v-btn(text href="mailto:buisness-it@skylerfly.com" target="_blank") Contact Me
</template>

<script>

export default {
  name: "buis-it",
};
</script>

<style lang="sass">
.buis-it
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .headline
    width: 100%
    text-align: center
  .buis-it-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white

</style>
