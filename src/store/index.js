import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    api,
  },
  state: {
    showSidebar: false,
  },
  getters: {
    showSidebar: state => state.showSidebar,
  },
  mutations: {
    SWITCH_SIDEBAR_STATUS(state, boo) {
      state.showSidebar = boo
    }
  },
  actions: {
  }
})
