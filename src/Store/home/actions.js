import axios from 'axios'
import {CHANGE_HOME_DATA, CHANGE_SHOW} from './const'
const actions = {
  getChangeHomeData (context, payload) {
    context.commit({
      type: CHANGE_SHOW,
      Show: false
    })
    axios.post('/api/index/modulelist.do?_=' + Date.now(), {navId: payload.navId}).then(res => {
      context.commit({
        type: CHANGE_HOME_DATA,
        val: res,
        navId: payload.navId
      })
      sessionStorage.setItem('navId', payload.navId)
      context.commit({
        type: CHANGE_SHOW,
        Show: true
      })
    })
  }
}
export default actions
