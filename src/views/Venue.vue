<template>
  <div>
    <nav-bar></nav-bar>
    <page-hero>
      <template v-slot:title>Venue</template>
      <template v-slot:body>Please see below for details regarding the venue</template>
    </page-hero>
    <b-container fluid class="mt-3">
      <b-container fluid>
        <b-row>
          <b-col cols="12" class="text-center py-2 box1" order-md="1">
            <h1>Event Estates</h1>
          </b-col>
          <b-col cols="12" class="box2 text-center" order-md="3">
            <b-img src="https://picsum.photos/900/400?image=994" fluid alt="Venue Image"/>
          </b-col>
          <b-col
            cols="12"
            class="box3 text-center d-none d-sm-block py-2 d-sm-none d-md-block"
            order-md="2"
          >
            <h2>About</h2>
          </b-col>
          <b-col cols="12" class="box4 px-5" order-md="4">
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
  },
  data() {
    return {
      items: [{ title: "Venue", lead: "page description" }]
    };
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
@media screen and (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
  .box1,
  .box2,
  .box3,
  .box4 {
    display: block;
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
