<template>
  <div id="app-quick-enter" v-if = 'QuickEnterData'>
    <div class="quickEnter-container" >
      <a v-for="item in QuickEnterData" :key="item.linkId" :href="item.linkId | filterA">
        <span>
          <img width='45' height='45' :src="item.imgUrl" alt="">
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
    background: #000;
    width: 100%;
    height: 1.76rem;
    background: url(/static/bgQuickEnter.jpg) no-repeat center center;
    .quickEnter-container {
      display: flex;
      width: 100%;
      height: 1.76rem;
      padding: 0.1rem 0rem;
      flex-wrap: wrap;
      a{
        display: flex;
        width: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: 0.1rem;
        position: relative;
        img {
          background: rgba($color: #ffffff, $alpha: 0);
          margin: 0 0.15rem 0.04rem 0.15rem
        }
        >span{
          display: flex;
          flex-wrap: wrap;
          padding: 0.08rem 0;
        }
      }
    }
  }
</style>
