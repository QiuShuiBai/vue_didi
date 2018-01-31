import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getter"
import state from "./state"
import mutations from "./mutations"
Vue.use(Vuex)

const store = new Vuex.Store({
  mutations,
  state,
  getters,
  actions
})

export default store
