<template>
  <b-row>
    <b-col cols="12">
      <h2>RSVP Board</h2>
      <b-link href="#/rsvp">Back to RSVP</b-link>
      <b-jumbotron>
        <template slot="lead">
          {{board.name}}: {{board.rsvp}}
          <br>
          {{board.guest}}: {{board.rsvp2}}
          <br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editboard(key)">Edit</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../firebase";
import router from "../router";

export default {
  name: "ShowBoard",
  data() {
    return {
      key: "",
      board: {}
    };
  },
  created() {
    const ref = firebase
      .firestore()
      .collection("boards")
      .doc(this.$route.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editboard(id) {
      router.push({
        name: "EditBoard",
        params: { id: id }
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