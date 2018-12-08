<template lang="pug">
  .auth
    v-card.login(v-if="!new_user").ma-5.pa-5
      h4 Login
      v-form
        v-text-field#email-field(label="E-Mail" v-model="email" solo required autofocus)
        v-text-field#password-field(solo required
          label="Password"
          v-model="password"
          :append-icon="show ? 'fa-eye-slash' : 'fa-eye'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          @click:append-icon="show = !show")
        v-btn(type='submit' @click='handleLogin') Login
        p Dont have an account?
        v-btn(@click="new_user = true") Register
    v-card.register(v-else).ma-5.pa-5
      h4 Register
      v-form
        v-text-field#first-name-field(label="First Name" v-model="firstName" solo required- autofocus)
        v-text-field#last-name-field(label="Last Name" v-model="lastName" solo required)
        v-text-field#username-field(label="Username" v-model="username" solo required)
        v-text-field#email-field(label="E-Mail" v-model="email" solo required)
        v-text-field#password-field(solo required
          label="Password"
          v-model="password"
          :append-icon="show ? 'fa-eye-slash' : 'fa-eye'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show")
        v-text-field#password-confirm-field(solo required
          label="Confirm Password"
          v-model="password_confirmation"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'")
        v-switch#subscribe(v-model="subscribe" label="Subscribe to Email List")
        v-btn(type='submit', @click='handleRegister') Register
        p Already have an account?
        v-btn(@click="new_user = false") Login
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
      show: false,
      password_confirmation: "",
      subscribe: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    toggleShowPass() {
      this.show = !this.show;
    },
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
