<template lang="pug">
.consulting.skill
  v-fab(to="/services" flat location="top start" app).home-btn Back
  .consulting-info
    .headline
      h1 Consulting
    v-container
      v-row
        v-col(cols="12")
          v-card
            v-card-title Emerging Technologies Consulting
            v-card-text
              | I provide expert consulting services on emerging technologies such as blockchain, artificial intelligence, automation, EVs, renewable energy and cloud computing. I help businesses and individuals understand the potential applications of these technologies and how they can be leveraged to achieve their goals.
            v-card-actions
              v-btn(text href="https://calendar.app.google/fC29F1wtDQP5TjYE8" target="_blank") Book Now
              v-btn(text href="mailto:consulting@skylerfly.com" target="_blank") Contact Me
</template>

<script>

export default {
  name: "consulting",
};
</script>

<style lang="sass">
.consulting
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .headline
    width: 100%
    text-align: center
  .consulting-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white

</style>
