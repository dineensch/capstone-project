<template>
  <div>
    <div class="carousel-section">
      <div class="middle-left p-3">Welcome</div>
      <b-carousel
        id="carousel1"
        controls
        indicators
        :interval="4000"
        img-width="100"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <b-carousel-slide img-src="https://picsum.photos/670/315/?image=52"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/670/315/?image=54"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/670/315/?image=58"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/670/315/?image=55"></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "jumbotron",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
}
a {
  color: #42b983;
}

.carousel-section {
  position: relative;
}

.middle-left {
  position: absolute;
  color: white;
  margin: auto 0;
  top: 25%;
  font-size: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100px;
  z-index: 20;
}
</style>