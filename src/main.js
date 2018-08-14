/* eslint-disable no-new */
// 根实例
import Vue from 'vue'
import App from './App'// 根组件
import router from './router'
import './modules/config'
import store from './Store/index'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  // 因为根实例里其实仅仅只放入了根组件，所以可以这样指定根实例的模板就是根组件
  template: '<App/>'
})
