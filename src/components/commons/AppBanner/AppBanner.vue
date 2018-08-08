<template>
  <div :id='swiperData.id' class="swiper-container" >
    <div class="swiper-wrapper swipe-wrap">
      <div class="swiper-slide" v-for="item in BannerData" :key="item.linkId" :style="{'height': swiperData.height}">
        <a :href="item.linkId | filterA" >
          <img :style="{'height': swiperData.height}" :src="item.imgUrl">
        </a>
      </div>
    </div>
    <div class="swiper-pagination appbanner"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'AppBanner',
  props: ['BannerDatas', 'swiperData'],
  computed: {
    BannerData () {
      return this.BannerDatas && this.BannerDatas.data ? JSON.parse(this.BannerDatas.data) : 1
    }
  },
  created () {
    Vue.nextTick(() => {
      let swiperid = '#' + this.swiperData.id
      // eslint-disable-next-line
      new Swiper(swiperid, {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: this.BannerData.length > 1 ? this.swiperData.loop || true : false,
        autoplay: this.swiperData.autoplay || {
          delay: this.swiperData.delay || 3000,
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        watchOverflow: true,
        updateOnImagesReady: true
      })
    })
  }
}
</script>
<style lang="scss">
  .swiper-container {
    a{
      display: inline-block;
      height: 100%;
      width: 100%;
      img{
        width: 100%;
      }
    }
    .appbanner{
      .swiper-pagination-bullet{
        background: #fff;
        opacity: 1;
      }
      .swiper-pagination-bullet-active{
        background: rgb(234,85,20);
      }
    }
  }
</style>
