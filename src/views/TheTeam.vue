<template>
  <div class="mb-5">
    <nav-bar></nav-bar>
    <page-hero>
      <template v-slot:title>The Team</template>
      <template v-slot:body>Meet the wedding party.</template>
    </page-hero>
    <b-container>
      <b-row>
        <!-- COLUMN 1 -->
        <b-col>
          <div id="flip">
            <transition name="card" mode="out-in">
              <!-- FRONT OF CARD -->
              <div class="card" v-if="front == true" key="front">
                <b-button class="btn-flip" @click="front = false">
                  <div class="card-content">
                    <b-img
                      rounded="circle"
                      src="https://picsum.photos/300/300/?image=41"
                      alt="image"
                      fluid
                      class="mb-3"
                    />
                    <h3>Jane Doe</h3>
                    <span>View More</span>
                  </div>
                </b-button>
              </div>
              <!-- BACK OF CARD -->
              <div class="card" v-else key="back">
                <b-button class="btn-flip" @click="front = true">
                  <div class="card-content">
                    <b-img
                      rounded="circle"
                      src="https://picsum.photos/300/300/?image=41"
                      alt="image"
                      fluid
                      class="mb-3"
                    />
                    <h3>Back</h3>
                    <span>View More</span>
                  </div>
                </b-button>
              </div>
            </transition>
          </div>
        </b-col>
        <b-col>
          <div id="flip">
            <transition name="card" mode="out-in">
              <!-- FRONT OF CARD -->
              <div class="card" v-if="front == true" key="front">
                <b-button class="btn-flip" @click="front = false">
                  <div class="card-content">
                    <b-img
                      rounded="circle"
                      src="https://picsum.photos/300/300/?image=41"
                      alt="image"
                      fluid
                      class="mb-3"
                    />
                    <h3>Jane Doe</h3>
                    <span>View More</span>
                  </div>
                </b-button>
              </div>
              <!-- BACK OF CARD -->
              <div class="card" v-else key="back">
                <b-button class="btn-flip" @click="front = true">
                  <div class="card-content">
                    <b-img
                      rounded="circle"
                      src="https://picsum.photos/300/300/?image=41"
                      alt="image"
                      fluid
                      class="mb-3"
                    />
                    <h3>Back</h3>
                    <span>View More</span>
                  </div>
                </b-button>
              </div>
            </transition>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!--END CARD 1 -->
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
      front: true,
      front2: true
    };
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .icon {
	background: url("https://picsum.photos/300/300/?image=41");
} */

/* .card {
	background-color: transparent;
	border: none;
} */

#flip {
  display: flex;
  justify-content: center;
}

.btn-flip {
  color: none !important;
  background-color: transparent !important;
  border-color: transparent !important;
}

.card {
  text-align: center;
  background-color: transparent !important;
  border-color: transparent !important;
}

.card-content {
  color: black;
  /* background-color: rgba(0, 0, 0, 0.5); */
}

h1,
h2 {
  color: black;
}

.txt-wh {
  color: white;
}

.card-enter,
.card-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s;
}
</style>


