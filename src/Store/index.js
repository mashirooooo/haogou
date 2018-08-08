import modulehome from './home'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    modulehome
  }
})
export default store
