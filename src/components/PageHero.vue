<template>
<span>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">Title</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">Subtitle</v-card-text>
          </v-card>
        </v-flex>
      <v-spacer></v-spacer>

    <v-container>

</span>
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
