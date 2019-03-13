<template>
  <!-- To avoid errors when adding multiple templates, wrap in <span> -->
  <span>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" sticky="">
        <b-navbar-brand href="#/">I Do With Vue</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#/faqs">FAQs</b-nav-item>
            <b-nav-item href="#/theteam">The Team</b-nav-item>
            <b-nav-item href="#/RSVP">RSVP</b-nav-item>
          </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </span>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "RSVP", routeUrl: "/RSVP" },
        { title: "FAQs", routeUrl: "/faqs" },
        { title: "The Team", routeUrl: "/join" }
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

a {
  color: white;
  text-decoration: none;
}
</style>
