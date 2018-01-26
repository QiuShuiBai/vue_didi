import * as types from "./mutation-types"

const mutations = {
  [types.SET_TITLE](state, title) {
    state.title = title
  },
  zFalse(state) {
    state.isLoading = false
  },
  zTrue(state) {
    state.isLoading = true
  },
  increment(state) {
    state.shop = [
      {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
      {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
      {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
    ]
  }
}
export default mutations
