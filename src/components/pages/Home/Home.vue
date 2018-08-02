<template>
  <div class="page">
    <app-top></app-top>
    <app-banner></app-banner>
  </div>
</template>
<script>
import AppTop from './AppTop/AppTop'
import AppBanner from './AppBanner/AppBanner'
export default {
  name: 'Home',
  data () {
    return {
      homeData: [],
      navId: 110
    }
  },
  components: {
    AppTop,
    AppBanner
  },
  created () {
    this.getDataById()
  },
  methods: {
    getDataById () {
      let _data = JSON.stringify({
        navId: this.navId
      })
      this.$http.post('/api/index/modulelist.do', _data, {
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        let reStr = res.data.result[0].data
        this.homeData = JSON.parse(reStr)
      })
    }
  }
}
</script>
<style lang="scss">
    body {
    background: #f3f5f7;
  }
</style>
