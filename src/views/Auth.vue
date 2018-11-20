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
    .register(v-else)
      h4 Register
      form
        label(for='name') Name
        div
          input#name(type='text', v-model='name', required='', autofocus='')
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
          button(type='submit', @click='handleRegister')
            | Register
</template>

<script>
export default {
  name: "auth",
  components: {},
  data: function() {
    return {
      new_user: true,
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
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
          .then(() => this.$router.push("/blog"))
          .catch(err => console.log(err));
        this.axios
          .post("https://skylerflyserver.appspot.com/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            let admin = response.data.user.admin;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);
            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                if (admin == 1) {
                  this.$router.push("dashboard");
                } else {
                  this.$router.push("blog");
                }
              }
            }
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    },
    handleRegister(e) {
      e.preventDefault();
      if (
        this.password === this.password_confirmation &&
        this.password.length > 0
      ) {
        let user = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("register", user)
          .then(() => this.$router.push("/blog"))
          .catch(err => console.log(err));
        this.axios
          .post("https://skylerflyserver.appspot.com/register", user)
          .then(response => {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push("/blog");
              }
            }
          })
          .catch(error => {
            console.error(error);
          });
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
