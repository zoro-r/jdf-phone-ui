import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import attendance from './modules/attendance'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: common,
    attendance: attendance,
    news: news,
  }
})