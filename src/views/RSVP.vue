<template>
  <div>
    <nav-bar></nav-bar>
    <page-hero>
      <template v-slot:title>RSVP</template>
      <template v-slot:body>Update your RSVP status below.</template>
    </page-hero>
    <b-container class="mt-5 px-5" fluid>
      <b-row>
        <b-col cols="12">
          <b-table
            stacked
            fixed
            striped
            hover
            :items="boards"
            :fields="fields"
            class="table-content"
          >
            <template slot="actions" scope="row">
              <b-btn @click.stop="details(row.item)">Edit</b-btn>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
    <!-- <show-board></show-board> -->
  </div>
</template>

<script>
import firebase from "../firebase";
import router from "../router";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
// import ShowBoard from "@/components/ShowBoard";

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
      ref: firebase.firestore().collection("boards"),
      title: "RSVP"
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
          rsvp: doc.data().rsvp
        });
      });
    });
  },
  methods: {
    details(board) {
      router.push({ name: "EditBoard", params: { id: board.key } });
      // router.push({ guest: "ShowBoard", params: { id: board.key } });
      // router.push({ rsvp: "ShowBoard", params: { id: board.key } });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
.table-content {
  font-size: 2rem;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}
th {
  font-size: 2rem;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

td.table-content {
  font-size: 5rem !important;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

button.btn {
  font-size: 1.5rem;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
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