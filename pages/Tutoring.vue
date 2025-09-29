<template lang="pug">
.tutoring.skill
  v-fab(to="/services" flat location="top start" app).home-btn Services
  .tutoring-info
    .headline
      h1 Tutoring
    v-container
      v-row
        v-col(cols="12")
          v-card
            v-card-title Tutoring
            v-card-text
              | I offer personalized tutoring services in various IT and software development topics, including programming languages (Python, JavaScript, etc.), web development, database management, and cloud computing. My tutoring sessions are tailored to meet the individual needs of each student, whether they are beginners or looking to advance their skills.
            v-card-actions
              v-btn(text href="https://calendar.app.google/Q5RwJpk7RyLoiF796" target="_blank") Book Now
              v-btn(text href="mailto:tutoring@skylerfly.com" target="_blank") Contact Me

</template>

<script>
export default {
  name: "tutoring",
};
</script>

<style lang="sass">
.tutoring
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .headline
    width: 100%
    text-align: center
  .tutoring-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white

</style>
