import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    suscriptores: [],
    suscriptor: undefined
  },
  mutations: {
    SET_SUSCRIPTORES(state, suscriptores) {
      state.suscriptores = suscriptores
    },
    SET_SUSCRIPTOR(state, suscriptor) {
      state.suscriptor = suscriptor
    },
    ADD_SUSCRIPTION(state, suscriptor) {
      state.suscriptores.push(suscriptor)
    }
  },
  actions: {
    saveSubscription({ commit, dispatch }, dateSuscriptor) {
      commit('SET_SUSCRIPTOR', dateSuscriptor) 
      dispatch('addSuscriptor')
    },
    addSuscriptor({ commit, state }) { /* agrega suscriptor a arreglo suscriptores*/
      commit('ADD_SUSCRIPTION', state.suscriptor)
    }
  },
  modules: {
  }
})
