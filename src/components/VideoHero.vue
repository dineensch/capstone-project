<template>
  <div>
    <div class="page-box">
      <div class="page-line"></div>
    </div>
    <div class="page-hero fluid">
      <b-jumbotron class="fluid text-dark">
        <video preload muted fluid autoplay loop playsinline>
          <source src="../assets/video-background.mp4" type="video/mp4">
        </video>
        <div class="shade"></div>
        <div class="content">
          <h1 class="header">
            <slot name="title"></slot>
          </h1>
          <hr class="my-4 divider">
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
  name: "VideoHero",
  data() {
    return {
      photoStyle: { class: "img-fluid", height: 100 }
    };
  }
};
</script>

<style scoped>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.divider {
  border-top: 2px solid rgba(0, 0, 0, 0.4) !important;
}

.page-hero {
  color: inherit;
  background-color: #eee;
  height: 20rem;
  overflow: hidden;
  position: relative;
}
.content {
  position: relative;
}

.shade {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}

div.page-box {
  margin: 0;
  padding: 0;
  height: 8rem;
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
  font-family: brandon-grotesque, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 5rem !important;
}

.lead {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 3rem;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 425.98px) and (max-width: 767.98px) {
  div.page-box {
    height: 5rem;
  }
  .header {
    font-size: 4rem !important;
  }
  .lead {
    font-size: 2rem !important;
  }
  hr {
    margin-top: 0.3rem !important;
    margin-bottom: 0.3rem !important;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .page-box {
    height: 4rem !important;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* Medium devices (tablets, less than 992px) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .page-hero {
    height: 400px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .page-hero {
    height: 27rem;
    margin-bottom: 0.8rem;
  }
  .content {
    padding: 100px 120px;
  }
}
</style>