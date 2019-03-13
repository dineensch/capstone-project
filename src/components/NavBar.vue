<template>
  <!-- To avoid errors when adding multiple templates, wrap in <span> -->
  <span>
    <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <router-link :to="item.routeUrl">{{item.title}}</router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app color="grey darken-3" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/" class="pgtitle">
        <v-toolbar-title>I Do for Vue</v-toolbar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <v-btn flat class="hidden-sm-and-down nav-menu" to="/faqs">FAQs</v-btn>
      <v-btn flat class="hidden-sm-and-down nav-menu" to="/theteam">The Team</v-btn>
      <v-btn color="teal darken-4" class="hidden-sm-and-down" to="/RSVP">RSVP</v-btn>
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
