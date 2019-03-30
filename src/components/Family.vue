<template>
  <div class="mb-5">
    <b-container fluid>
      <b-row align-h="center">
        <b-col
          cols="12"
          md="12"
          v-bind="box.style"
          v-for="(box, index) in boxes"
          :key="box.id"
          @click="toggleShow(index)"
        >
          <div class="card-body box">
            <b-img fluid-grow thumbnail center v-bind:src="box.image" alt="headshot"/>
            <h1>{{ box.name }}</h1>
            <b-button class="card-btn">Read More</b-button>
            <transition name="flip" mode="out-in">
              <div class="shade" v-if="box.isShowing">
                <div class="shade-content">
                  <h1>Best Trait:</h1>
                  <p>{{ box.info.one }}</p>

                  <h1>Known For:</h1>
                  <p>{{ box.info.two }}</p>

                  <h1>Passionate About:</h1>
                  <p>{{ box.info.three }}</p>

                  <b-button class="card-btn">Close</b-button>
                </div>
              </div>
            </transition>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import TheTeam from "@/views/TheTeam";

export default {
  name: "Family",
  components: {
    NavBar,
    PageHero,
    TheTeam
  },
  data() {
    return {
      show: true,
      boxes: [
        {
          name: "Debbie",
          image: "https://picsum.photos/600/600/?image=1011",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "red col-border" },
          isShowing: false
        },
        {
          name: "Jerry",
          image: "https://picsum.photos/600/600/?image=1012",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "beige col-border" },
          isShowing: false
        },
        {
          name: "Teri",
          image: "https://picsum.photos/600/600/?image=1005",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "light-grey col-border" },
          isShowing: false
        },
        {
          name: "Steve",
          image: "https://picsum.photos/600/600/?image=883",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "drk-grey col-border" },
          isShowing: false
        },
        {
          name: "Kelly",
          image: "https://picsum.photos/600/600/?image=777",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "red col-border" },
          isShowing: false
        },
        {
          name: "Reid",
          image: "https://picsum.photos/600/600/?image=821",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "light-grey col-border" },
          isShowing: false
        },
        {
          name: "Cory",
          image: "https://picsum.photos/600/600/?image=786",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "beige col-border" },
          isShowing: false
        }
      ]
    };
  },
  methods: {
    toggleShow(i) {
      this.boxes[i].isShowing = !this.boxes[i].isShowing;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


