import axios from 'axios'
import {CHANGE_HOME_DATA, CHANGE_SHOW} from './const'
const actions = {
  getChangeHomeData (context) {
    context.commit({
      type: CHANGE_SHOW,
      Show: false
    })
    axios.post('/api/index/modulelist.do?_=' + Date.now(), {navId: context.state.navId}).then(res => {
      context.commit({
        type: CHANGE_HOME_DATA,
        val: res
      })
      context.commit({
        type: CHANGE_SHOW,
        Show: true
      })
    })
  }
}
export default actions
