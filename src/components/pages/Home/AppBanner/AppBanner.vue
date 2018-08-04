<template>
  <div :id='swiperData.id' class="swiper-container">
    <div class="swiper-wrapper swipe-wrap">
      <div class="swiper-slide" :style="{'height': swiperData.height}" v-for="item in BannerData" :key="item.linkId">
        <a :href="item.linkId | filterA">
          <img :style="{'height': swiperData.height}" :src="item.imgUrl" alt="">
        </a>
      </div>
    </div>
    <div class="swiper-pagination appbanner"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'AppBanner',
  props: ['BannerDatas', 'swiperData'],
  computed: {
    BannerData () {
      return this.BannerDatas && this.BannerDatas.data ? JSON.parse(this.BannerDatas.data) : 1
    }
  },
  updated () {
    let swiperid = '#' + this.swiperData.id
    // eslint-disable-next-line
    new Swiper(swiperid, {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: {
        delay: this.swiperData.delay || 3000,
        disableOnInteraction: false
      },
      cancelable: false
    })
  }
}
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
    .appbanner{
      .swiper-pagination-bullet{
        background: #fff;
        opacity: 1;
      }
      .swiper-pagination-bullet-active{
        background: rgb(234,85,20);
      }
    }
    .swipe-wrap {
      width: 100%;
      a {
        display: block;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
