<template>
  <div id="app-top">
      <mt-button icon="back" class="fl"></mt-button>
      <mt-search
        v-model="value"
        placeholder="搜索"
        cancel-text="">
      </mt-search>
      <mt-button icon="more" class="fr"></mt-button>
  </div>
</template>
<script>
export default {
  name: 'AppTop',
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  #app-top {
    height: 0.41rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background-color: #d9d9d9;
    .mint-button--default{
      background-color: #d9d9d9;
    }
    .mint-search{
      background-color: #d9d9d9;
      margin-left: .3rem;
      height: 0.41rem;
      float: left;
    }
  }
</style>
