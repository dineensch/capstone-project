<template>
  <div class="login">
    <nav-bar></nav-bar>
    <b-container fluid class="mt-5 px-5">
      <h1>Sign In</h1>
      <b-form @submit="login" class="mt-5">
        <b-form-group>
          <b-row>
            <b-col cols="12">
              <b-form-input type="text" v-model="email" placeholder="Email"></b-form-input>
            </b-col>
            <br>
            <b-col cols="12">
              <b-form-input input type="password" v-model="password" placeholder="Password"></b-form-input>
            </b-col>
            <br>
            <b-col cols="12">
              <b-button type="submit" class="button mt-5">Enter</b-button>
            </b-col>
          </b-row>
        </b-form-group>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
import NavBar from "@/components/NavBar";

export default {
  name: "login",
  components: {
    NavBar
  },
  data: function() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("/rsvp");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  font-size: 3rem;
}
button {
  cursor: pointer;
  background-color: #581c1d;
}

h1 {
  font-size: 4rem !important;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}

/* Small Desktop Screens */
@media (min-width: 425.98px) {
  h1 {
    font-size: 2.5rem !important;
  }

  input {
    font-size: 1.5rem !important;
  }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>