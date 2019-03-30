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

export default {
  name: "Groomsmen",
  components: {
    NavBar,
    PageHero
  },
  data() {
    return {
      show: true,
      boxes: [
        {
          name: "Jeremy",
          image: "https://picsum.photos/600/600/?image=1012",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "red col-border" },
          isShowing: false
        },
        {
          name: "Jaydee",
          image: "https://picsum.photos/600/600/?image=883",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "beige col-border" },
          isShowing: false
        },
        {
          name: "Tucker",
          image: "https://picsum.photos/600/600/?image=863",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "light-grey col-border" },
          isShowing: false
        },
        {
          name: "CJ",
          image: "https://picsum.photos/600/600/?image=856",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "drk-grey col-border" },
          isShowing: false
        },
        {
          name: "Mike",
          image: "https://picsum.photos/600/600/?image=845",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "red col-border" },
          isShowing: false
        },
        {
          name: "Matt",
          image: "https://picsum.photos/600/600/?image=804",
          info: {
            one: "",
            two: "",
            three: ""
          },
          style: { class: "light-grey col-border" },
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

<style scoped>
</style>