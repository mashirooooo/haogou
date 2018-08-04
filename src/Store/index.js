import moduleHome from './Home'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    moduleHome
  }
})
export default store
