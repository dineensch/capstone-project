<template>
  <div id="app">
    <b-container fluid class="p-0 mx-0">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
html {
  margin-bottom: 20%;
}
</style>
