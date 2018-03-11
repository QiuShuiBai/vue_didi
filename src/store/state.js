const state = {
  shop: [],
  isMask: false,
  isMap: false,
  isMoney: false,
  money: 0,
  num: 0,
  perNumber: 0,
  time: "现在出发",
  timeComing: "正在查看附近车辆",
  test: "",
  title: [
    {
      titleName: "快车",
      path: "/fastCar"
    },
    {
      titleName: "出租车",
      path: "/taxiCar"
    },
    {
      titleName: "顺风车",
      path: "/freeCar"
    },
    {
      titleName: "代驾",
      path: "/desDri"
    },
    {
      titleName: "二手车",
      path: "/borCar"
    }],
  where: {
    nowWhere: {
      poiname: "正在获取您的位置",
      // 纬度
      lat: "",
      // 经度
      lng: ""
    },
    goWhere: {
      poiname: "你要去哪儿",
      // 纬度
      lat: "",
      // 经度
      lng: ""
    }
  }
}
export default state
