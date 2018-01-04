const types = {
  SETOUTAPPLICATION: 'SETOUTAPPLICATION',
}

const state = {
  outApplication: {},
}

const getters = {

}

const actions = {

}

const mutations = {
  [types.SETOUTAPPLICATION](state, param) {
    console.log('store', param)
    state.outApplication = param.outApplication
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}