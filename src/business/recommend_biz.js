import api from '../api/recommend_api'
import Base from './index'

export default class extends Base {
  /**
   * 获取推荐歌单
   */
  personalized () {
    return new Promise((resolve, reject) => {
      api.personalized(
        (res) => {
          res.result.forEach((item, index) => {
            if (item.playCount >= 10000) {
              item.playCount = parseInt(item.playCount / 10000) + '万'
            }
          })
          resolve(res)
        },
        (ex) => {
          console.log('personalized ex:', ex)
        })
    })
  }
  /**
   * 推荐新音乐
   * @returns {Promise}
   */
  newSong () {
    return new Promise((resolve, reject) => {
      api.newSong(
        (res) => {
          res.result.forEach((item, index) => {
            item.picUrl = item.song.album.picUrl
          })
          resolve(res)
        },
        (ex) => {
          console.log('newSong ex:', ex)
        })
    })
  }
  /**
   * 推荐mv
   * @returns {Promise}
   */
  mv () {
    return new Promise((resolve, reject) => {
      api.mv(
        (res) => {
          res.result.forEach((item, index) => {
            if (item.playCount >= 10000) {
              item.playCount = parseInt(item.playCount / 10000) + '万'
            }
          })
          resolve(res)
        },
        (ex) => {
          console.log('newSong ex:', ex)
        })
    })
  }
  /**
   * 每日推荐歌曲
   * @returns {Promise}
   */
  dailySong () {
    return new Promise((resolve, reject) => {
      api.dailySong(
        (res) => {
          resolve(res)
        },
        (ex) => {
          console.log('personalized ex:', ex)
        })
    })
  }
}
