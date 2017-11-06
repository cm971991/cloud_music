// 该模块的初始状态
const state = {
  direction: 'forward',
  seq: 0,
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
  UPDATE_DIRECTION (state, direction) {
    state.direction = direction
  },
  INIT_SEQ (state) {
    state.seq = 0
  },
  ADD_SEQ (state) {
    state.seq = state.seq + 1
  },
  SET_ROUTE (state, route) {
    state.route = route
  }
}

export default {
  state,
  mutations,
  getters
}
