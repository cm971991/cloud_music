import Vue from 'vue'
import url from './api_config'

export default {
  /**
   *  推荐歌单
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
  },
  /**
   * 推荐新音乐
   * @param successFunc
   * @param errorFunc
   */
  newSong (successFunc, errorFunc) {
    Vue.$api.xHttp.get(url.getUrl('newSong'))
      .then(res => {
        successFunc(res)
      })
      .catch((ex) => {
        errorFunc(ex)
      })
  },
  /**
   * 推荐mv
   * @param successFunc
   * @param errorFunc
   */
  mv (successFunc, errorFunc) {
    Vue.$api.xHttp.get(url.getUrl('mv'))
      .then(res => {
        successFunc(res)
      })
      .catch((ex) => {
        errorFunc(ex)
      })
  }
}
