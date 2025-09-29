<template lang="pug">
.services.skill
  //- v-fab(to="/" flat location="top start" app).home-btn Home
  .services-info
    h2 IT Solutions, Tutoring and Consulting
    v-container
      v-row
        v-col(cols="12" md="6")
          v-card
            v-img(cover src="https://picsum.photos/id/1078/600/300" alt="Buisnees IT Image").card-img
            v-card-title Buisness IT Solutions
            v-card-subtitle All your IT needs in one place
            v-card-text
              | I provide comprehensive IT solutions for small to medium-sized businesses, including network setup and management, cybersecurity, cloud services, and hardware/software procurement. My goal is to help businesses streamline their operations and enhance productivity through effective technology solutions.
            v-card-actions.card-actions
              v-btn.card-btn(variant="outlined" color="accent" block to="/buis-it") See More
        v-col(cols="12" md="6")
          v-card
            v-img(cover src="https://picsum.photos/id/225/600/300" alt="Home IT Image").card-img
            v-card-title  Home IT Support
            v-card-subtitle In Home and Remote IT Support for all your devices
            v-card-text 
              | I offer in-home and remote IT support services for individuals and families, helping with computer setup, troubleshooting, software installation, virus removal, and general tech support. My goal is to make technology accessible and easy to use for everyone.
            v-card-actions.card-actions
              v-btn.card-btn(variant="outlined" color="accent" block to="/home-it") See More
      v-row
        v-col(cols="12" md="6")
          v-card
            v-img(cover src="https://picsum.photos/id/1073/600/300" alt="Tutoring Image").card-img
            v-card-title  Tutoring
            v-card-subtitle Personalized IT and Software Development Tutoring
            v-card-text 
              | I offer personalized tutoring services in various IT and software development topics, including programming languages (Python, JavaScript, etc.), web development, database management, and cloud computing. My tutoring sessions are tailored to meet the individual needs of each student, whether they are beginners or looking to advance their skills.
            v-card-actions.card-actions
              v-btn.card-btn(variant="outlined" color="accent" block to="/tutoring") See More
        v-col(cols="12" md="6")
          v-card
            v-img(cover src="https://picsum.photos/id/306/600/300" alt="Consulting Image").card-img
            v-card-title Emerging Technologies Consulting
            v-card-subtitle Expert IT Consulting for Businesses and Individuals
            v-card-text
              | I provide expert consulting services on emerging technologies such as blockchain, artificial intelligence, automation, EVs, renewable energy and cloud computing. I help businesses and individuals understand the potential applications of these technologies and how they can be leveraged to achieve their goals.
            v-card-actions.card-actions
              v-btn.card-btn(variant="outlined" color="accent" block to="/consulting") See More

</template>

<script>
import GitHubBtn from "../components/GitHubBtn.vue";

export default {
  name: "services",
  components: {
    GitHubBtn
  },
};
</script>

<style lang="sass">
.services
  flex-direction: row
  justify-content: center
  width: 100%
  color: white
  .services-info
    text-align: center
    margin: auto
    padding: 10px

  .card-img
    height: 300px
  .card-actions a:visited
    color: white

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white
</style>
