<template>
  <div class="page">
    <mt-navbar v-model="navId" fixed >
      <mt-tab-item id="110" @click.native="changeDataByNavId">首页</mt-tab-item>
      <mt-tab-item id="111" @click.native="changeDataByNavId">直播</mt-tab-item>
      <mt-tab-item id="114" @click.native="changeDataByNavId">健康</mt-tab-item>
      <mt-tab-item id="113" @click.native="changeDataByNavId">家居电器</mt-tab-item>
      <mt-tab-item id="115" @click.native="changeDataByNavId">美妆服饰</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-spinner type="triple-bounce" v-if="!show" color= 'gray' :size='40'></mt-spinner>
    <mt-tab-container v-model="navId" v-else>
      <mt-tab-container-item id="110">
        <div>
          <!-- <app-top></app-top> -->
          <app-banner :swiperData='Banner' :BannerDatas = "homeData.BannerDatas || {}"></app-banner>
          <app-quick-enter :QuickEnter = 'homeData.QuickEnter'></app-quick-enter>
          <app-banner :swiperData='adBanner' :BannerDatas = "homeData.adBannerDatas || {}"></app-banner>
          <app-broad-cast :BroadCasts='homeData.BroadCasts || {}' ></app-broad-cast>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="111">
        <div>hahah</div>
      </mt-tab-container-item>

      <mt-tab-container-item id="114">
        <div>qewredthgf</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="113">
      </mt-tab-container-item>
      <mt-tab-container-item id="115">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>

// import AppTop from './AppTop/AppTop'
import AppBanner from '../../commons/AppBanner/AppBanner'
// eslint-disable-next-line
import {mapActions, mapState,mapGetters, mapMutations} from 'vuex'

import {CHANGE_NAVID} from '../../../Store/common/const'
import AppQuickEnter from './AppQuickEnter/AppQuickEnter'
import AppBroadCast from './AppBroadCast/AppBroadCast'
import AppBigDiscount from './AppBigDiscount/AppBigDiscount'
// eslint-disable-next-line
import {Indicator} from 'mint-ui'

export default {
  name: 'Home',
  data () {
    return {
      navId: '110',
      Banner: {
        id: 'Banner',
        height: '1.43rem'
      },
      adBanner: {
        id: 'adBanner',
        height: '1rem',
        delay: 2000
      }
    }
  },
  components: {
    // AppTop,
    AppBanner,
    AppQuickEnter,
    AppBroadCast
  },
  methods: {
    ...mapMutations([CHANGE_NAVID]),
    ...mapActions(['getChangeHomeData']),
    changeDataByNavId () {
      if (this.navId === this.$store.state.modulecommon.navId) return false
      this.CHANGE_NAVID({navId: this.navId})
      this.getChangeHomeData()
      console.log(this.navId, 'aaa')
    }
  },
  created () {
    this.getChangeHomeData()
  },
  computed: {
    ...mapGetters(['homeDatas', 'show']),
    homeData () {
      if (!this.homeDatas) return false
      let homeDataObj = {}
      let dataArr = this.homeDatas.result
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
        }
      })
      return homeDataObj
    }
  }
}
</script>
<style lang="scss">
  .page{
    background: #f3f5f7;
    height: 100%;
    font-size: 0.15rem;
    >span {
      display: block;
      width: 100%;
      text-align: center;
      padding-top: .7rem;
    }
    .mint-navbar.is-fixed {
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
