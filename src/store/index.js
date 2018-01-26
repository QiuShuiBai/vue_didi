import Vue from "vue"
import Vuex from "vuex"
// import * as actions from "./actions"
import * as getters from "./getter"
import state from "./state"
import mutations from "./mutations"

Vue.use(Vuex)
const actions = {
  increment({ commit }) {
    setTimeout(() => {
      commit("increment")
    }, 1000)
  }
}
const store = new Vuex.Store({
  mutations,
  state,
  getters,
  actions
})

export default store
