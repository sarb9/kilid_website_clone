<template>
  <div class="occasionMapWrapper">
        <p class="mapTitle">نقشه</p>
        <l-map :zoom="6" :center="[lat,long]" style="border-radius:10px">
        <l-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tilelayer>
        <l-marker :lat-lng="[lat, long]"></l-marker>
  </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  name: "OccasionMap",
  components: {
    "l-map" :LMap,
    "l-tilelayer" : LTileLayer,
    "l-marker" : LMarker,
  },
  props : {
      lat : '',
      long : ''
  },
  data() {
    return {
    };
  },
  created() {
  }
};
</script>

<style scoped>
    .occasionMapWrapper {
        width:100%;
        height:300px;
        border-radius:10px;
        margin-top:20px;
        margin-bottom:20px;
    }

    .mapTitle {
        margin:10px;
    }
</style>