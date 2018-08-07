<template>
  <div id="app-quick-enter">
    <div class="quickEnter-container" >
      <a v-for="item in QuickEnterData" :key="item.linkId" :href="item.linkId | filterA">
        <span>
          <img width='45' height='45' :src="item.imgUrl" alt="">
          <span>{{item.linkTitle}}</span>
        </span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppQuickEnter',
  props: ['QuickEnter'],
  computed: {
    QuickEnterData () {
      return this.QuickEnter && this.QuickEnter.data ? JSON.parse(this.QuickEnter.data) : ''
    }
  }
}
</script>
<style lang="scss" scoped>
  #app-quick-enter {
    width: 100%;
    height: 1.76rem;
    .quickEnter-container {
      display: flex;
      width: 100%;
      height: 1.76rem;
      padding: 0.1rem 0rem;
      flex-wrap: wrap;
      a{
        display: flex;
        width: 0.75rem;
        height: 0.78rem;
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: 0.1rem;
        position: relative;
        img {
          background: rgba($color: #ffffff, $alpha: 0);
          margin: 0 0.15rem 0.04rem 0.15rem;
        }
        >span{
          display: flex;
          flex-wrap: wrap;
          padding: 0.08rem 0;
          justify-content: center;
          span{
            display: block;
            width: 100%;
            height: 0.13rem;
            line-height: 0.13rem;
            font-size: 0.13rem;
            text-align: center
          }
        }
      }
    }
  }
</style>
