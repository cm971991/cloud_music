import * as types from './mutation-types'

const mutations = {
  [types.SET_UID] (state, uid) {
    state.uid = uid
  }
}

export default mutations
