export default {
  getUrl: (action) => {
    // 线上环境使用真实api地址 开发环境使用axios进行跨域调用/policeApi/
    let url = process.env.NODE_ENV === 'production' ? 'http://119.23.226.120:3000' : '/localApi'
    let actions = {
      // 手机登录
      'loginByTelephone': () => {
        return url + '/login/cellphone?phone={0}&password={1}'
      },
      // 推荐歌单
      'personalized': () => {
        return url + '/personalized'
      },
      // 推荐新音乐
      'newSong': () => {
        return url + '/personalized/newsong'
      },
      // 推荐mv
      'mv': () => {
        return url + '/personalized/mv'
      },
      // 每日推荐歌曲
      'dailySong': () => {
        return url + '/recommend/songs'
      }
    }
    return actions[action]()
  }
}
