<template>
  <b-row>
    <b-col cols="12">
      <h2>Submit Your RSVP</h2>
      <b-jumbotron>
        <template slot="header">
          <!-- {{board.name}} -->
        </template>
        <template slot="lead">
          {{board.name}}
          <br>
          {{board.guestName}}
          <br>
          Code: {{board.code}}
          <br>
        </template>
        <hr class="my-4">
        <b-btn variant="success" @click.stop="attending(key)">Attending</b-btn>
        <b-btn variant="dark" @click.stop="notAttending(key)">Not Attending</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../firebase";
import router from "../router";

export default {
  name: "ShowForm",
  data() {
    return {
      key: "",
      board: {}
    };
  },
  created() {
    let ref = firebase
      .firestore()
      .collection("users")
      .doc(this.$route.params.id)
      .collection("guests");
    ref.get().then(doc => {
      // if (doc.exists) {
      this.key = doc.id;
      this.board = doc.data();
      // } else {
      // alert("No such document!");
      // }
    });
  },
  methods: {
    editboard(id) {
      router.push({
        name: "EditBoard",
        params: { id: id }
      });
    },
    deleteboard(id) {
      firebase
        .firestore()
        .collection("users")
        .doc(id)
        .delete()
        .then(() => {
          router.push({
            name: "Home"
          });
        })
        .catch(error => {
          alert("Error removing document: ", error);
        });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
.edit-btn {
  margin-right: 20px;
  width: 70px;
}
</style>