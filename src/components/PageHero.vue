<template>
  <span>
    <div class="transparent">
      <v-container fluid fill-height class="page-hero" style="max-height:40vh;">
        <v-layout justify-center align-start column pa-5>
          <div class="display-2 font-weight-light white--text text-xs-center mb-3">Page Title</div>
          <div
            class="subheading font-weight-thin white--text text-xs-center"
          >Subtitle describing page.</div>
        </v-layout>
      </v-container>
    </div>
  </span>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped>
.transparent {
  background-color: #37474f !important;
  opacity: 0.9;
  border-color: transparent !important;
}

.page-hero {
  background: url("https://picsum.photos/g/900/300/?image=55");
  opacity: 0.8;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>