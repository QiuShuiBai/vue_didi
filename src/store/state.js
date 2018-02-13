const state = {
  shop: [],
  isMask: false,
  isMap: false,
  num: 0,
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
      titleName: "自驾租车",
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
