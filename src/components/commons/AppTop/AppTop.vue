<template>
  <div id="app-top">
      <mt-button icon="back" class="fl" @click.native="goback"></mt-button>
      <mt-search
        v-model="value"
        placeholder="搜索"
        cancel-text=""
        v-if="!isNotSearch">
      </mt-search>
      <slot></slot>
      <mt-button icon="more" class="fr" v-if="!isNotSearch"></mt-button>
  </div>
</template>
<script>
export default {
  name: 'AppTop',
  data () {
    return {
      value: ''
    }
  },
  props: ['isNotSearch'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" >
  #app-top {
    height: 0.41rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    text-align: center;
    font-size: .18rem;
    line-height: .41rem;
    background-color: rgb(240, 234, 234);
    .mint-button--default{
      background-color: rgb(240, 234, 234);
    }
    .mint-search{
      background-color: rgb(240, 234, 234);
      margin-left: .3rem;
      height: 0.41rem;
      float: left;
    }
    .mint-searchbar{
      background-color: rgb(240, 234, 234);
    }
  }
</style>
