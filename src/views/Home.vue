<template>
  <div>
    <nav-bar></nav-bar>
    <div class="page-content m-0 p-0 fluid">
      <b-jumbotron class="page-hero m-0 p-0 fluid text-white">
        <video preload muted fluid autoplay loop>
          <source src="../assets/video-background.mp4" type="video/mp4">
        </video>
        <div class="shade"></div>
        <div class="content">
          <h1 class="header">Welcome to</h1>
          <hr class="my-4 divider">
          <h1 class="header">I Do With Vue</h1>
          <b-btn variant="secondary" href="#anchor">View More</b-btn>
        </div>
      </b-jumbotron>
      <b-container class="mt-5" id="anchor">
        <div>
          <b-card no-body style="max-width: 540px;">
            <b-row>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=1055" class="rounded-0"/>
              </b-col>
              <b-col md="6">
                <b-card-body title="Who We Are">
                  <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>

        <div class="mt-5">
          <b-card-group deck>
            <b-card
              title="RSVP"
              img-src="https://picsum.photos/300/300/?image=999"
              img-alt="Image"
              img-top
            >
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b-card-text>
              <b-button variant="secondary" :to="{ name: 'RSVP'}">></b-button>
            </b-card>
            <b-card
              title="FAQs"
              img-src="https://picsum.photos/300/300/?image=998"
              img-alt="Image"
              img-top
            >
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b-card-text>
              <b-button variant="secondary" :to="{ name: 'FAQs'}">></b-button>
            </b-card>
            <b-card
              title="Venue"
              img-src="https://picsum.photos/300/300/?image=975"
              img-alt="Image"
              img-top
            >
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b-card-text>
              <b-button variant="secondary" :to="{ name: 'Venue'}">></b-button>
            </b-card>
            <!-- <b-card class="card-spacer"></b-card> -->
          </b-card-group>
        </div>
      </b-container>
    </div>
  </div>
</template>



<script>
import firebase from "firebase";
import router from "../router";
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  }
  //   data() {
  //     return {
  //       fields: {
  //         guestName: { label: "Name" },
  //         addGuest: { label: "Guest Name" },
  //         guest: { label: "Guest", class: "text-left" },
  //         actions: { label: "RSVP", class: "text-center" }
  //       },
  //       boards: [],
  //       errors: [],
  //       ref: firebase.firestore().collection("users"),
  //       guests: [],
  //       results: null,
  //       slide: 0,
  //       sliding: null,
  //       form1Name: "",
  //       form1Name2: "",
  //       form1Code: "",
  //       oneRSVP: true,
  //       showForm: false,
  //       success: false,
  //       name1: "",
  //       name2: "",
  //       code: ""
  //     };
  //   },
  //   created() {
  //     this.ref.onSnapshot(querySnapshot => {
  //       this.boards = [];
  //       querySnapshot.forEach(doc => {
  //         this.boards.push({
  //           key: doc.id,
  //           guest: doc.data().guest
  //         });
  //       });
  //     });
  //   },
  //   methods: {
  //     validateForm: function() {
  //       firebase
  //         .auth()
  //         .signInWithEmailAndPassword(this.name1, this.code)
  //         .then(
  //           function(user) {
  //             alert("You are now logged in!");
  //           },
  //           function(err) {
  //             alert("Oops! " + err.message);
  //           }
  //         );
  //     },

  //     validateForm1: function() {
  //       if (this.formName1 != "" && this.form1Code != "" && this.form1Code < 5) {
  //         console.log("Guest does not have a +1.");
  //         this.showForm = false;
  //         this.oneRSVP = true;
  //         this.success = true;
  //       } else {
  //         console.log("Guest has a +1. Show 2nd Form.");
  //         this.showForm = true;
  //         this.oneRSVP = false;
  //       }
  //     },

  //     onSlideStart(slide) {
  //       this.sliding = true;
  //     },
  //     onSlideEnd(slide) {
  //       this.sliding = false;
  //     },

  //     details(board) {
  //       router.push({ name: "ShowForm", params: { id: board.key } });
  //     }
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.divider {
  border-top: 2px solid rgba(255, 255, 255, 0.4) !important;
}
.card-spacer {
  border: none;
  padding: 0;
}
.page-hero {
  color: inherit;
  background-color: #eee;
  height: 500px;
  overflow: hidden;
  position: relative;
}
.content {
  position: relative;
}

/* .shade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
} */

.header {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 5rem !important;
}

.lead {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1.5rem;
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .page-hero {
    height: 100% !important;
  }
  .content {
    padding: 100px 120px !important;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .page-hero {
    height: 100% !important;
  }
  .content {
    padding: 100px 120px !important;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .page-hero {
    height: 100% !important;
  }
  .content {
    padding: 100px 120px !important;
  }
}

@media (min-width: 1200px) {
  .page-hero {
    height: 1000px !important;
  }
  .content {
    padding: 100px 120px;
  }
}
</style>