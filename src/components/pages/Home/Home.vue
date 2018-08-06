<template>
  <div class="page">
    <app-top></app-top>
    <app-banner :swiperData='Banner' :BannerDatas = "homeData.BannerDatas || {}"></app-banner>
    <app-quick-enter :QuickEnter = 'homeData.QuickEnter'></app-quick-enter>
    <app-banner :swiperData='adBanner' :BannerDatas = "homeData.adBannerDatas || {}"></app-banner>
    <app-broad-cast :BroadCasts='homeData.BroadCasts || {}' >
      <div>
        <app-title-top title="今日直播">
          <ul>
              <li class="">江苏<em>|</em></li>
              <li class="oncolor">全国</li>
          </ul>
        </app-title-top>
      </div>
    </app-broad-cast>
  </div>
</template>
<script>
import AppTop from './AppTop/AppTop'
import AppBanner from '../../commons/AppBanner/AppBanner'
import AppTitleTop from '../../commons/AppTitleTop/AppTitleTop'
// eslint-disable-next-line
import {mapActions, mapState,mapGetters} from 'vuex'
import AppQuickEnter from './AppQuickEnter/AppQuickEnter'
import AppBroadCast from './AppBroadCast/AppBroadCast'
export default {
  name: 'Home',
  data () {
    return {
      navId: 110,
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
    AppTop,
    AppBanner,
    AppQuickEnter,
    AppTitleTop,
    AppBroadCast
  },
  methods: {
    ...mapActions(['getChangeHomeData'])
  },
  created () {
    this.getChangeHomeData()
  },
  computed: {
    ...mapGetters(['homeDatas']),
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
    body {
    height: 200rem ;
    background: #f3f5f7;
    font-size: 0.15rem;
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
