<template>
  <b-container fluid class="m-0 p-0">
    <b-navbar class="px-4 py-2 m-0" toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#/">
        <img src="../assets/nav-icon.png" class="d-inline-block align-top" alt="Hearts icon">
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse" class="p-0">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="nav-text">
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
.pgtitle {
  color: white;
  text-decoration: none;
}

a.navbar-brand {
  font-size: 3.5rem;
}

.navbar-toggler {
  font-size: 2rem !important;
}

a {
  color: white;
}

a.nav-link {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7) !important;
}
a.nav-link:hover {
  color: rgba(255, 255, 255) !important;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .nav-text {
    font-size: 25px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  a.navbar-brand {
    font-size: 2.5rem;
  }
  a.nav-link {
    font-size: 1.5rem;
  }

  nav.navbar {
    line-height: 1;
  }
}
</style>
