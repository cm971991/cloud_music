import Vue from 'vue'
import url from './api_config'

export default {
  /**
   * 获取音乐Url
   * @param id
   * @param successFunc
   * @param errorFunc
   */
  getMusicUrl (id, successFunc, errorFunc) {
    Vue.$api.xHttp.get(url.getUrl('musicUrl').stringFormat(id))
      .then(res => {
        successFunc(res)
      })
      .catch((ex) => {
        errorFunc(ex)
      })
  }
}
