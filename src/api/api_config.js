export default {
  getUrl: (action) => {
    // 线上环境使用真实api地址 开发环境使用axios进行跨域调用/policeApi/
    let url = process.env.NODE_ENV === 'production' ? 'http://v.js165.com/itracking/' : '/localApi'
    let actions = {
      // 手机登录
      'loginByTelephone': () => {
        return url + '/login/cellphone?phone={0}&password={1}'
      },
      // 推荐歌单
      'personalized': () => {
        return url + '/personalized'
      }
    }
    return actions[action]()
  }
}
