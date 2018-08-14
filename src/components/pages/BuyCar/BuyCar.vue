<template>
  <div id="buycar" v-if="$store.state.modulecommon.IsLogin">
    <mt-header title="购物车" style="margin: 0 0 .2rem 0">
      <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div v-if="buycarData && buycarData.length">
      <div class="clear" style="padding: .2rem" v-for="item in buycarData" :key="item.goodsId">
        <img :src="item.imgUrl" style="height: .6rem" class="fl">
        <div class="buycarContent fr">
          <p style="margin: .1rem 0">{{item.goodsNm}} <span class="fr" @click="removeCookie(item, true)">删除</span></p>
          <p>单价： {{item.haoPrc}}</p>
          <div class="det_qty">
            <span class="color999">数量： </span>
            <font class="btn_qty" data-val="-" @click="reduce(item)">-</font>
            <input type="number" class="goods_qty external" data-max="10" v-model="item.buyNum" @input="changebuyNum(item)">
            <font class="btn_qty" data-val="+" @click="plus(item)">+</font>
          </div>
          <p style="text-align: right">价格：<b style="color: red ; font-size: .21rem">{{item.haoPrc * item.buyNum}}</b></p>
        </div>
      </div>
      <div class="sumPrc" style="font-size: .14rem;text-align: right; margin: .1rem">总价格：<b style="font-size: .18rem">{{sumPrc}}</b></div>
    </div>
    <div v-else>
      <img src="/static/buycarnull.jpg" style="width: 100%">
      <p style="font-size: .18rem; text-align: center">你的购物车空空如也，返回<router-link :to="{name: 'Home'}" style="font-size: .2rem; text-align: center; color: red; padding-left:.1rem ">首页</router-link></p>
    </div>
    <mt-button size="normal" type="danger" class="fr" style="margin-right: .1rem" v-if="buycarData && buycarData.length">去结算</mt-button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'

export default {
  name: 'BuyCar',
  data () {
    return {
      buycarData: this.$cookies.get('haoxiangBuycar') ? JSON.parse(this.$cookies.get('haoxiangBuycar')) : false
    }
  },
  computed: {
    sumPrc () {
      let prc = 0
      this.buycarData.forEach(item => {
        prc += item.haoPrc * item.buyNum
      })
      return prc
    }
  },
  methods: {
    reduce (item) {
      if (item.buyNum <= 1) return false
      item.buyNum--
      this.rechangeCookie(item)
    },
    plus (item) {
      item.buyNum++
      this.rechangeCookie(item)
    },
    changebuyNum (item) {
      if (item.buyNum > 100) item.buyNum = 100
      if (item.buyNum < 1) item.buyNum = 1
      this.rechangeCookie(item)
    },
    rechangeCookie (item, remove) {
      let datas = JSON.parse(this.$cookies.get('haoxiangBuycar'))
      for (var i = 0; i < datas.length; i++) {
        if (datas[i].goodsId === item.goodsId) {
          if (remove) datas.splice(i, 1)
          if (!remove) datas.splice(i, 1, item)
        }
      }
      this.buycarData = datas
      this.$cookies.set('haoxiangBuycar', JSON.stringify(datas))
    },
    removeCookie (item, remove) {
      MessageBox({
        title: '提示',
        message: '是否删除此商品',
        showCancelButton: true,
        confirmButtonHighlight: true,
        cancelButtonClass: 'Aconfirm'
      }).then(action => {
        if (action === 'confirm') {
          this.rechangeCookie(item, remove)
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.$store.state.modulecommon.IsLogin) {
        MessageBox({
          title: '提示',
          message: '你还没登陆,前往登陆',
          confirmButtonHighlight: true,
          confirmButtonClass: 'Aconfirm'
        }).then(action => {
          if (action === 'confirm') {
            vm.$router.push({name: 'login'})
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
#buycar{
  height: 100%;
  header{
    background: #e3e3e3;
    color: #000;
    .mint-button{
      height: .5rem;
      line-height: .5rem;
    }
  }
  .mint-header{
    height: .5rem;
    font-size: .16rem;
  }
  .buycarContent{
    width: 75%;
  }
  .det_qty {
    overflow: hidden;
    input{
      display: block;
      float: left;
      width: .34rem;
      height: .24rem;
      line-height: .24rem;
      border: 1px solid #f9105c;
      text-align: center;
      color: #000;
      margin-top: 6px;
    }
    span {
      float: left;
      line-height: .31rem;
      padding: .03rem .12rem 1% 0;
    }
    font {
      float: left;
      margin: .03rem .10rem .03rem 0;
      font-size: .20rem;
      line-height: .19rem;
      margin-top: .08rem;
    }
  }
}
</style>
