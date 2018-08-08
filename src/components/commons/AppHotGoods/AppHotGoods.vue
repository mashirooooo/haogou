<template>
  <div id="app-hot-goods">
    <app-title-top :title="title"></app-title-top>
    <ul class='contentlist clear'
    v-infinite-scroll = "addHotGoods"
    infinite-scroll-disabled = 'isLoading'
    infinite-scroll-distance = '60'
    >
      <li v-for="item in hotGoodsList" :key="item.goodsId" class="hot_goods_li">
        <div class="re_img">
          <a class="external" >
            <img :src="item.imgUrl" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
          </a>
        </div>
          <a>
            <div class="re_title good_tit_name"><span>韩束魔力BB霜双星劲爆组</span>
            </div>
          </a>
          <p class="re_price">￥199</p>
      </li>
    </ul>
    <p v-if="!hasMore" style="text-align: center;margin-top: .2rem">没有更多了...</p>
  </div>
</template>
<script>
// eslint-disable-next-line
import {Indicator} from 'mint-ui'
import axios from 'axios'

import AppTitleTop from '../AppTitleTop/AppTitleTop'

export default {
  name: 'AppHotGoods',
  data () {
    return {
      page: 0,
      hotGoods: [],
      isLoading: false,
      hasMore: true
    }
  },
  components: {
    AppTitleTop
  },
  props: ['hotSale'],
  methods: {
    addHotGoods () {
      if (this.hotSale) {
        this.hasMore = false
        return false
      }
      this.isLoading = true
      this.page++
      Indicator.open({
        spinnerType: 'fading-circle'
      })
      axios.post('/api/index/hotgoods.do?_=' + Date.now(), {page: this.page}).then(res => {
        this.isLoading = false
        this.hotGoods.push(res)
        Indicator.close()
        if (this.page === Math.ceil(res.data.totalQty / 10)) {
          this.isLoading = true
          this.hasMore = false
        }
      })
    }
  },
  computed: {
    title () {
      if (!this.hotSale) {
        return '活动特辑'
      }
      if (this.hotSale === 1) return false
      return this.hotSale.moduleNm
    },
    hotGoodsList () {
      if (this.hotSale) {
        if (this.hotSale === 1) return false
        return JSON.parse(this.hotSale.data)
      }
      let hotGoodsListArr = []
      if (this.hotGoods && this.hotGoods[0] && this.hotGoods[0].data) {
        this.hotGoods.forEach(itemlist => {
          itemlist.data.simpleGoodsList.forEach(item => {
            hotGoodsListArr.push(item)
          })
        })
      }
      return hotGoodsListArr
    }
  },
  created () {
    this.addHotGoods()
  }
}
</script>
<style lang="scss" scoped>
ul{
  .hot_goods_li{
    float: left;
    width: 50%;
    padding: 1% 2%;
    .re_img {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      margin: 4px auto;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }
    .good_tit_name {
      font-size: .14rem;
      text-align: left;
      height: .22rem;
      line-height: .22rem;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .re_title {
      width: 98%;
      text-align: left;
      color: #363636;
      span{
        font-size: .14rem;
      }
    }
    .re_price {
      text-align: left;
      color: #e43d40;
    }
  }
}
</style>
