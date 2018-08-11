// import axios from 'axios'
import {CHANGE_ISLOGIN} from './const'
const actions = {
  askforlogin (context, payload) {
    // axios.post('/api/index/modulelist.do?_=' + Date.now(), {navId: payload.navId}).then(res => {
    //   sessionStorage.setItem('navId', payload.navId)
    //   context.commit({
    //     type: CHANGE_SHOW,
    //     Show: true
    //   })
    // })
    localStorage.setItem('IsLogin', payload.IsLogin)
    context.commit({
      type: CHANGE_ISLOGIN,
      IsLogin: payload.IsLogin
    })
  }
}
export default actions
