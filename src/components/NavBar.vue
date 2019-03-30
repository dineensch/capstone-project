<template>
  <b-container fluid class="m-0 p-0">
    <b-navbar class="px-4 py-2 pt-2" toggleable="lg" type="light">
      <div class="toggle-container">
        <b-navbar-toggle target="nav_collapse"/>
        <h3>MENU</h3>
      </div>

      <b-collapse is-nav id="nav_collapse" class="p-0 text-center">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto text-left">
          <b-navbar-nav class="nav-text">
            <b-nav-item href="#/">Home</b-nav-item>
            <b-nav-item href="#/venue">Venue</b-nav-item>
            <b-nav-item href="#/faqs">FAQs</b-nav-item>
            <b-nav-item href="#/theteam">The Team</b-nav-item>
            <b-nav-item href="#/RSVP">RSVP</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Venue", routeUrl: "/venue" },
        { title: "RSVP", routeUrl: "/rsvp" },
        { title: "FAQs", routeUrl: "/faqs" },
        { title: "The Team", routeUrl: "/theteam" }
      ]
    };
  }
};
</script>

<style scoped>
nav.navbar {
  border-top: 3px solid rgb(75, 75, 75);
  border-bottom: 2px solid rgb(75, 75, 75);
}

h3 {
  font-size: 2.5rem;
  display: inline-block;
  color: rgb(75, 75, 75);
}

button.navbar-toggler {
  font-weight: 500;
  font-size: 2.5rem;
  border: none;
}

a.nav-link {
  font-weight: 600;
  text-decoration: none;
  font-size: 3rem;
  line-height: 1.8;
  color: #212021 !important;
  text-transform: uppercase;
  margin: 0 1rem;
  letter-spacing: 8px;
}

a.nav-link:hover {
  color: #8a756e !important;
}
</style>
