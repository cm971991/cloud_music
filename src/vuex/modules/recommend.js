import * as types from '../mutation-types'

const state = {
  personalized: []
}

const getters = {
  personalized: state => {
    return state.personalized
  }
}

const mutations = {
  [types.SET_PERSONALIZED] (state, personalized) {
    state.personalized = personalized
  }
}

export default {
  state,
  mutations,
  getters
}
