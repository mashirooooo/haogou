<template>
  <div @click="get" id="app-banner" class="swiper-container swiper-container-horizontal">
    <div class="swiper-wrapper swipe-wrap">
      <div class="swiper-slide">
        <a>
          <img src=" alt=">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  name: 'AppBanner',
  data () {
    return {
      BannerListData: [
        {
          imgUrl:
            'https://image.hao24.com/images_site/mob/appIndex/2018/08/1533117066609_720x275.jpg',
          linkId: '6376',
          linkTitle: '秒杀倒计时',
          remark: '',
          templateType: 20
        },
        {
          imgUrl:
            'https://image.hao24.com/images_site/mob/appIndex/2018/07/1532934984847_720x275.jpg',
          linkId: 'https://m.hao24.com/ticket-6370-1.html',
          linkTitle: '开扒好货 领券先抢',
          remark: '',
          templateType: 40
        }
      ],
      num: 1
    }
  },
  methods: {
    get () {
      console.log(this.BannerListDatas, this.num, this.BannerListData)
    }
  }
  // props: {
  //   BannerListDatas: {
  //     type: Array,
  //     required: true
  //   }
  // }
}
</script>
<style lang='scss'>
  #app-banner {
    height: 10rem;
    width: 100%;
    background: red;
  }
</style>
