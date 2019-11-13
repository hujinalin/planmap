import Vue from 'vue'
import Vuex from 'vuex'
import assess from './assess.js'
import bigData from './bigData.js'
import manage from './manage.js'
import mind from './mind.js'
import planMap from './planMap.js'
import real from './real.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	assess,
  	bigData,
  	manage,
  	mind,
  	planMap,
  	real
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
