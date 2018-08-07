<template>
  <div id="app-big-discount">
    <div>
      <app-title-top :title="BigDiscounts.moduleNm">
        <div class="time-item fr">
          <font class="daojishi">距离结束</font><strong class="fg" id="hour_show">33</strong>
          <font class="fd">:</font> <strong class="fg" id="minute_show">35</strong>
          <font class="fd">:</font> <strong class="fg" id="second_show">04</strong>
          <a class="loadMore">更多>></a>
        </div>
      </app-title-top>
    </div>
  </div>
</template>
<script>

// import Swiper from 'swiper'
import AppTitleTop from '../../../commons/AppTitleTop/AppTitleTop'

export default {
  name: 'AppBIgDiscount',
  components: {
    AppTitleTop
  },
  computed: {
    Countdown: this.BigDiscounts
  },
  props: ['BigDiscounts']
}
</script>
<style lang="scss" scoped>
  #app-big-discount {
    .loadMore {
      font-size: .15rem;
      display: inline-block;
    }
    .time-item{
    color: #000;
    margin-right: .1rem;
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
