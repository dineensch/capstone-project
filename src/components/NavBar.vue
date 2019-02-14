<template>
  <b-navbar toggleable="md" type="dark" variant="dark pt-2">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">Home</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav fixed="top" active>
          <b-nav-item to="/venue">Venue</b-nav-item>
          <b-nav-item to="/faqs">FAQs</b-nav-item>
          <b-nav-item to="/theteam">The Team</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>