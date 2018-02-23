import * as types from "./mutation-types"
const mutations = {
  [types.SET_TITLE](state, title) {
    state.title = title
  },
  changeMask(state) {
    state.isMask = !state.isMask
  },
  chooseOri(state, num) {
    state.isMap = !state.isMap
    if(num) {
      state.num = num
    }
  },
  changeMoney(state, money) {
    state.money = money
  },
  changeTime(state, time) {
    state.time = time
  },
  increment(state) {
    state.shop = [
      { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
      { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
      { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
    ]
  },
  getNowWhere(state, obj) {
    state.where.nowWhere.poiname = obj.addr
    state.where.nowWhere.lat = obj.lat
    state.where.nowWhere.lng = obj.lng
  },
  chooseWhere(state, where) {
    if(state.num === 1) {
      state.where.nowWhere.poiname = where.poiname
      state.where.nowWhere.lat = where.latlng.lat
      state.where.nowWhere.lng = where.latlng.lng
    }else {
      state.where.goWhere.poiname = where.poiname
      state.where.goWhere.lat = where.latlng.lat
      state.where.goWhere.lng = where.latlng.lng
    }
    if(state.where.goWhere.lat && state.where.nowWhere.lat) {
      state.isMoney = true
    }
  },
  timeComing(state, obj) {
    state.timeComing = obj.timeComing
  }
}
export default mutations
