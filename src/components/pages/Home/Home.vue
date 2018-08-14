<template>
  <div class="page">
    <app-top @click.native="$router.push({name: 'search'})"></app-top>
    <mt-navbar v-model="navId" fixed >
      <mt-tab-item id="110" @click.native="changeDataByNavId">首页</mt-tab-item>
      <mt-tab-item id="111" @click.native="changeDataByNavId">直播</mt-tab-item>
      <mt-tab-item id="114" @click.native="changeDataByNavId">健康</mt-tab-item>
      <mt-tab-item id="113" @click.native="changeDataByNavId">家居电器</mt-tab-item>
      <mt-tab-item id="115" @click.native="changeDataByNavId">美妆服饰</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-spinner type="triple-bounce" v-if="!modulehome.Show" color= 'gray' :size='40'></mt-spinner>
    <mt-tab-container v-model="navId" v-else>
      <mt-tab-container-item id="110">
        <div style="padding-top:.3rem" v-if="homeData.data110">
          <app-banner  :swiperData='Banner' :BannerDatas ="homeData.data110.BannerDatas"></app-banner>
          <app-quick-enter :QuickEnter='homeData.data110.QuickEnter'></app-quick-enter>
          <app-banner  :swiperData='adBanner' :BannerDatas ="homeData.data110.adBannerDatas"></app-banner>
          <app-broad-cast :BroadCasts='homeData.data110.BroadCasts' ></app-broad-cast>
          <app-big-discount :BigDiscounts='homeData.data110.BigDiscounts'></app-big-discount>
          <app-big-discount :BigDiscounts='homeData.data110.JumpDiscounts'></app-big-discount>
          <app-hot-goods v-if="navId === '110' && hasMore"></app-hot-goods>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="111">
        <div v-if="homeData.data111" style="padding-top:.3rem">
          <app-broad-cast :BroadCasts='homeData.data111.BrgBroadCaststwo'></app-broad-cast>
          <app-hot-goods v-if="navId === '111' && hasMore" :hotSale="homeData.data111.hotSale || 1"></app-hot-goods>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="114">
        <div v-if="homeData.data114" style="padding-top:.3rem">
          <app-banner :swiperData='Bannertwo' :BannerDatas ="homeData.data114.BannerDatas"></app-banner>
          <app-quick-enter :QuickEnter ='homeData.data114.QuickEnter'></app-quick-enter>
          <app-banner :swiperData='adBannertwo' :BannerDatas ="homeData.data114.adBannerDatas"></app-banner>
          <app-big-discount  :BigDiscounts='homeData.data114.BigDiscounts'></app-big-discount>
          <p style="text-align: center; line-height: .24rem;height: .24rem"> 哎呀，没有更多了</p>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="113">
        <div v-if="homeData.data113" style="padding-top:.3rem">
          <app-banner :swiperData='Bannerthree' :BannerDatas ="homeData.data113.BannerDatas"></app-banner>
          <app-quick-enter :QuickEnter ='homeData.data113.QuickEnter'></app-quick-enter>
          <app-banner :swiperData='adBannerthree' :BannerDatas ="homeData.data113.adBannerDatas"></app-banner>
          <app-big-discount  :BigDiscounts='homeData.data113.BigDiscounts'></app-big-discount>
          <app-big-discount :BigDiscounts='homeData.data113.JumpDiscounts'></app-big-discount>
          <p style="text-align: center; line-height: .24rem;height: .24rem"> 哎呀，没有更多了</p>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="115">
        <div v-if="homeData.data115" style="padding-top:.3rem">
          <app-banner :swiperData='Bannerfour' :BannerDatas ="homeData.data115.BannerDatas"></app-banner>
          <app-quick-enter :QuickEnter ='homeData.data115.QuickEnter'></app-quick-enter>
          <app-banner :swiperData='adBannerfour' :BannerDatas ="homeData.data115.adBannerDatas"></app-banner>
          <app-big-discount  :BigDiscounts='homeData.data115.BigDiscounts'></app-big-discount>
          <app-big-discount :BigDiscounts='homeData.data115.JumpDiscounts'></app-big-discount>
          <p style="text-align: center; line-height: .24rem;height: .24rem"> 哎呀，没有更多了</p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <app-footer></app-footer>

    <div class="nav">
      <span @click="$router.push({name: 'buycar'})">
        <img src="../../../assets/buyCar.png">
      </span>
    </div>
  </div>
</template>
<script>

import AppBanner from '../../commons/AppBanner/AppBanner'
import AppHotGoods from '../../commons/AppHotGoods/AppHotGoods'
import AppFooter from '../../commons/AppFooter/AppFooter'
import AppTop from '../../commons/AppTop/AppTop'
// eslint-disable-next-line
import {mapActions, mapState,mapGetters, mapMutations} from 'vuex'

import AppQuickEnter from './AppQuickEnter/AppQuickEnter'
import AppBroadCast from './AppBroadCast/AppBroadCast'
import AppBigDiscount from './AppBigDiscount/AppBigDiscount'

export default {
  name: 'Home',
  data () {
    return {
      hasMore: true,
      navId: '110',
      thisvalue: '',
      navIds: [],
      Banner: {
        id: 'Banner',
        height: '1.43rem'
      },
      adBanner: {
        id: 'adBanner',
        height: '1rem',
        delay: 2000
      },
      Bannertwo: {
        id: 'Bannertwo',
        height: '1.43rem'
      },
      adBannertwo: {
        id: 'adBannertwo',
        height: '1rem',
        delay: 2000
      },
      Bannerthree: {
        id: 'Bannerthree',
        height: '1.43rem'
      },
      adBannerthree: {
        id: 'adBannerthree',
        height: '1rem',
        delay: 1300
      },
      Bannerfour: {
        id: 'Bannerfour',
        height: '1.43rem'
      },
      adBannerfour: {
        id: 'adBannerfour',
        height: '1rem',
        delay: 1500
      },
      homeData: {}
    }
  },
  components: {
    AppTop,
    AppBanner,
    AppQuickEnter,
    AppBroadCast,
    AppBigDiscount,
    AppHotGoods,
    AppFooter
  },
  methods: {
    ...mapActions(['getChangeHomeData']),
    changeDataByNavId () {
      if (this.navIds.indexOf(this.navId) > -1) return false
      this.navIds.push(this.navId)
      this.getChangeHomeData({navId: this.navId})
    }
  },
  beforeRouteLeave (to, from, next) {
    this.hasMore = false
    next()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.hasMore = true
    })
  },
  created () {
    if (sessionStorage.getItem('navId')) { this.navId = sessionStorage.getItem('navId') }
    this.navIds.push(this.navId)
    this.getChangeHomeData({navId: this.navId})
  },
  watch: {
    modulehome: {
      deep: true,
      handler () {
        if (!this.modulehome.homeData) return {}
        let thishomeData = {}
        for (let key in this.modulehome.homeData) {
          let homeDataObj = {}
          let dataArr = this.modulehome.homeData[key].data.result
          dataArr.forEach(item => {
            switch (item.moduleType) {
              case '10' :
                homeDataObj.BannerDatas = item
                break
              case '12' :
                homeDataObj.adBannerDatas = item
                break
              case '11' :
                homeDataObj.QuickEnter = item
                break
              case '14' :
                homeDataObj.BroadCasts = item
                break
              case '15' :
                homeDataObj.BigDiscounts = item
                break
              case '17' :
                homeDataObj.JumpDiscounts = item
                break
              case '20' :
                homeDataObj.Brands = item
                break
              case '23' :
                homeDataObj.BrgBroadCaststwo = item
                break
              case '24' :
                homeDataObj.hotSale = item
                break
            }
          })
          thishomeData[key] = homeDataObj
        }
        this.homeData = thishomeData
      }
    }
  },
  computed: {
    ...mapState(['modulehome'])
  }
}
</script>
<style lang="scss">
  .page{
    .nav{
      position: fixed;
      bottom: .9rem;
      left: .4rem;
      span{
        border: 1px solid red;
        border-radius: 50%;
        display: inline-block;
        padding: .08rem;
        background: #fff;
        img{
          width: .3rem;
          height: .3rem;
          display: inline-block;
          background: #fff;
        }
      }
    }
    background: #f3f5f7;
    height: 100%;
    font-size: 0.15rem;
    >span {
      display: block;
      width: 100%;
      text-align: center;
      padding-top: 1rem;
    }
    .mint-header.is-fixed{
      z-index: 1000;
    }
    .mint-navbar.is-fixed {
      top: .40rem;
      z-index: 1000;
    }
    .mint-tab-container{
      margin-top: 0.5rem;
    }
    .ml_title ul {
      float: right;
      margin-right: 3%;
      font-size: 0.15rem;
      li {
        float: left;
        width: 0.4rem;
        margin-left: 0.08rem;
        color: #3e3a39;
        font-weight: normal;
        em {
          font-style: normal;
          float: right;
          color: #858a8e;
          font-size: 14px;
        }
      }
    }
  }
</style>
