import Vue from 'vue'
import url from './api_config'

export default {
  loginByTelephone (successFunc, errorFunc) {
    Vue.$api.xHttp.get(url.getUrl('loginByTelephone').stringFormat('13776626715', 'java125'))
      .then(res => {
        successFunc(res)
      })
      .catch((ex) => {
        errorFunc(ex)
      })
  }
}
