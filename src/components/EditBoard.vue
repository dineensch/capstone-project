<template>
  <div>
    <nav-bar></nav-bar>
    <page-hero></page-hero>
    <b-row>
      <b-col cols="12">
        <b-jumbotron>
          <h2>Edit RSVP</h2>
          <b-form @submit="onSubmit">
            <b-form-group id="fieldsetHorizontal" breakpoint="md" label="Name">
              <b-row>
                <b-col sm>
                  <b-form-input id="name" v-model.trim="board.name"></b-form-input>
                </b-col>
                <b-col sm>
                  <b-form-select id="dropdown" v-model="board.rsvp" :options="options"/>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="fieldsetHorizontal" breakpoint="md" label="Name">
              <b-row>
                <b-col sm>
                  <b-form-input id="guest" v-model.trim="board.guest"></b-form-input>
                </b-col>
                <b-col sm>
                  <b-form-select id="dropdown" v-model="board.rsvp2" :options="options"/>
                </b-col>
              </b-row>
            </b-form-group>
            <b-button type="submit" variant="info">Update</b-button>
            <b-btn variant="secondary" :to="{ name: 'RSVP', params: { id: key } }">Cancel</b-btn>
          </b-form>
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../fbconfig";
import router from "../router";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "EditBoard",
  components: {
    NavBar,
    PageHero
  },
  data() {
    return {
      key: this.$route.params.id,
      board: {},
      options: [
        { value: null, text: "Please select an option" },
        { value: "Attending", text: "Attending" },
        { value: "Not Attending", text: "Not Attending" }
      ]
    };
  },
  created() {
    const ref = db.collection("boards").doc(this.$route.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const updateRef = db.collection("boards").doc(this.$route.params.id);
      updateRef
        .set(this.board)
        .then(docRef => {
          this.key = "";
          this.board.name = "";
          this.board.rsvp = "";
          this.board.guest = "";
          this.board.rsvp2 = "";
          router.push({
            name: "RSVP",
            params: { id: this.$route.params.id }
          });
        })
        .catch(error => {
          alert("Error adding document: ", error);
        });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>