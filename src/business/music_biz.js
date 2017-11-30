import api from '../api/music_api'
import Base from './index'

export default class extends Base {
  /**
   * 获取音乐url
   * @param id
   * @returns {Promise}
   */
  getMusicUrl (id) {
    return new Promise((resolve, reject) => {
      api.getMusicUrl(id,
        (res) => {
          resolve(res)
        },
        (ex) => {
          console.log('personalized ex:', ex)
        })
    })
  }
}
