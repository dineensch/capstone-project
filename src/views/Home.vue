<template>
  <div>
    <!-- <b-jumbotron bg-variant="light" text-variant="black" border-variant="light">
      <template slot="header">Welcome</template>
      <hr class="my-4">
    </b-jumbotron> -->

      <div class="carousel-section">
        <div class="middle-left p-3">Welcome</div>
        <b-carousel id="carousel1"
                      controls
                      indicators
                      :interval="4000"
                      img-width="100"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
                      style="text-shadow: 1px 1px 2px #333;"
          >
            <b-carousel-slide img-src="https://picsum.photos/670/315/?image=52"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/670/315/?image=54"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/670/315/?image=58"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/670/315/?image=55"></b-carousel-slide>
        </b-carousel>
      </div>

    <div v-show="success">
      <b-alert show dismissible fade variant="dark">RSVP Successfully Submitted.</b-alert>
    </div>

<section>
  <h2 class="my-4 font-weight-bold"> RSVP </h2>
 <!------------- FORM 1 ------------------->
    <div class="mb-5 mx-1">
      <h5 class="font-weight-bold"> Form 1 Logic </h5>
      <hr class="mt-0">    
      <p>Enter a code number less than 5 for option 1. Enter a number greater than 5 to display the second form.</p>
      <div>
        <b-form inline v-on:submit.prevent="validateForm1">
          <label class="sr-only" for="form1Name"></label>
          <b-input v-model="form1Name" class="mb-2 mr-sm-2 mb-sm-0" id="form1Name" placeholder="Name"/>

          <label class="sr-only" for="form1Code"></label>
            <b-input left="@" class="mb-2 mr-sm-2 mb-sm-0" v-model="form1Code" id="form1Code" placeholder="Code"/>

          <b-btn v-show="oneRSVP" type="submit" variant="dark" class="m-1">RSVP</b-btn>
        </b-form>
      </div>

      <!-- HIDDEN RSVP FORM -->
      <div v-show="showForm">
        <b-form inline v-on:submit.prevent="validateForm2">
          <label class="sr-only" for="form1Name2">Guest Name</label>
          <b-input v-model="form1Name2" class="mb-2 mr-sm-2 mb-sm-0" id="fform1Name2" placeholder="Guest Name"/>
          <b-btn type="submit" variant="dark" class="m-1">RSVP</b-btn>
        </b-form>
      </div>
    </div>

<!--------- FORM 2: AUTH FROM FIREBASE ---------->
    <div class="my-5 mx-1">
      <h5 class="font-weight-bold"> Form 2 Logic </h5>
      <hr class="mt-0">
        <p><span class="font-weight-bold">Name:</span> test@example.com  <span class="font-weight-bold">Code:</span> vuetest</p>
      
      <!-- RSVP FORM  -->
      <div>
        <b-form inline v-on:submit.prevent="validateForm">
          <label class="sr-only" for="name1"></label>
          <b-input type="text" v-model="name1" class="mb-2 mr-sm-2 mb-sm-0" id="name1" placeholder="Name"/>

          <label class="sr-only" for="code"></label>
          <b-input type="password" left="@" class="mb-2 mr-sm-2 mb-sm-0" v-model="code" id="code" placeholder="Code"/>
          <b-btn type="submit" variant="dark" class="m-1">RSVP</b-btn>
        </b-form>
      </div>
    </div>
</section>
  </div>
</template>

<script>
import { API } from "@/common/api";
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      results: null,
      slide: 0,
      sliding: null,
      form1Name: "",
      form1Name2: "",
      form1Code: "",
      oneRSVP: true,
      showForm: false,
      success: false,
      name1: "",
      name2: "",
      code: ""
    };
  },
  methods: {
    validateForm: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.name1, this.code)
        .then(
          function(user) {
            alert("You are now logged in!");
          },
          function(err) {
            alert("Oops! " + err.message);
          }
        );
    },

    validateForm1: function() {
      if (this.formName1 != "" && this.form1Code != "" && this.form1Code < 5) {
        console.log("Guest does not have a +1.");
        this.showForm = false;
        this.oneRSVP = true;
        this.success = true;
      } else {
        console.log("Guest has a +1. Show 2nd Form.");
        this.showForm = true;
        this.oneRSVP = false;
      }
    },

onSlideStart (slide) {
    this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
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

.carousel-section {
  position: relative;
}

.middle-left {
  position: absolute;
  color: white;
  margin: auto 0;
  top: 25%;
  font-size: 50px;
  background-color: rgba(0,0,0,0.6);
  width: 100%;
  height: 100px;
  z-index: 20;
}
/* .carousel-content {
  position: relative;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  top: 30%;
  z-index: 20;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
} */
</style>


