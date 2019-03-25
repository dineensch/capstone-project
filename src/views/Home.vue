<template>
  <div>
    <video-hero>
      <template v-slot:title>Welcome to</template>
      <template v-slot:body>I Do With Vue</template>
    </video-hero>
    <nav-bar></nav-bar>
    <b-container fluid class="mt-5" id="anchor">
      <div class="mt-5">
        <b-card-group deck>
          <b-card
            title="RSVP"
            img-src="https://picsum.photos/300/300/?image=999"
            img-alt="Image"
            img-top
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b-card-text>
            <b-button :to="{ name: 'RSVP'}">More</b-button>
          </b-card>
          <b-card
            title="FAQs"
            img-src="https://picsum.photos/300/300/?image=998"
            img-alt="Image"
            img-top
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b-card-text>
            <b-button :to="{ name: 'FAQs'}">More</b-button>
          </b-card>
          <b-card
            title="Venue"
            img-src="https://picsum.photos/300/300/?image=975"
            img-alt="Image"
            img-top
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b-card-text>
            <b-button :to="{ name: 'Venue'}">More</b-button>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>



<script>
import firebase from "firebase";
import router from "../router";
import NavBar from "@/components/NavBar";
import VideoHero from "@/components/VideoHero";

export default {
  name: "Home",
  components: {
    VideoHero,
    NavBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-size: 3rem;
}

p {
  font-size: 1.8rem;
}

a.btn {
  background-color: #212021 !important;
  border: none;
}

a.btn:hover {
  background-color: #581c1d !important;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
  .card-deck {
    margin-right: 15px;
    margin-left: 15px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>