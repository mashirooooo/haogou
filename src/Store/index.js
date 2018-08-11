import modulehome from './home'
import modulecommon from './common'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    modulehome,
    modulecommon
  }
})
export default store
