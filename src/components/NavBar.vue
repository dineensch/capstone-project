<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="grey darken-1"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
      <!-- hamburger menu -->
    <!-- v-toolbar adding the 'app' prop designates the component as part of the application layout. -->
    <v-toolbar app color="grey darken-3" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">Home</v-toolbar-title>
      </router-link>
      <v-btn flat class="hidden-sm-and-down" to="/RSVP">RSVP</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to="/FAQs">FAQs</v-btn>
      <v-btn color="teal darken-4" class="hidden-sm-and-down" to="/theteam">The Team</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "RSVP", routeURL: "/RSVP" },
        { title: "FAQs", routeURL: "/faqs" },
        { title: "The Team", routeURL: "/theteam" }
      ]
    };
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>