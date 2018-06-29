import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },

  getters: {
  },

  actions: {
    load_items: function ({ commit }) {
      axios.get('/items').then((res) => {
        commit('set_items', { list: res.data })
      }, (err) => {
        console.log(err)
      })
    }
  },

  mutations: {
    set_items: (state, { list }) => {
      state.projects = list
    }
  },

  modules: {}

})
