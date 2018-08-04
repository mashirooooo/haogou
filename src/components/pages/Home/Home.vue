<template>
  <div class="page">
    <app-top></app-top>
    <app-banner :swiperData='Banner' :BannerDatas = "homeData.BannerDatas"></app-banner>
    <app-quick-enter :QuickEnter = 'homeData.QuickEnter'></app-quick-enter>
    <app-banner :swiperData='adBanner' :BannerDatas = "homeData.adBannerDatas"></app-banner>
    <app-title-top title="今日直播">
    </app-title-top>
  </div>
</template>
<script>
import AppTop from './AppTop/AppTop'
import AppBanner from '../../commons/AppBanner/AppBanner'
import AppTitleTop from '../../commons/AppTitleTop/AppTitleTop'
// eslint-disable-next-line
import {mapActions, mapState,mapGetters} from 'vuex'
import AppQuickEnter from './AppQuickEnter/AppQuickEnter'
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
    AppTitleTop
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
        }
      })
      return homeDataObj
    }
  }
}
</script>
<style lang="scss">
    body {
    background: #f3f5f7;
    font-size: 0.15rem;
  }
</style>
