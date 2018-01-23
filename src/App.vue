<template>
<div id="app">
  <di-header :titleName="titleName" :isActive="isActive"></di-header>
  <router-view></router-view>
</div>
</template>
<script>
import DiHeader from "./components/DiHeader.vue"
export default {
  data() {
    return {
      titleName: [
        {
          title: "快车",
          path: "/fastCar"
        },
        {
          title: "出租车",
          path: "/taxiCar"
        },
        {
          title: "顺风车",
          path: "/freeCar"
        },
        {
          title: "代驾",
          path: "/desDri"
        },
        {
          title: "自驾租车",
          path: "/borCar"
        }],
      isActive: 0
    }
  },
  components: {
    DiHeader
  }
}
</script>

<style lang="stylus">
#app
  background-color #F3F4F5
  overflow hidden
.center
  display flex
  align-items center
  justify-content center
</style>
