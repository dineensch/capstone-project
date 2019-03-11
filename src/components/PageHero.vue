<template>
<v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Page Title</h3>
            <v-divider class="my-3"></v-divider>
            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
  
  
            <v-btn
              class="mx-0"
              color="primary"
              large
            >
              See more
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
</template>


carousel

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
