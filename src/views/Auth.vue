<template lang="pug">
  .auth
    .login(v-if="!new_user")
      h4 Login
      form
        label(for='email') E-Mail Address
        div
          input#email(type='email', v-model='email', required='', autofocus='')
        div
          label(for='password') Password
          div
            input#password(type='password', v-model='password', required='')
        div
          button(type='submit', @click='handleLogin')
            | Login
        div
          a(@click="new_user = true") Dont have an account? Register!
    .register(v-else)
      h4 Register
      form
        label(for='first-name') First Name
        div
          input#name(type='text', v-model='firstName', required='', autofocus='')
        label(for='last-name') Last Name
        div
          input#name(type='text', v-model='lastName', required='')
        label(for='username') Username
        div
          input#name(type='text', v-model='username', required='')
        label(for='email') E-Mail Address
        div
          input#email(type='email', v-model='email', required='')
        label(for='password') Password
        div
          input#password(type='password', v-model='password', required='')
        label(for='password-confirm') Confirm Password
        div
          input#password-confirm(type='password', v-model='password_confirmation', required='')
        div
          input#subscribe(type="checkbox" v-model="subscribe")
          label &nbsp;Subscribe to Email List?
        div
          button(type='submit', @click='handleRegister')
            | Register
        div
          a(@click="new_user = false") Already have an account? Login!
</template>

<script>
export default {
  name: "auth",
  components: {},
  data: function() {
    return {
      new_user: false,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      subscribe: false
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        let email = this.email;
        let password = this.password;
        this.$store
          .dispatch("login", { email, password })
          .then(() => {
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              this.$router.push("blog");
            }
          })
          .catch(() => {});
      }
    },
    handleRegister(e) {
      e.preventDefault();
      if (
        this.password === this.password_confirmation &&
        this.password.length > 0
      ) {
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          password: this.password,
          subscribe: this.subscribe
        };
        this.$store
          .dispatch("register", user)
          .then(() => {
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              this.$router.push("/blog");
            }
          })
          .catch(() => {});
      } else {
        this.password = "";
        this.passwordConfirm = "";
        return alert("Passwords do not match");
      }
    }
  }
};
</script>

<style lang="sass" scoped>
  .auth
    text-align: center

</style>
