<template>
  <div>
    <nav-bar></nav-bar>
    <jumbo-tron></jumbo-tron>
    <div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="dark"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >RSVP Successfully Submitted.</b-alert>
    </div>
    <div>
      <b-form inline>
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Name"/>
        <label class="sr-only" for="inlineFormInputGroupUsername2">Code</label>
        <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inlineFormInputGroupUsername2" placeholder="Username"/>
        </b-input-group>
        <b-btn @click="showAlert" variant="dark" class="m-1">RSVP</b-btn>
      </b-form>
    </div>

    <error-list v-bind:errorList="errors"></error-list>
  </div>
</template>

<script>
import { API } from "@/common/api";
import ErrorList from "@/components/ErrorList";
import jumbotron from "@/components/jumbotron";
import NavBar from "@/components/NavBar";

export default {
  name: "CitySearch",
  data() {
    return {
      results: null,
      errors: [],
      query: "",
      dismissSecs: 3,
      dismissCountDown: 0
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
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


