import {CHANGE_HOME_DATA, CHANGE_NAVID, CHANGE_SHOW} from './const'
const mutations = {
  [CHANGE_HOME_DATA] (state, payload) {
    state.homeData = payload.val
  },
  [CHANGE_NAVID] (state, payload) {
    state.navId = payload.navId
  },
  [CHANGE_SHOW] (state, payload) {
    state.Show = payload.Show
    console.log(state.Show)
  }
}
export default mutations
