<template>
  <div>
    <div class="regiones">
      <div class="region" v-for="(region, index) of regions" :key="index">
        {{region.region}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Regions",
  data () {
    return {
      regions: null
    }
  },
  mounted () {
    axios.get("https://chile-coronapi.herokuapp.com/api/v3/models/regions")
      .then(response => (this.regions = response.data))
  }
}
</script>

<style scoped>
.regiones{
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}
.region{
  flex-direction: column;
  padding: 5px 15px;
  margin: 5px;
  background-color: royalblue;
  color: #fff;
  border-radius: 15px;
}
</style>