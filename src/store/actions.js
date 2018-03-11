import axios from "axios"
export const increment = ({ commit }) => {
  setTimeout(() => {
    commit("increment")
  }, 1000)
}

export const getNowWhere = ({ commit, state }) => {
  if(state.where.nowWhere.poiname !== "正在获取您的位置") {
    return
  }
  // eslint-disable-next-line
  var geolocation = new qq.maps.Geolocation("OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77", "myapp")
  var options = { timeout: 4000 }
  function showPosition(position) {
    console.log(position)
    var obj = {}
    obj.addr = position.addr
    obj.lat = position.lat
    obj.lng = position.lng
    if(position.addr === "") {
      obj.addr = position.province
    }
    commit("getNowWhere", obj)
  }
  function showErr() {
    var obj = {}
    obj.addr = "定位失败"
    commit("getNowWhere", obj)
  }
  geolocation.getLocation(showPosition, showErr, options)
}

export const timeComing = ({commit, state}) => {
  axios.get("em/mock/5a8e7c36f6208b69f2c27ef6/vue_didi")
    .then(response => {
      var obj = {
        timeComing: response.data.data.timeComing
      }
      commit("timeComing", obj)
    })
    .catch(() => {
      var obj = {
        timeComing: "查询失败"
      }
      commit("timeComing", obj)
    })
  // axios.get("../static/data.json")
  //   .then(response => {
  //     state.test = response
  //   })
}
