import axios from 'axios'
import {CHANGE_HOME_DATA} from './const'
const actions = {
  getChangeHomeData (context) {
    axios.post('/api/index/modulelist.do', {navId: context.state.navId}).then(res => {
      context.commit({
        type: CHANGE_HOME_DATA,
        val: res
      })
    })
  }
}
export default actions
