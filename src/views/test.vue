<template>
  <div>
    <nav-bar></nav-bar>
    <page-hero></page-hero>
    <b-container fluid class="mt-3">
      <b-container fluid>
        <b-row>
          <b-col class="text-center py-2" cols="12" sm="12" order-md="1" md="6">
            <h1>Event Estates</h1>
          </b-col>
          <b-col class="text-center" cols="12" sm="12" order-md="3" md="6">
            <b-img src="https://picsum.photos/900/400?image=994" fluid alt="Venue Image"/>
          </b-col>
          <b-col
            cols="12"
            class="text-center pt-5 d-none d-sm-block d-sm-none d-md-block"
            sm="12"
            order-md="2"
            md="6"
          >
            <h2>About</h2>
          </b-col>
          <b-col class="px-5" cols="12" sm="12" order-md="4" md="6">
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch.
            </p>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid>
        <h2 class="text-center pt-5 pb-3">Location</h2>
        <google-map></google-map>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import GoogleMap from "@/components/GoogleMap";

export default {
  name: "Venue",
  components: {
    NavBar,
    PageHero,
    GoogleMap
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  border: 1px solid black;
}

.section1 {
  border: 1px solid red;
}

h1 {
  color: black;
  font-size: 3.5rem;
}

h2 {
  font-size: 3rem;
}

p {
  font-size: 2.5rem;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}
</style>
