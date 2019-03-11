<template>
  <span>
    <nav-bar></nav-bar>
    <page-hero></page-hero>
    <div>
      <v-flex xs12 sm6>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }">
                <v-card>
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg" height="200px">
                    <!-- <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                    </v-container>-->
                  </v-img>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </div>
  </span>
</template>


<script>
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "TheTeam",
  components: {
    NavBar,
    PageHero
  },
  data() {
    return {
      results: null,
      name1: "",
      name2: "",
      code: "",
      oneRSVP: true,
      showForm: false,
      success: false
    };
  },
  methods: {
    validateForm: function() {
      if (this.name1 != "" && this.code != "" && this.code < 5) {
        console.log("Guest does not have a +1.");
        this.showForm = false;
        this.oneRSVP = true;
        this.success = true;
      } else {
        console.log("Guest has a +1. Show 2nd Form.");
        this.showForm = true;
        this.oneRSVP = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
}
a {
  color: #42b983;
}
</style>


