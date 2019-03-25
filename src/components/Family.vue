<template>
  <div class="mb-5">
    <!-- TEMPLATE TEST -->
    <b-container class="mt-5">
      <!-- MASTER ROW -->
      <b-row v-bind="rowStyle">
        <!-- 1st Column -->
        <b-col v-bind="masterCol">
          <h1>Family</h1>
          <b-row v-bind="rowStyle">
            <b-col v-bind="colStyle" cols="12" md="6" lg="3">
              <div v-bind="red" id="exPopover1">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=1011"
                  alt="headshot"
                />
                <h5>Debbie</h5>
                <b-popover
                  content="This Photo Placeholder of Rachel enjoys paddling this canoe and wearing life vests"
                  title="Maid of Honor"
                  triggers="hover focus"
                  target="exPopover1"
                  placement="top"
                />
              </div>
            </b-col>
            <b-col v-bind="colStyle" cols="12" md="6" lg="3">
              <div v-bind="beige" id="exPopover2">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=823"
                  alt="headshot"
                />
                <h5>Jerry</h5>
                <b-popover
                  content="This Photo Placeholder of Taylor enjoys red hats and taking photos of you while you takea photo of her"
                  title="Taylor"
                  triggers="hover focus"
                  target="exPopover2"
                  placement="top"
                />
              </div>
            </b-col>

            <b-col v-bind="colStyle" cols="12" md="6" lg="3">
              <div v-bind="lightGrey">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=1005"
                  alt="headshot"
                />
                <h5>Teri</h5>
              </div>
            </b-col>

            <b-col v-bind="colStyle" cols="12" md="6" lg="3">
              <div v-bind="drkGrey">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=836"
                  alt="headshot"
                />
                <h5>Steve</h5>
              </div>
            </b-col>
          </b-row>

          <b-row v-bind="rowStyle">
            <b-col v-bind="colStyle" cols="12" md="4" lg="4">
              <div v-bind="red">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=777"
                  alt="headshot"
                />
                <h5>Cory</h5>
              </div>
            </b-col>
            <b-col v-bind="colStyle" cols="12" md="4" lg="4">
              <div v-bind="lightGrey">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=821"
                  alt="headshot"
                />
                <h5>Reid</h5>
              </div>
            </b-col>
            <b-col v-bind="colStyle" cols="12" md="4" lg="4">
              <div v-bind="beige">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=786"
                  alt="headshot"
                />
                <h5>Kelly</h5>
              </div>
            </b-col>
          </b-row>

          <b-row v-bind="rowStyle">
            <b-col v-bind="colStyle" cols="12" md="4" lg="4">
              <div v-bind="red">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=777"
                  alt="headshot"
                />
                <h5>Cherie</h5>
              </div>
            </b-col>
            <b-col v-bind="colStyle" cols="12" md="4" lg="4">
              <div v-bind="lightGrey">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=821"
                  alt="headshot"
                />
                <h5>Bob</h5>
              </div>
            </b-col>
            <b-col v-bind="colStyle" cols="12" md="4" lg="4">
              <div v-bind="beige">
                <b-img
                  v-bind="photoStyle"
                  src="https://picsum.photos/200/200/?image=786"
                  alt="headshot"
                />
                <h5>Betty</h5>
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
  name: "Family",
  components: {
    NavBar,
    PageHero
  },
  data() {
    return {
      photoStyle: { rounded: "circle", class: "img-fluid" },
      imgShape: { blank: true, width: 200, height: 200 },
      blankText: { class: "blank-text p-2 m-1" },
      colStyle: {
        class: "p-0 text-center justify-content-center",
        cols: "12",
        md: "12"
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