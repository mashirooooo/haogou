<template>
  <div id="prodetail">
      <mt-header title="商品详情">
      <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
  </div>
</template>
<script>
export default {
  name: 'AppTop',
  data () {
    return {
      haoxiangData: localStorage.getItem('haoxiang'),
      goodsDatas: false
    }
  },
  props: ['goodsData', 'goodsId'],
  created () {
    if (this.haoxiangData) {
      console.log(this.haoxiangData)
      for (let i = 0; i < this.haoxiangData.length; i++) {
        if (this.haoxiangData[i].goodsId === this.goodsId) {
          this.goodsDatas = this.haoxiangData[i]
          return true
        }
      }
      if (!this.goodsDatas) {
        this.$router.go(-1)
      }
    } else {
      if (!this.goodsData) {
        this.$router.go(-1)
      }
      this.goodsDatas = this.goodsData
    }
  }
}
</script>
<style lang="scss" scoped>
#prodetail{
  header{
    background: #fff;
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
}
</style>
