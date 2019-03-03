<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "app",

  components: {
    "nav-bar": NavBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0 20px 20px 20px;
}
html {
  background: rgb(82, 78, 78);
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: #fff;
}
</style>
