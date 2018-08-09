// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import './filter'
// swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
import '../stylesheets/main.scss'

import 'mint-ui/lib/style.css'

import {
  Spinner,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Lazyload,
  InfiniteScroll,
  Header,
  Search,
  Button
} from 'mint-ui'
// rem
import computedRem from './rem'
// 计算rem
Vue.config.productionTip = false

computedRem()

Vue.config.productionTip = false

Vue.prototype.$http = Axios

Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Spinner.name, Spinner)
Vue.component(Header.name, Header)
Vue.component(Search.name, Search)
Vue.component(Button.name, Button)

Vue.use(Lazyload)
Vue.use(InfiniteScroll)
