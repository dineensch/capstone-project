<template>
  <div>
    <nav-bar></nav-bar>
    <jumbo-tron></jumbo-tron>
    
    <div v-show="success">
      <b-alert show dismissible
        fade
        variant="dark"
      >RSVP Successfully Submitted.</b-alert>
    </div>


<!-- RSVP FORM  -->
    <div>
      <b-form inline v-on:submit.prevent="validateForm">
        <label class="sr-only" for="name1"></label>
        <b-input v-model="name1" class="mb-2 mr-sm-2 mb-sm-0" id="name1" placeholder="Name"/>

        <label class="sr-only" for="code"></label>
          <b-input left="@" class="mb-2 mr-sm-2 mb-sm-0" v-model="code" id="code" placeholder="Code"/>
    
        <b-btn v-show="oneRSVP" type="submit" variant="dark" class="m-1">RSVP</b-btn>
      </b-form>
    </div>

<!-- +1 RSVP FORM -->
    <div v-show="showForm">
      <b-form inline v-on:submit.prevent="validateForm2">
        <label class="sr-only" for="name2">Guest Name</label>
        <b-input v-model="name2" class="mb-2 mr-sm-2 mb-sm-0" id="name2" placeholder="Guest Name"/>
        <b-btn type="submit" variant="dark" class="m-1">RSVP</b-btn>
      </b-form>
    </div>
  </div>
</template>

<script>
import { API } from "@/common/api";
import ErrorList from "@/components/ErrorList";
import jumbotron from "@/components/jumbotron";
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  data() {
    return {
      results: null,
      name1: '',
      name2: '',
      code: '',
      oneRSVP: true,
      showForm: false,
      success: false
    };
  },
  methods: {
    validateForm: function () {
      if((this.name1 != '') &&
        (this.code != '') &&
        (this.code < 5)) {
          console.log('Guest does not have a +1.');
          this.showForm = false;
          this.oneRSVP = true;
          this.success = true
        } else {
          console.log('Guest has a +1. Show 2nd Form.')
          this.showForm = true;
          this.oneRSVP = false;
        }
    },
  },

  components: {
    "error-list": ErrorList,
    "jumbo-tron": jumbotron,
    "nav-bar": NavBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
}
a {
  color: #42b983;
}
</style>


