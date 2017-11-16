import * as types from '../mutation-types'

// 该模块的初始状态
const state = {
  uid: 0
}

// getters
const getters = {
  uid: state => {
    return state.uid
  }
}

// 相关的 mutations
const mutations = {
  [types.SET_UID] (state, uid) {
    state.uid = uid
  }
}

export default {
  state,
  mutations,
  getters
}
