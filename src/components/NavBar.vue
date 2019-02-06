<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Website</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown text="Dropdown" right>
          <b-dropdown-item href="#">One</b-dropdown-item>
          <b-dropdown-item href="#">Two</b-dropdown-item>
          <b-dropdown-item href="#">Three</b-dropdown-item>
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
  },
  props: {
    sticky: true
  }
};
</script>