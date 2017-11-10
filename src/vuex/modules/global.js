import * as types from '../mutation-types'

// 该模块的初始状态
const state = {
  direction: 'forward',
  route: null
}

// getters
const getters = {
  seq: state => {
    return state.seq
  },
  route: state => {
    return state.route
  }
}

// 相关的 mutations
const mutations = {
  [types.UPDATE_DIRECTION] (state, direction) {
    state.direction = direction
  },
  [types.SET_ROUTE] (state, route) {
    state.route = route
  }
}

export default {
  state,
  mutations,
  getters
}
