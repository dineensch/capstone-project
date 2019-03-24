<template>
  <div class="login">
    <nav-bar></nav-bar>
    <b-container class="mt-5 px-5">
      <h3>Sign In</h3>
      <!-- <b-form v-on:submit="login">
        <b-input type="text" v-model="email" placeholder="email" class="mb-2 mr-sm-2 mb-sm-0"/>

        <b-input
          type="password"
          v-model="password"
          placeholder="password"
          class="mb-2 mr-sm-2 mb-sm-0"
        />

        <b-btn type="submit" variant="dark" class="m-1">RSVP</b-btn>
      </b-form>-->

      <input type="text" v-model="email" placeholder="Email">
      <br>
      <input type="password" v-model="password" placeholder="Password">
      <br>
      <button v-on:click="login" class="button">Enter</button>
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
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>