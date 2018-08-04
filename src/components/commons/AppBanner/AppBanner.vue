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
    // if (this.BannerData) { console.log(111) }
    let swiperid = '#' + this.swiperData.id
    // eslint-disable-next-line
    let swipers = new Swiper(swiperid, {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.swiperData.loop || true,
      autoplay: this.swiperData.autoplay || {
        delay: this.swiperData.delay || 3000,
        disableOnInteraction: false
      },
      observeParents: true
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
