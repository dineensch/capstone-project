<template>
  <div>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </div>
</template>


<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        {
          src: "https://picsum.photos/670/315/?image=52"
        },
        {
          src: "https://picsum.photos/670/315/?image=54"
        },
        {
          src: "https://picsum.photos/670/315/?image=58"
        },
        {
          src: "https://picsum.photos/670/315/?image=55"
        }
      ]
    };
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