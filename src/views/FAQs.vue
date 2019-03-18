<template>
  <div class="page-container">
    <nav-bar></nav-bar>
    <page-hero>
      <template v-slot:title>FAQs</template>
      <template v-slot:body>Please see below for frequently asked questions.</template>
    </page-hero>

    <!-- PAGE NAV -->
    <b-container fluid class="accordion-card">
      <!-- ATTIRE ACCORDION -->
      <div role="tablist" class="mt-5 mb-1">
        <h1 id="attire" class="text-center">Attire</h1>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab" type="dark" variant="dark">
            <b-button block href="#" v-b-toggle.attire1 variant="dark">Accordion 1</b-button>
          </b-card-header>
          <b-collapse id="attire1" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.attire2 variant="dark">Accordion 2</b-button>
          </b-card-header>
          <b-collapse id="attire2" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.attire3 variant="dark">Accordion 3</b-button>
          </b-card-header>
          <b-collapse id="attire3" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <!-- VENUE ACCORDION -->
      <div role="tablist" class="font-size mt-5 mb-1">
        <h1 id="venue" class="text-center">Venue</h1>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab" type="dark" variant="dark">
            <b-button block href="#" v-b-toggle.venue1 variant="dark">Accordion 1</b-button>
          </b-card-header>
          <b-collapse id="venue1" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.venue2 variant="dark">Accordion 2</b-button>
          </b-card-header>
          <b-collapse id="venue2" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.venue3 variant="dark">Accordion 3</b-button>
          </b-card-header>
          <b-collapse id="venue3" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <!-- Accomodations ACCORDION -->
      <div role="tablist" class="mt-5 mb-1">
        <h1 id="Accomodations" class="text-center">Accomodations</h1>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab" type="dark" variant="dark">
            <b-button block href="#" v-b-toggle.accordion1 variant="dark">Accordion 1</b-button>
          </b-card-header>
          <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion2 variant="dark">Accordion 2</b-button>
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion3 variant="dark">Accordion 3</b-button>
          </b-card-header>
          <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "FAQs",
  components: {
    NavBar,
    PageHero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.btn,
.card-body {
  font-size: 2rem;
  font-family: brandon-grotesque, sans-serif;
  font-weight: 300;
  font-style: normal;
  line-height: 1;
}

h1,
.h1 {
  font-size: 3.5rem;
  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.page-container {
  margin-bottom: 10%;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

/* Small devices (landscape phones, less than 768px) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .card-body {
    font-size: 1.5rem;
  }
}

/* Medium devices (tablets, less than 992px) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .card-body {
    font-size: 1.5rem;
  }
}

/* Large devices (desktops, less than 1200px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  div.accordion-card {
    width: 80% !important;
  }
  .card-body {
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 1;
  }
  a.btn {
    font-weight: 100;
    font-size: 1.5rem;
  }
  h1,
  .h1 {
    font-size: 2.5rem;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  div.accordion-card {
    width: 50% !important;
  }
  .card-body {
    font-size: 1.8rem;
    font-weight: 100;
    line-height: 1;
  }
  a.btn {
    font-weight: 100;
  }
  h1,
  .h1 {
    font-size: 2.5rem;
  }
}
</style>


