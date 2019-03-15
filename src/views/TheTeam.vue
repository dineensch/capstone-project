<template>
  <div>
    <nav-bar></nav-bar>
    <page-hero></page-hero>
    <b-container>
      <b-row>
        <b-col>
          <!-- CARD 1 -->
          <b-container>
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
                        top
                        class="mb-3"
                      />
                      <h3>Jane Doe</h3>
                      <span>View More</span>
                    </div>
                    <!-- End of card-content -->
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
                        top
                        class="mb-3"
                      />
                      <h3>Jane Doe</h3>
                      <span>View More</span>
                    </div>
                    <!-- End of card-content -->
                  </b-button>
                </div>
              </transition>
            </div>
          </b-container>
        </b-col>
        <!--END CARD 1 -->
        <!-- CARD 2 -->
        <b-col>
          <b-container>
            <div id="flip">
              <transition name="card" mode="out-in">
                <!-- FRONT OF CARD -->
                <div class="card" v-if="front2 == true" key="front2">
                  <b-button class="btn-flip" @click="front2 = false">
                    <div class="card-content">
                      <b-img
                        rounded="circle"
                        src="https://picsum.photos/300/300/?image=41"
                        alt="image"
                        top
                        class="mb-3"
                      />
                      <h3>Jane Doe</h3>
                      <span>View More</span>
                    </div>
                    <!-- End of card-content -->
                  </b-button>
                </div>
                <!-- BACK OF CARD -->
                <div class="card" v-else key="back">
                  <b-button class="btn-flip" @click="front2 = true">
                    <div class="card-content">
                      <b-img
                        rounded="circle"
                        src="https://picsum.photos/300/300/?image=41"
                        alt="image"
                        top
                        class="mb-3"
                      />
                      <h3>Jane Doe</h3>
                      <span>View More</span>
                    </div>
                    <!-- End of card-content -->
                  </b-button>
                </div>
              </transition>
            </div>
          </b-container>
        </b-col>
        <!-- END CARD 1 -->
      </b-row>
    </b-container>
  </div>
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

.card-img-top {
  border-radius: 50% !important;
}

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
  width: 300px;
  height: 210px;
  text-align: center;
  background-color: transparent !important;
  border-color: transparent !important;
}

.card-back {
  border-radius: 50% !important;
  background: url("https://picsum.photos/300/300/?image=41");
  width: 275px;
  height: 275px;
  text-align: center;
}

.card-content {
  color: black;
  border-radius: 50% !important;
  width: 275px;
  height: 275px;
  background-color: rgba(0, 0, 0, 0.5);
}

h1,
h2 {
  color: black;
}

.txt-wh {
  color: white;
}

.form {
  width: 270px;
  height: 120px;
  background-color: green;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  margin-top: 10px;
  margin-right: 15px;
  text-align: right;
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


