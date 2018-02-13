export const increment = ({ commit }) => {
  setTimeout(() => {
    commit("increment")
  }, 1000)
}

export const getNowWhere = ({ commit }) => {
  commit("getNowWhere")
}
