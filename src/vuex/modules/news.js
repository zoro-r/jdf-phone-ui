const types = {
  SETNEWS: 'SETNEWS',
}

const state = {
  news: {},
}

const getters = {

}

const actions = {

}

const mutations = {
  [types.SETNEWS](state, param) {
    console.log('store', param)
    state.news = param.news
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}