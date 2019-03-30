<template>
  <div>
    <div class="page-box">
      <!-- <div class="page-line"></div> -->
    </div>
    <div class="page-hero fluid mb-0">
      <b-jumbotron class="fluid text-dark">
        <div class="shade"></div>
        <div class="content">
          <h1 class="header">
            <slot name="title"></slot>
          </h1>
          <hr class="my-2 divider">
          <p class="lead">
            <slot name="body"></slot>
          </p>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHero",
  data() {
    return {
      photoStyle: { class: "img-fluid", height: 100 }
    };
  }
};
</script>

<style scoped>
div.jumbotron {
  background-image: url("../assets/background.jpg");
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}

.page-hero {
  background-color: #eee;
  overflow: hidden;
  position: relative;
}
.content {
  position: relative;
}

.shade {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  position: absolute;

  top: 0;
  left: 0;
}

div.page-box {
  margin: 0;
  padding: 0;
  height: 2rem;
  position: relative;
  overflow: hidden;
  background-color: #212021;
}

.page-line {
  margin: 0;
  position: absolute;
  top: 60%;
  -ms-transform: translateY(-60%);
  transform: translateY(-60%);
  width: 90%;
  border: 1px solid #d1c0b8;
}

.header {
  font-weight: 400;
  text-shadow: 2px 2px 2px #ffffff;
  font-size: 8rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);
}

.lead {
  font-weight: 400;
  font-size: 4rem;
  line-height: 1;
  text-shadow: 1px 1px 2px #ffffff;
}
</style>