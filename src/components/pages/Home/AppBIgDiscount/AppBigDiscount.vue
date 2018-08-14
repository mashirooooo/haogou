<template>
  <div id="app-big-discount">
    <div>
      <app-title-top :title="BigDiscounts.moduleNm">
        <a class="loadMore fr">更多>></a>
        <div class="time-item fr" v-if="Countdown > 0">
          <font class="daojishi">距离结束</font><strong class="fg" id="hour_show">{{hour_show > 9 ? hour_show : '0' + hour_show}}</strong>
          <font class="fd">:</font> <strong class="fg" id="minute_show">{{minute_show > 9 ? minute_show : '0' + minute_show}}</strong>
          <font class="fd">:</font> <strong class="fg" id="second_show">{{second_show > 9 ? second_show : '0' + second_show}}</strong>
        </div>
      </app-title-top>
      <div class="swiper-container swiper-8" :class ="'i'+BigDiscounts.moduleType">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width: 112.333px; margin-right: 10px;" v-for=" (item, index) in BigDiscount" :key="item.goodsId +'i'+index" >
            <div>
                <router-link exact :to="{name: 'ProDetail', query: {goodsId: item.goodsId}, params: {goodsData: item}}" class="external pre postions">
                  <img class="lazy" :src="item.imgUrl" :data-original="item.imgUrl" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                </router-link>
                <p class="pt_title_new height_pt" v-if="show">{{item.goodsUsp}}</p>
                <p class="pt_title_new height_pt" v-else>{{item.goodsNm}}</p>
                <p class="pt_price_new" v-if="show">拼团价:￥<span>{{item.salePrc}}</span></p>
                <s v-if="show">单独买:￥{{item.marketPrc}}</s>
                <p class="pt_price_new" v-if="!show">惊爆价:￥<span>{{item.salePrc}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Swiper from 'swiper'
import AppTitleTop from '../../../commons/AppTitleTop/AppTitleTop'
import Vue from 'vue'
export default {
  name: 'AppBIgDiscount',
  data () {
    return {
      timer: 0
    }
  },
  components: {
    AppTitleTop
  },
  mounted () {
    window.setInterval(() => {
      this.timer++
    }, 1000)
    Vue.nextTick(() => {
      let thisid = '.i' + this.BigDiscounts.moduleType
      // eslint-disable-next-line
      new Swiper(thisid, {
        autoplay: false,
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        watchOverflow: true,
        updateOnImagesReady: true
      })
    })
  },
  props: ['BigDiscounts'],
  computed: {
    show () {
      if (this.BigDiscounts.moduleType === '15') return true
      return false
    },
    Countdowns () {
      return this.BigDiscounts.remark ? parseInt(this.BigDiscounts.remark) : 0
    },
    Countdown () {
      return this.Countdowns > 0 ? this.Countdowns - this.timer : 0
    },
    hour_show () {
      return this.Countdown > 0 ? Math.floor(this.Countdown / (60 * 60)) : 0
    },
    minute_show () {
      return this.Countdown > 0 ? Math.floor(this.Countdown / 60 - this.hour_show * 60) : 0
    },
    second_show () {
      return this.Countdown > 0 ? Math.floor(this.Countdown % 60) : 0
    },
    BigDiscount () {
      return this.BigDiscounts && this.BigDiscounts.data ? JSON.parse(this.BigDiscounts.data) : 1
    }
  }
}
</script>
<style lang="scss" scoped>
  #app-big-discount {
    .postions {
      position: relative;
      display: block;
      width: 80%;
      margin-left: 10%;
    }
    .swiper-8{
      width: 95%!important;
      height: 100%;
      .swiper-wrapper {
        .swiper-slide{
          margin-top: 10px;
          margin-bottom: 10px;
          a {
            height: 0;
            padding-bottom: 80%;
            img {
              width: 100%;
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
            }
          }
          .pt_title_new {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .14rem;
            color: #202020;
            margin-top: .2rem;
          }
          .height_pt {
            height: .2rem;
          }
          .pt_price_new {
            color: #e43d40;
            font-size: .12rem;
            span{
              font-size: .16rem;
            }
          }
          s{
            font-size: .12rem;
            color: #999;
          }
        }
      }
    }
    .loadMore {
      font-size: .15rem;
      display: inline-block;
      margin-left: .1rem
    }
    .time-item{
    color: #000;
    margin-left: .1rem;
      .daojishi {
        line-height: .24rem;
        margin-right: 4px;
        font-size: .14rem;
        color: #696969;
      }
      .fg {
        display: inline-block;
        line-height: .18rem;
        padding: 0 2px;
        text-align: center;
        background: #434343;
        color: #fff;
        font-size: .12rem;
        border-radius: 4px;
        font-weight: normal;
      }
    }
  }
</style>
