<template>
  <div id="prodetail">
    <mt-header title="商品详情">
      <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="detailImg">
      <img v-if="goodsDatas" :src="goodsDatas.imgUrl">
    </div>
    <p style="margin: .1rem; font-size: .18rem; font-weight: 700">{{goodsDatas.goodsNm}}</p>
    <div class="det_info">
      <div class="price_info">
        <div class="det_price">
          <font>好享价:</font>￥{{goodsDatas.haoPrc}}
          <s>￥{{goodsDatas.marketPrc}}</s>
        </div>
      </div>
      <div class="det_num_time">
        <div class="det_price_num">商品编号H {{goodsDatas.goodsId}}</div>
      </div>
    </div>

    <div class="goods_attrs">
      <div class="det_qty">
        <span class="color999">数量</span>
        <font class="btn_qty" data-val="-" @click="reduce">-</font>
        <input type="number" class="goods_qty external" data-max="10" v-model="buyNum">
        <font class="btn_qty" style="margin-left:10px;" data-val="+" @click="plus">+</font>
        <span id="hasStockTip" class="qty_text">
          <b>有库存</b>
        </span>
      </div>
    </div>

    <div class="bg_fff">
      <div class="det_fw_main no-border">
        <span class="color999">运费</span>
        <font id="postage">免运费</font>
      </div>
    </div>

    <div class="carbtn">
      <mt-button size="normal" type="danger" class="fr" @click.native="addBuyCar">加入购物车</mt-button>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'AppTop',
  data () {
    return {
      haoxiangData: localStorage.getItem('haoxiang'),
      goodsDatas: false,
      buyNum: 1
    }
  },
  props: ['goodsData', 'goodsId'],
  created () {
    if (!this.goodsId) this.$router.push({name: 'Home'})
    let home = []
    if (this.goodsData) {
      if (this.haoxiangData) {
        let home = JSON.parse(this.haoxiangData)
        for (let i = 0; i < home.length; i++) {
          if (home[i].goodsId === this.goodsId) {
            this.goodsDatas = home[i]
            home.splice(i, 1)
            break
          }
        }
      }
      if (!this.goodsDatas) this.goodsDatas = this.goodsData
      home.push(this.goodsDatas)
      localStorage.setItem('haoxiang', JSON.stringify(home))
    } else {
      let home = []
      if (this.haoxiangData) {
        home = JSON.parse(this.haoxiangData)
        for (let i = 0; i < home.length; i++) {
          if (home[i].goodsId === this.goodsId) {
            this.goodsDatas = home[i]
            break
          }
        }
      }
    }
    if (!this.goodsDatas) this.$router.push({name: 'Home'})
  },
  watch: {
    buyNum (val) {
      if (val < 1) this.buyNum = 1
      if (val > 10) this.buyNum = 10
    }
  },
  methods: {
    reduce () {
      if (this.buyNum <= 1) return false
      this.buyNum--
    },
    plus () {
      if (this.buyNum >= 10) return false
      this.buyNum++
    },
    addBuyCar () {
      if (!this.$store.state.modulecommon.IsLogin) {
        MessageBox({
          title: '提示',
          message: '你还没登陆,前往登陆',
          showCancelButton: true,
          confirmButtonHighlight: true,
          confirmButtonClass: 'Aconfirm'
        }).then(action => {
          if (action === 'confirm') {
            this.$router.push({name: 'login'})
          } else {
            return false
          }
        })
      } else {
        MessageBox({
          title: '提示',
          message: '是否添加购物车',
          showCancelButton: true,
          confirmButtonHighlight: true,
          confirmButtonClass: 'Aconfirm'
        }).then(action => {
          if (action === 'confirm') {
            let buycar = JSON.parse(this.$cookies.get('haoxiangBuycar')) || []
            let thisbuycarnum = 0
            if (buycar !== [] && buycar.length > 0) {
              for (let i = 0; i < buycar.length; i++) {
                if (buycar[i].goodsId === this.goodsId) {
                  thisbuycarnum = buycar[i].buyNum ? buycar[i].buyNum : 0
                  this.goodsDatas.buyNum = thisbuycarnum + this.buyNum
                  buycar.splice(i, 1, this.goodsDatas)
                  break
                }
              }
              if (!this.goodsDatas.buyNum) {
                this.goodsDatas.buyNum = this.buyNum
              }
              buycar.push(this.goodsDatas)
              this.$cookies.set('haoxiangBuycar', JSON.stringify(buycar), { expires: 365 })
            } else {
              this.goodsDatas.buyNum = this.buyNum
              buycar.push(this.goodsDatas)
              this.$cookies.set('haoxiangBuycar', JSON.stringify(buycar), { expires: 365 })
            }
            MessageBox({
              title: '添加成功',
              message: '是否前往购物车',
              showCancelButton: true,
              confirmButtonHighlight: true,
              confirmButtonClass: 'Aconfirm'
            }).then(action => {
              if (action === 'confirm') this.$router.push({name: 'buycar'})
            })
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
#prodetail{
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
  .det_num_time {
    overflow: hidden;
    clear: both;
    .det_price_num {
      color: #000;
      font-size: 15px;
      line-height: 23px;
      padding: 6px 2px 6px 3%;
      float: left;
    }
  }
  .det_info {
    position: relative;
    background: white;
    border-bottom: 1px solid #d5d5d5;
    .price_info {
      clear: both;
      .det_price {
        color: #e43d40;
        font-size: .17rem;
        line-height: .23rem;
        font-weight: bold;
        padding: 4px 3%;
        float: left;
      }
      font {
        font-size: .15rem;
        color: #666;
      }
      s {
        display: inline-block;
        color: #848689;
        margin-left: .15rem;
        font-weight: normal;
        font-size: .15rem;
      }
    }
  }
  .goods_attrs {
    width: 100%;
    background: #fff;
    overflow: hidden;
    line-height: .30rem;
    padding-bottom: .06rem;
    font-size: .14rem;
    border-bottom: .01rem solid #d5d5d5;
    .det_qty {
      overflow: hidden;
      input{
        display: block;
        float: left;
        width: .40rem;
        height: .24rem;
        line-height: .24rem;
        border: 1px solid #f9105c;
        text-align: center;
        color: #000;
        margin-top: 6px;
      }
    }
    span {
      float: left;
      line-height: .31rem;
      padding: .03rem .18rem 1% 3%;
    }
    font {
      float: left;
      margin: .03rem .10rem .03rem 0;
      font-size: .22rem;
      line-height: .19rem;
      margin-top: .08rem;
    }
  }
  .bg_fff {
    background-color: #fff;
    margin-bottom: 6px;
    border-bottom: 1px solid #d5d5d5;
  }
  .det_fw_main {
    width: 100%;
    border-bottom: 1px solid #d5d5d5;
    border-top: 1px solid #d5d5d5;
    position: relative;
    overflow: hidden;
    font-size: .14rem;
    padding: 0 3% 0 0;
    span {
      float: left;
      padding-right: .18rem;
      padding: .12rem 3%;
    }
    font {
      color: #000;
      line-height: .31rem;
      float: left;
      width: 78%;
    }
  }
  .no-border {
    border: none!important;
    span {
    padding: 6px .19rem 6px 3%!important;
    }
  }
  .color999 {
    color: #848689;
  }
  .detailImg{
    width: 100%;
    font-size: 0;
    img{
      display: block;
      width: 100%;
    }
  }
  .carbtn{
    position: fixed;
    bottom: .1rem;
    right: .2rem;
    left: 0;
  }
}
</style>
