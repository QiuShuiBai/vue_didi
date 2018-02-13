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
  increment(state) {
    state.shop = [
      { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
      { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
      { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
    ]
  },
  getNowWhere(state) {
    // eslint-disable-next-line
    var geolocation = new qq.maps.Geolocation("OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77", "myapp")
    var options = { timeout: 4000 }
    function showPosition(position) {
      console.log(position, "me")
      state.where.nowWhere.poiname = position.addr
      state.where.nowWhere.lat = position.lat
      state.where.nowWhere.lng = position.lng
      if(position.addr === "") {
        state.where.nowWhere.poiname = "定位失败"
      }
    }
    function showErr() {
      state.where.nowWhere = "定位失败"
    }
    geolocation.getLocation(showPosition, showErr, options)
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
  }
}
export default mutations
