<template>
  <div class="national">
    <div v-if="nation" class="card">
      <div class="card-header">
        <h1>Cifras totales en Chile al {{nation.day}}</h1>
      </div>
      <div class="card-body">
        <p>Total de contagios: <span class="highligth">{{formatConfirmed}}</span></p>
        <p>Total de muertes: <span class="highligth">{{formatDeaths}}</span>, el <span class="highligth">{{percentage}}%</span> de los contagios</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "Nation",
  data () {
    return {
      nation: null
    }
  },
  created(){
    this.cargarData()
  },
  methods:{
    cargarData(){
      api.getNation().then(data => {
        this.nation = data
      });
    }
  },
  computed:{
    percentage: function() {
        return Math.round((this.nation.deaths / this.nation.confirmed) * 100)
    },
    formatConfirmed: function() { 
        return Intl.NumberFormat("es-CL").format(this.nation.confirmed)
    },
    formatDeaths: function() { 
        return Intl.NumberFormat("es-CL").format(this.nation.deaths)
    }
  }
}
</script>

<style scoped>

.national{
  display: flex;
  justify-content: center;
}

</style>