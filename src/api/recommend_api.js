import Vue from 'vue'
import url from './api_config'

export default {
  /**
   *  获取推荐歌单
   * @param successFunc
   * @param errorFunc
   */
  personalized (successFunc, errorFunc) {
    Vue.$api.xHttp.get(url.getUrl('personalized'))
      .then(res => {
        successFunc(res)
      })
      .catch((ex) => {
        errorFunc(ex)
      })
  }
}
