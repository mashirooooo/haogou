<template>
  <div class="website-footer" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
    <div class="foot">
      <ul>
        <li v-for="(item, index) in link" :key="'item' + index">
          <router-link class="external" :to="{path: item.path}">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="copyright">Copyright © 2009-2018 hao24.com</div>
  </div>
</template>
<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      link: [
        {title: '登录', path: '/Login'},
        {title: '注册', path: '/Register'},
        {title: '电脑版', path: '/'},
        {title: '触屏版', path: '/'},
        {title: '客户端', path: '/'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .foot {
    background: #fff;
    padding: 0 1%;
    height: .40rem;
    line-height: .40rem;
    width: 98%;
    padding: 0 1%;
    ul {
      padding: .12rem 0;
      li {
        float: left;
        width: 19.6%;
        color: #525252;
        line-height: 20px;
        height: 22px;
        border-right: 1px solid #ddd;
        font-size: 15px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        a {
          color: #525252;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          float: left;
        }
      }
    }
  }
  .copyright {
    width: 100%;
    padding: 2px 0 6px 0;
    text-align: center;
    background: #fff;
    color: #909090;
    line-height: 40px;
    font-size: 12px;
  }
</style>
