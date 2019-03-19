<template>
  <div class="mb-5">
    <b-container fluid>
      <!-- MASTER ROW -->
      <b-row v-bind="rowStyle">
        <b-col v-bind="masterCol">
          <h2>Groomsmen</h2>
          <b-row v-bind="rowStyle">
            <b-col v-bind="longCol">
              <div v-bind="grey">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=1012"
                  alt="headshot"
                />
                <h5>Jeremy</h5>
              </div>
            </b-col>

            <b-col v-bind="shortCol">
              <div v-bind="beige">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=883"
                  alt="headshot"
                />
                <h5>Jaydee</h5>
              </div>
            </b-col>

            <b-col v-bind="shortCol">
              <div v-bind="drkGrey">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=863"
                  alt="headshot"
                />
                <h5>Tucker</h5>
              </div>
            </b-col>

            <b-col v-bind="longCol">
              <div v-bind="lightGrey">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=856"
                  alt="headshot"
                />
                <h5>CJ</h5>
              </div>
            </b-col>
            <b-col v-bind="shortCol">
              <div v-bind="beige">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=845"
                  alt="headshot"
                />
                <h5>Mike</h5>
              </div>
            </b-col>
            <b-col v-bind="shortCol">
              <div v-bind="red">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=804"
                  alt="headshot"
                />
                <h5>Matt</h5>
              </div>
            </b-col>
            <b-col v-bind="longCol">
              <div v-bind="blankText">
                <b-img
                  v-bind="[photoStyle, imgShape]"
                  src="https://picsum.photos/200/200/?image=804"
                  alt="headshot"
                />
                <h5>Blank</h5>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- END MASTER ROW -->
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "Groomsmen",
  components: {
    NavBar,
    PageHero
  },
  data() {
    return {
      photoStyle: { rounded: "circle", class: "img-fluid" },
      imgShape: { blank: true, width: 200, height: 200 },
      blankText: { class: "blank-text p-2 m-1" },
      longCol: {
        class: "p-0 text-center justify-content-center",
        cols: "12",
        md: "12",
        sm: "12"
      },
      shortCol: {
        class: "p-0 text-center justify-content-center",
        cols: "12",
        md: "6",
        sm: "6"
      },
      rowStyle: { class: "p-0 m-0" },
      masterCol: { class: "p-0 text-center", cols: "12" },
      red: { class: "red p-2 m-1" },
      beige: { class: "beige p-2 m-1" },
      lightGrey: { class: "light-grey p-2 m-1" },
      grey: { class: "grey p-2 m-1" },
      drkGrey: { class: "drk-grey p-2 m-1" }
    };
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  background-color: #633637;
  color: white;
}

.beige {
  background-color: #ebdbd3;
}

.light-grey {
  background-color: #dadada;
}

.grey {
  background-color: #635c5c;
  color: white;
}

.drk-grey {
  background-color: #363436;
  color: white;
}
.blank-text {
  background-color: #635c5c;
  color: #635c5c;
}
h2,
h5 {
  text-align: center !important;
  font-family: brandon-grotesque, sans-serif;
}

h2 {
  font-weight: 500;
}

h5 {
  font-weight: 300;
  margin: 0;
}
</style>


