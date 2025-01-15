<template lang="pug">
// Contact Info Section
.contact#contact
  .contact-block
    .contact-header(data-aos="fade" data-aos-delay="200")
      h1 Get in touch!
    .contact-info
      a(href="mailto:skyler@skylerfly.com", target="_blank").contact-link.email
        h2 skyler@skylerfly.com
      a(href="tel:7203100607").contact-link.phone
        h2 (720) 310-0607

</template>

<script>
export default {
  name: "contact",
  components: {}
};
</script>

<style lang="sass">
// Contact Styles
.contact
  padding: 50px 10px
  @include card-depth(5)
  background-color: $color-primary-3
  color: #FFF

  .contact-block
    text-align: center
    @extend .flex-box-center
    flex-direction: column
    .contact-info
      @extend .flex-box-center
      flex-direction: column
      a
        color: #FFF
      h2
        margin: 2vh
      .email
        @media (max-width: 299px)
          font-size: 0.8em

    @media (max-width: 600px)
      margin: 30px 5px

    @media (max-width: 350px)
      .contact-header, .contact-info
        h1
          font-size: 2.5em
        h2
          font-size: 1.8em

</style>
