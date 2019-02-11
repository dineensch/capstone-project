<template>
  <b-navbar toggleable="md" type="dark" variant="dark mt-4">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">Home</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav fixed="top" active>
          <b-nav-item to="/rsvp">RSVP</b-nav-item>
          <b-nav-item to="/venue">Venue</b-nav-item>
          <b-nav-item href="#">FAQs</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown text="The Team" right>
          <b-dropdown-item href="#">Groom's Side</b-dropdown-item>
          <b-dropdown-item href="#">Bride's Side</b-dropdown-item>
        </b-nav-item-dropdown>
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