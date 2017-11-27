import * as types from '../mutation-types'

const state = {
  personalized: [],
  newSong: [],
  mv: [],
  dailySong: []
}

const getters = {
  personalized: state => {
    return state.personalized
  },
  newSong: state => {
    return state.newSong
  },
  mv: state => {
    return state.mv
  },
  dailySong: state => {
    return state.dailySong
  }
}

const mutations = {
  [types.SET_PERSONALIZED] (state, personalized) {
    state.personalized = personalized
  },
  [types.SET_NEWSONG] (state, newSong) {
    state.newSong = newSong
  },
  [types.SET_MV] (state, mv) {
    state.mv = mv
  },
  [types.SET_DAILYSONG] (state, songs) {
    state.dailySong = songs
  }
}

export default {
  state,
  mutations,
  getters
}
