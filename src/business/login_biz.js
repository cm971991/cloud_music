import api from '../api/login_api'
import Base from './index'

export default class extends Base {
  /**
   * 手机号登录
   */
  loginByTelephone () {
    let vm = this.vm
    if (!vm.$store.getters.uid) {
      api.loginByTelephone(
        (res) => {
          if (res.code !== 200) {
            vm.$toast.show({text: res.msg})
          } else {
            vm.$store.commit('SET_UID', res.account.id)
          }
        },
        (ex) => {
          console.log('loginByTelephone ex:', ex)
        })
    }
  }
}
