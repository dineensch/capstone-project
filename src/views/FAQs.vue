<template>
  <span>
    <nav-bar></nav-bar>
    <page-hero></page-hero>
  </span>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "FAQs",
  components: {
    NavBar,
    PageHero
  },

  data() {
    return {
      pageTitle: "FAQs",
      results: null,
      name1: "",
      name2: "",
      code: "",
      oneRSVP: true,
      showForm: false,
      success: false
    };
  },
  methods: {
    validateForm: function() {
      if (this.name1 != "" && this.code != "" && this.code < 5) {
        console.log("Guest does not have a +1.");
        this.showForm = false;
        this.oneRSVP = true;
        this.success = true;
      } else {
        console.log("Guest has a +1. Show 2nd Form.");
        this.showForm = true;
        this.oneRSVP = false;
      }
    }
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


