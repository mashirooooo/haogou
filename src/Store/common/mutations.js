import {CHANGE_ISLOGIN} from './const'
const mutations = {
  [CHANGE_ISLOGIN] (state, payload) {
    state.IsLogin = payload.IsLogin
  }
}
export default mutations
