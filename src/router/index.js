import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home'
import ProDetail from '../components/pages/ProDetail/ProDetail'
import BuyCar from '../components/pages/BuyCar/BuyCar'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Prodetail',
      name: 'ProDetail',
      component: ProDetail,
      props: (route) => ({goodsData: route.params.goodsData, goodsId: route.query.goodsId})
    },
    {
      path: '/buycar',
      name: 'buycar',
      component: BuyCar
    },
    {
      path: '**',
      redirect: {name: 'Home'}
    }
  ]
})
