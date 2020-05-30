import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    regions: [
      {id: 1, region: "Tarapacá"},
      {id: 2, region: "Antofagasta"},
      {id: 3, region: "Atacama"},
      {id: 4, region: "Coquimbo"},
      {id: 5, region: "Valparaíso"},
      {id: 6, region: "O’Higgins"},
      {id: 7, region: "Maule"},
      {id: 8, region: "Biobío"},
      {id: 9, region: "Araucanía"},
      {id: 10, region: "Los Lagos"},
      {id: 11, region: "Aysén"},
      {id: 12, region: "Magallanes"},
      {id: 13, region: "Metropolitana"},
      {id: 14, region: "Los Ríos"},
      {id: 15, region: "Arica y Parinacota"},
      {id: 16, region: "Ñuble"}
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
