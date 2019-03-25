<template>
  <div>
    <nav-bar></nav-bar>
    <page-hero>
      <template v-slot:title>EDIT RSVP</template>
    </page-hero>
    <b-container fluid class="mt-3">
      <b-jumbotron>
        <b-row>
          <b-col cols="12">
            <b-form @submit="onSubmit">
              <b-form-group
                id="fieldsetHorizontal"
                breakpoint="md"
                label="Name"
                class="form-header"
              >
                <b-row>
                  <b-col cols="12" md="7">
                    <b-form-input id="name" v-model.trim="board.name" class="input-text"></b-form-input>
                  </b-col>
                  <b-col cols="12" md="7">
                    <b-form-select
                      id="dropdown"
                      v-model="board.rsvp"
                      :options="options"
                      class="input-text"
                    />
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group
                id="fieldsetHorizontal"
                breakpoint="md"
                label="Name"
                class="form-header"
              >
                <b-row>
                  <b-col cols="12" md="7">
                    <b-form-input id="guest" v-model.trim="board.guest" class="input-text"></b-form-input>
                  </b-col>
                  <b-col cols="12" md="7">
                    <b-form-select
                      id="dropdown"
                      v-model="board.rsvp2"
                      :options="options"
                      class="input-text"
                    />
                  </b-col>
                </b-row>
              </b-form-group>
              <b-button type="submit" class="update mt-5 mr-2">Update</b-button>
              <b-button
                class="mt-5 ml-2 btn button cancel"
                :to="{ name: 'RSVP', params: { id: key } }"
              >Cancel</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-jumbotron>
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

h2 {
  font-size: 5rem !important;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

.form-header {
  font-size: 4rem !important;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}
.input-text {
  font-size: 3rem !important;
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

.update {
  background-color: #581c1d !important;
}
.cancel {
  color: #fff !important;
  background-color: #6c757d !important;
  border-color: #818d97 !important;
  font-size: 1.5rem !important;
}

/* Small Desktop Screens */
@media (min-width: 425.98px) {
  .form-header {
    font-size: 2.5rem !important;
  }

  .input-text {
    font-size: 2rem !important;
  }
  /* .cancel {
    font-size: 2rem !important;
  } */
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