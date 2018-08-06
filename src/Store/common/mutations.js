import {CHANGE_HOME_DATA, CHANGE_NAVID} from './const'
const mutations = {
  [CHANGE_HOME_DATA] (state, payload) {
    state.homeData = payload.val
  },
  [CHANGE_NAVID] (state, payload) {
    state.navId = payload.navId
  }
}
export default mutations
