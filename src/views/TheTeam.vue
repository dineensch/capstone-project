<template>
  <div class="mb-5">
    <page-hero>
      <template v-slot:title>The Team</template>
      <template v-slot:body>Meet the wedding party.</template>
    </page-hero>
    <nav-bar></nav-bar>

    <b-container fluid class="mt-5">
      <div class="mini-nav">
        <b-nav pills>
          <b-nav-item>
            <h4>Filter By:</h4>
          </b-nav-item>
          <b-nav-item @click="showWhich = 'Bridesmaids'">Bridesmaids</b-nav-item>
          <b-nav-item @click="showWhich = 'Groomsmen'">Groomsmen</b-nav-item>
          <b-nav-item @click="showWhich = 'Family'">Family</b-nav-item>
        </b-nav>
      </div>

      <component :is="showWhich" v-bind="activeClass"></component>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import Bridesmaids from "@/components/Bridesmaids";
import Groomsmen from "@/components/Groomsmen";
import Family from "@/components/Family";

export default {
  name: "TheTeam",
  components: {
    NavBar,
    PageHero,
    Bridesmaids,
    Groomsmen,
    Family
  },
  data() {
    return {
      showWhich: "Bridesmaids",
      activeClass: { class: "active" }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*********** MINI NAV ***********/

a.active {
  font-weight: 600;
}
a.nav-link {
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  font-size: 2.5rem !important;
  line-height: 1;
  color: #212021 !important;
  text-transform: uppercase;
}

a.nav-link:hover {
  color: #8a756e !important;
}

a.nav-link.active {
  font-weight: 500 !important;
}
</style>
<style>
/*********** ELEMENT SIZING ***********/
h4 {
  display: inline !important;
  font-size: 1.5rem;
}

button.card-btn {
  width: 100%;
  font-size: 3rem;
  font-weight: 400 !important;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
}

.mini-nav {
  margin-bottom: 2rem;
}
.box {
  position: relative;
  text-align: center !important;
}

.col-border {
  padding: 2rem;
  margin: 0.5rem;
  border: 0.8rem double white;
  border-radius: 0.5rem;
}

h1 {
  padding-top: 1rem;
  font-size: 5rem !important;
  font-weight: 300 !important;
  text-transform: uppercase;
}

p {
  font-size: 3rem;
  line-height: 1;
  font-weight: 300;
}

.thin {
  font-weight: 300 !important;
}

/*********** CARD COLORS ***********/
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

/*********** TRANSITIONS ***********/
.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
.shade {
  width: 100%;
  height: 100%;
  background-color: #070707d7;
  border: 1px solid #fff;
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
}

.shade-content {
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  padding: 4rem 1rem;
  border-radius: 0.25rem;
}
</style>


