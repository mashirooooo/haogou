import {CHANGE_HOME_DATA, CHANGE_SHOW} from './const'
const mutations = {
  [CHANGE_HOME_DATA] (state, payload) {
    state.homeData['data' + payload.navId] = payload.val
  },
  [CHANGE_SHOW] (state, payload) {
    state.Show = payload.Show
  }
}
export default mutations
