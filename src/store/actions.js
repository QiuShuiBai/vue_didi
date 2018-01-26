const actions = {
  increment({ commit }) {
    setTimeout(() => {
      commit("increment")
    }, 1000)
  }
}
export default actions
