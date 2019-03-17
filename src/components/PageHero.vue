<template>
  <div class="page-hero">
    <b-jumbotron class="page-hero fluid text-white">
      <h1 class="header">
        <slot name="title"></slot>
      </h1>
      <hr class="my-4 divider">
      <p class="lead">
        <slot name="body"></slot>
      </p>
    </b-jumbotron>
  </div>
</template>


<script>
export default {
  name: "PageHero"
};
</script>

<style scoped>
.transparent {
  background-color: #37474f !important;
  opacity: 0.7;
  border-color: transparent !important;
}

.divider {
  border-top: 2px solid rgba(255, 255, 255, 0.4) !important;
}

.page-hero {
  background: url("https://picsum.photos/g/900/300/?image=55");
  opacity: 0.9;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.header {
  font-size: 5rem !important;
}
</style>