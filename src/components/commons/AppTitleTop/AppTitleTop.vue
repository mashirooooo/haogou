<template>
  <div class="titlebox">
    <span class="gray_bg"></span>
    <div class="ml_title">
      <span>{{title}}</span>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppTitleTop',
  props: ['title']
}
</script>
<style lang="scss" scoped>
  .gray_bg {
    display: inline-block;
    height: 10px;
    width: 100%;
    background: #f2f2f2;
    clear: both;
  }
  .ml_title {
    width: 100%;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.18rem;
    padding-left: 3%;
    margin: 0 auto;
    border-bottom: 1px solid #cecece;
    background: #fff;
    span {
      float: left;
      border-left: 4px solid #3ba3d6;
      padding-left: 6px;
      height: 0.22rem;
      line-height: 0.22rem;
      margin-top: 0.1rem;
      font-size: 0.16rem;
    }
  }
</style>
