export const increment = ({ commit }) => {
  setTimeout(() => {
    commit("increment")
  }, 1000)
}
