<template>
  <div class="page-hero fluid">
    <b-jumbotron class="page-hero fluid text-white">
      <video preload muted fluid autoplay loop>
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
</template>




<script>
export default {
  name: "PageHero"
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
  border-top: 2px solid rgba(255, 255, 255, 0.4) !important;
}

.page-hero {
  color: inherit;
  background-color: #eee;
  height: 300px;
  overflow: hidden;
  position: relative;
}
.content {
  position: relative;
}

.shade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
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
  font-size: 1.5rem;
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .page-hero .shade {
    height: 400px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .page-hero {
    height: 400px;
  }
}

@media (min-width: 992px) {
  .page-hero {
    height: 550px;
  }
  .content {
    padding: 100px 120px;
  }
}
</style>