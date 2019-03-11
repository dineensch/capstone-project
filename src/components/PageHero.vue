<template>
  <v-container fluid fill-height class="page-hero" style="max-height:70vh;">
    <v-layout justify-center align-center column pa-5>
      <div
        class="display-4 font-weight-black white--text text-xs-center"
        v-text="pageTitle"
      >PAGE TITLE</div>
      <div class="display-1 font-weight-bold white--text text-xs-center">Page description goes here.</div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PageHero",
  data() {
    return {
      pageTitle: "Page Title"
    };
  }
};
</script>

<style scoped>
.page-hero {
  background: url("https://picsum.photos/670/315/?image=55");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
