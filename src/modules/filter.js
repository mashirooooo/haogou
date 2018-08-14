import Vue from 'vue'
Vue.filter('filterA', (val) => {
  if (!val) return ''
  if (val.indexOf('.html') !== -1) {
    return val
  } else {
    return 'https://m.hao24.com/event/' + val + '.html'
  }
})
Vue.filter('filtergoodsA', (val) => {
  return 'https://m.hao24.com/goods/' + val + '.html'
})
