<template>
  <div>
    <div class="regiones">
      <div class="region" v-for="(region, index) of regions" :key="index" @click="datosRegion(region.id)">
        {{region.region}}
      </div>
    </div>
    <div class="card" v-if="dataRegion">
      <div class="card-header">
        <h1>Cifras totales en {{dataRegion.region}}</h1>
      </div>
      <div class="card-body" v-for="(item,index) of dataRegion.regionData" :key="index">
        <p>Total de contagios: <span class="highligth">{{Intl.NumberFormat("es-CL").format(item.confirmed)}}</span></p>
        <p>Total de muertes: <span class="highligth">{{Intl.NumberFormat("es-CL").format(item.deaths)}}</span>, el <span class="highligth">{{Math.round((item.deaths / item.confirmed) * 100)}}%</span> de los contagios</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from 'vuex';

export default {
  name: "Regions",
  computed:{
    ...mapState(['regions'])
  },
  data(){
    return{
      dataRegion: null
    }
  },
  methods:{
    datosRegion(id){
      axios.get("https://chile-coronapi.herokuapp.com/api/v3/latest/regions?id="+id).then(response => (this.dataRegion = response.data))
    }
  }
}
</script>

<style scoped>
.regiones{
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.region{
  flex-direction: column;
  padding: 5px 15px;
  margin: 5px;
  background-color: royalblue;
  color: #fff;
  border-radius: 15px;
}

.region:hover{
  cursor: pointer;
}

</style>