<template>
  <div>
    <div class="page-box"></div>
    <div class="page-hero fluid mb-0">
      <b-jumbotron class="fluid text-dark">
        <video preload muted fluid autoplay loop playsinline>
          <source src="../assets/video-background.mp4" type="video/mp4">
        </video>
        <div class="header-shade"></div>
        <div class="content">
          <h1 class="header">
            <slot name="title"></slot>
          </h1>
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
  name: "VideoHero"
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

.page-hero {
  background-color: #eee;
  overflow: hidden;
  position: relative;
}
.content {
  position: relative;
}

.header-shade {
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
  text-shadow: 1px 1px 2px #ffffff;
}
</style>