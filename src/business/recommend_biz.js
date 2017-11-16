import api from '../api/recommend_api'
import Base from './index'

export default class extends Base {
  /**
   * 获取推荐歌单
   */
  personalized () {
    let vm = this.vm
    if (vm.$store.getters.uid) {
      api.personalized(
        (res) => {
          debugger
          if (res.code !== 200) {
            vm.$toast.show({text: res.msg})
          } else {
            debugger
            vm.$store.commit('SET_PERSONALIZED', res.result)
            return Promise.resolve(res.result)
          }
        },
        (ex) => {
          console.log('personalized ex:', ex)
        })
    }
  }
}
