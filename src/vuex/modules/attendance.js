const types = {
  SETOUTAPPLICATION: 'SETOUTAPPLICATION'
}

const state = {
  outApplication: {}
}

const getters = {

}

const actions = {

}

const mutations = {
  [types.SETOUTAPPLICATION] (state, param) {
    state.outApplication = param.outApplication
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
