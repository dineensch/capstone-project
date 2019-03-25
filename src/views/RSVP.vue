<template>
  <div class="RSVP">
    <page-hero>
      <template v-slot:title>RSVP</template>
      <template v-slot:body>Update your RSVP status below.</template>
    </page-hero>
    <nav-bar></nav-bar>
    <b-container fluid class="mt-5 px-5">
      <p class="nomessages text-secondary" v-if="boards.length == 0">
        <strong>Loading...</strong>
      </p>
      <b-container fluid>
        <div v-for="board in boards" :key="board.id">
          <hr class="divider">
          <b-row class="py-5">
            <b-col cols="12">
              <h1>
                <strong>{{ board.name }}:</strong>
                {{board.rsvp}}
              </h1>
            </b-col>
            <b-col cols="12">
              <h1>
                <strong>{{ board.guest }}:</strong>
                {{board.rsvp2}}
              </h1>
            </b-col>
            <b-col cols="12" class="pt-5">
              <b-button @click.stop="edit(board)">Edit</b-button>
            </b-col>
          </b-row>
        </div>
        <hr class="divider">
        <div class="logout text-center mt-5">
          <b-button class="px-5" v-on:click="logout">Logout</b-button>
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../fbconfig";
import router from "../router";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export default {
  name: "RSVP",
  components: {
    NavBar,
    PageHero
    // ShowBoard
  },
  data() {
    return {
      fields: {
        name: { label: "Name", class: "text-left" },
        guest: { label: "Guest", class: "text-left" },
        rsvp: { label: "RSVP", class: "text-left" },
        actions: { label: "", class: "text-left" }
      },
      boards: [],
      errors: [],
      ref: db.collection("boards")
    };
  },
  created() {
    this.ref.onSnapshot(querySnapshot => {
      this.boards = [];
      querySnapshot.forEach(doc => {
        this.boards.push({
          key: doc.id,
          name: doc.data().name,
          guest: doc.data().guest,
          rsvp: doc.data().rsvp,
          rsvp2: doc.data().rsvp2
        });
      });
    });
  },
  methods: {
    edit(board) {
      router.push({ name: "EditBoard", params: { id: board.key } });
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}

h1 {
  font-size: 4rem !important;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

button.btn {
  font-size: 3rem;
}

.logout {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.divider {
  border-top: 2px solid rgba(88, 87, 87, 0.829) !important;
}
/* Small Desktop Screens */
@media (min-width: 425.98px) {
  h1 {
    font-size: 2.4rem !important;
    font-family: brandon-grotesque, sans-serif !important;
    font-weight: 300 !important;
  }
  button.btn {
    font-size: 1.5rem;
  }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>