// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
// swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
import '../stylesheets/main.scss'

// rem
import computedRem from './rem'
// 计算rem
Vue.config.productionTip = false

computedRem()

Vue.config.productionTip = false

Vue.prototype.$http = Axios
