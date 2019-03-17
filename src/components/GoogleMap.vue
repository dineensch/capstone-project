<template>
  <GmapMap
    :options="options"
    :center="{ lat: 47.608954, lng: -122.317481 }"
    :zoom="15"
    map-type-id="roadmap"
    style="width: 100%; height: 400px"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 47.608954, lng: -122.317481 },
      options: {
        scrollwheel: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: true,
        styles: [
          {
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#e8e8e8"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#232323"
              }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.park",
            stylers: [
              {
                color: "#640032"
              },
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.school",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "poi.school",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#640032"
              }
            ]
          },
          {
            featureType: "poi.school",
            elementType: "labels.text",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.school",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#800040"
              },
              {
                weight: 2
              }
            ]
          },
          {
            featureType: "road",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road.highway",
            stylers: [
              {
                color: "#a0a0a0"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#808080"
              },
              {
                visibility: "simplified"
              }
            ]
          }
        ]
      },
      markers: [
        {
          position: {
            lat: 47.608954,
            lng: -122.317481
          }
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


