<template>
  <div id="app-broad-cast">
    <div>
      <app-title-top :title="BroadCasts.moduleNm">
        <ul>
          <li class="">江苏<em>|</em></li>
          <li class="oncolor">全国</li>
        </ul>
      </app-title-top>
    </div>
    <div class="swiper-container app-broad-cast">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" style="width: 243px; margin-right: 30px;" v-for="item in BroadCast" :key="item.goodsId">
          <a class="external" :href="item.goodsSn | filtergoodsA()">
            <img src="/static/zb_list_img_03.png">
            <div class="sp_img">
              <img :src="item.imgUrl" :alt="item.goodsNm">
              <div class="living_sub " v-if="item.reduceAmt > 0">
                <p>立减<span>{{item.reduceAmt}}</span>元</p>
              </div>
            </div>
            <div class="sp_price">
              <p><span>{{item.beTime}}</span><img src="/static/img/time_right.png"></p>
              <p>{{item.goodsNm}}</p>
              <p>
                <span class="price">￥<span class="price_1">{{item.haoPrc}}</span></span><br>
              </p>
              <span class="zhan"> <span>{{item.saleQty}}</span><img src="/static/img/love_zhan.png"> </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Swiper from 'swiper'
import AppTitleTop from '../../../commons/AppTitleTop/AppTitleTop'

export default {
  name: 'AppTimeLimitedAct',

  props: {
    TimeLimitedActDatas: {
      type: Object,
      required: true
    }
  },
  components: {
    AppTitleTop
  },
  computed: {
    BroadCast () {
      return this.BroadCasts && this.BroadCasts.data ? JSON.parse(this.BroadCasts.data).countryList : []
    }
  },
  updated () {
    // eslint-disable-next-line
    new Swiper('.app-broad-cast', {
      autoplay: false,
      observeParents: true,
      autoHeight: true,
      width: 243,
      speed: 300
    })
  }
}
</script>
<style lang="scss" scoped>
#app-broad-cast {
  font-size: 0.15rem;
  img{
    background: #fff;
  }
  .swiper-container {
    padding: 0;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .swiper-wrapper{
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 0.15rem;
      >img{
        width: 100%;
        background: #fff;
      }
      .sp_img {
        position: absolute;
        top: 7%;
        left: 5%;
        width: 48%;
        height: 86%;
        img {
          height: 100%;
        }
        .living_sub {
          top: 0;
          left: 0;
          height: 0.19rem;
          z-index: 99;
          position: absolute;
          width: 66%;
          background: url(/static/living_sub.png) no-repeat;
          background-size: 100% 100%;
          p {
            position: absolute;
            top: 0;
            height: 100%;
            line-height: 0.187rem;
            color: white;
            font-size: 12px;
            width: 100%;
            text-align: center;
          }
        }
      }
      .sp_price {
        width: 47%;
        right: 0;
        position: absolute;
        top: 0;
        p:first-child {
          width: 80%;
          margin: 0 auto;
          line-height: 0.175rem;
          margin-top: 0.185rem;
          border-bottom: 1px solid #222;
          border-top: 1px solid #222;
          font-size: 0.12rem;
          height: 0.175rem;
          span {
          display: block;
          height: 100%;
          line-height: 0.175rem;
          float: left;
          margin-left: 0.086rem;
          }
          img {
            width: 10%;
            float: right;
            margin-top: .03rem;
            float: left;
          }
        }
        p:nth-child(2) {
          margin: 0 auto;
          line-height: 0.175rem;
          color: #202020;
          width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          height: 0.351rem;
          margin-top: 4px;
          font-size: 12px;
        }
        p {
          width: 80%;
          margin: 0 auto;
          line-height: .19rem;
          .price {
            color: #e33235;
          }
          .price_1 {
            font-weight: 600;
            font-size: .18.5rem;
          }
        }
        .zhan span {
          float: right;
          margin-right: 7%;
          font-size: 12px;
        }
        .zhan img {
          width: 15%;
          float: right;
          margin-top: 0.04rem;
        }
      }
    }
  }
}
</style>
