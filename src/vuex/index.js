import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import config from '../../config/index'
import global from './modules/global'
import * as actions from './actions'
import * as getters from './getters'
import localStorage from '../assets/util/localStorage'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  // 组合各个模块
  modules: {
    global
  },
  // 插件
  plugins: [createPersistedState({
    key: config.build.assetsPublicPath + 'vuex',
    paths: [''], // 缓存模块
    getState: (key) => localStorage.get(key),
    setState: (key, state) => localStorage.set(key, state)
  })]
})
