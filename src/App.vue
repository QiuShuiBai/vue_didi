<template>
<div id="app">
  <di-header></di-header>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <transition name="acc-mask">
    <div class="accountMask" v-if="isMask">
      <di-account></di-account>
      <div class="mask" @click="showAccount"></div>
    </div>
  </transition>

  <transition name="chooseOri">
    <iframe v-show="isMap" id="mapPage" width="100%" height="100%" frameborder=0 src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp">
    </iframe>
  </transition>
</div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex"
import DiAccount from "./components/DiAccount.vue"
import DiHeader from "./components/DiHeader.vue"
export default {
  computed: {
    ...mapGetters([
      "isMask",
      "isMap",
      "isMoney",
      "where",
      "perNumber"
    ])
  },
  mounted() {
    var that = this
    window.addEventListener("message", function(event) {
      // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
      var loc = event.data
      if(loc && loc.module === "locationPicker") {
        // 防止其他应用也会向该页面post信息，需判断module是否为"locationPicker"
        that.chooseOri()
        that.chooseWhere(loc)
        if(that.isMoney) {
          var where = that.where
          var perNumber = that.perNumber
          that.$http.get(`gp/v3/distance?origins=${where.nowWhere.lng},${where.nowWhere.lat}&destination=${where.goWhere.lng},${where.goWhere.lat}&output=JSON&key=2bc99677d54a5c7d5e9c248ca0ec8c9d`)
            .then(response => {
              var distance = response.data.results[0].distance / 1000
              that.distance = distance
              var duration = response.data.results[0].duration
              var money = (duration * 0.4 / 60 + distance * 1.6).toFixed(2)
              money = money < 8 ? 8 : money
              var freeCarMoney = 0
              that.changeMoney(money)
              if(where.nowWhere.cityname === where.goWhere.cityname) {
                freeCarMoney = that.getInCityMoney(distance, perNumber)
              } else {
                freeCarMoney = that.getOutCityMoney(distance, perNumber)
              }
              that.changeFreeCarMoney(freeCarMoney)
            })
            .catch(() => {
              that.changeMoney("无限大")
            })
        }
      }
    }, false)
  },
  components: {
    DiHeader,
    DiAccount
  },
  watch: {
    perNumber() {
      var where = this.where
      var perNumber = this.perNumber
      var distance = this.distance
      var freeCarMoney = 0
      if(where.nowWhere.cityname === where.goWhere.cityname) {
        freeCarMoney = this.getInCityMoney(distance, perNumber)
      } else {
        freeCarMoney = this.getOutCityMoney(distance, perNumber)
      }
      this.changeFreeCarMoney(freeCarMoney)
    }
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      showAccount: "changeMask",
      chooseOri: "chooseOri",
      chooseWhere: "chooseWhere",
      changeMoney: "changeMoney",
      changeFreeCarMoney: "changeFreeCarMoney"
    }),
    calcuInMoney(dis, first, second, third, fourth, fifth, sixth) {
      var freeCarMoney = {
        alone: 0,
        total: 0
      }
      var firstDis = first.dis
      var secondDis = second.dis
      var thirdDis = third.dis
      var fourthDis = fourth.dis
      if (dis <= firstDis) {
        freeCarMoney.alone = first.alone
        freeCarMoney.total = first.total
      } else if (dis > firstDis && dis <= secondDis) {
        freeCarMoney.alone = first.alone + (dis - firstDis) * second.alone
        freeCarMoney.total = first.total + (dis - firstDis) * second.total
      } else if (dis > secondDis && dis <= thirdDis) {
        freeCarMoney.alone = first.alone + (secondDis - firstDis) * second.alone + (dis - secondDis) * third.alone
        freeCarMoney.total = first.total + (secondDis - firstDis) * second.total + (dis - secondDis) * third.total
      } else if (dis > thirdDis && dis <= fourthDis) {
        freeCarMoney.alone = first.alone + (secondDis - firstDis) * second.alone + (thirdDis - secondDis) * third.alone + (dis - thirdDis) * fourth.alone
        freeCarMoney.total = first.total + (secondDis - firstDis) * second.total + (thirdDis - secondDis) * third.total + (dis - thirdDis) * fourth.total
      } else {
        freeCarMoney.alone = first.alone + (secondDis - firstDis) * second.alone + (thirdDis - secondDis) * third.alone + (fourthDis - thirdDis) * fourth.alone + (dis - fourthDis) * fifth.alone
        freeCarMoney.total = first.total + (secondDis - firstDis) * second.total + (thirdDis - secondDis) * third.total + (fourthDis - thirdDis) * fourth.total + (dis - fourthDis) * fifth.total
      }
      if (arguments.length === 7) {
        var fifthDis = fifth.dis
        if (dis > fourthDis && dis <= fifthDis) {
          freeCarMoney.alone = first.alone + (secondDis - firstDis) * second.alone + (thirdDis - secondDis) * third.alone + (fourthDis - thirdDis) * fourth.alone + (dis - fourthDis) * fifth.alone
          freeCarMoney.total = first.total + (secondDis - firstDis) * second.total + (thirdDis - secondDis) * third.total + (fourthDis - thirdDis) * fourth.total + (dis - fourthDis) * fifth.total
        } if (dis > fifthDis) {
          freeCarMoney.alone = first.alone + (secondDis - firstDis) * second.alone + (thirdDis - secondDis) * third.alone + (fourthDis - thirdDis) * fourth.alone + (fifthDis - fourthDis) * fifth.alone + (dis - fifthDis) * sixth.alone
          freeCarMoney.total = first.total + (secondDis - firstDis) * second.total + (thirdDis - secondDis) * third.total + (fourthDis - thirdDis) * fourth.total + (fifthDis - fourthDis) * fifth.total + (dis - fifthDis) * sixth.total
        }
      }
      return freeCarMoney
    },
    getInCityMoney(dis, per) {
      var freeCarMoney = {
        alone: 0,
        total: 0
      }
      switch (per) {
        case 1:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 12, total: 9.6, dis: 3 },
            { alone: 1.5, total: 1.2, dis: 10 },
            { alone: 1.5, total: 0.9, dis: 20 },
            { alone: 1.2, total: 0.72, dis: 30 },
            { alone: 1.2, total: 0.48, dis: 500 },
            { alone: 1.2, total: 0.36 }
          )
          break
        case 2:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 12, total: 9.6, dis: 3 },
            { alone: 1.5, total: 1.2, dis: 10 },
            { alone: 1.5, total: 0.12, dis: 20 },
            { alone: 1.2, total: 0.96, dis: 30 },
            { alone: 1.2, total: 0.9, dis: 500 },
            { alone: 1.2, total: 0.72 }
          )
          break
        case 3:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 14.4, total: 13.2, dis: 3 },
            { alone: 1.8, total: 1.65, dis: 10 },
            { alone: 1.8, total: 1.65, dis: 20 },
            { alone: 1.44, total: 1.32, dis: 30 },
            { alone: 1.44, total: 1.32, dis: 500 },
            { alone: 1.44, total: 1.08 }
          )
          break
        case 4:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 16.8, total: 16.8, dis: 3 },
            { alone: 2.1, total: 2.1, dis: 10 },
            { alone: 2.1, total: 2.1, dis: 20 },
            { alone: 1.68, total: 1.68, dis: 30 },
            { alone: 1.68, total: 1.68, dis: 500 },
            { alone: 1.68, total: 1.68 }
          )
          break
      }
      return freeCarMoney
    },
    getOutCityMoney(dis, per) {
      var freeCarMoney = {
        alone: 0,
        total: 0
      }
      switch (per) {
        case 1:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 16.15, total: 13.3, dis: 6 },
            { alone: 1.23, total: 1.04, dis: 30 },
            { alone: 1.23, total: 0.47, dis: 100 },
            { alone: 1.14, total: 0.42, dis: 300 },
            { alone: 1.04, total: 0.38 }
          )
          break
        case 2:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 16.15, total: 14.25, dis: 6 },
            { alone: 1.23, total: 1.14, dis: 30 },
            { alone: 1.23, total: 0.85, dis: 100 },
            { alone: 1.14, total: 0.8, dis: 300 },
            { alone: 1.04, total: 0.71 }
          )
          break
        case 3:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 19, total: 16.15, dis: 6 },
            { alone: 1.52, total: 1.23, dis: 30 },
            { alone: 1.61, total: 1.23, dis: 100 },
            { alone: 1.42, total: 1.14, dis: 300 },
            { alone: 1.33, total: 1.04 }
          )
          break
        case 4:
          freeCarMoney = this.calcuInMoney(dis,
            { alone: 19, total: 19, dis: 6 },
            { alone: 1.52, total: 1.52, dis: 30 },
            { alone: 1.61, total: 1.61, dis: 100 },
            { alone: 1.42, total: 1.42, dis: 300 },
            { alone: 1.33, total: 1.33 }
          )
          break
      }
      return freeCarMoney
    }
  }
}
</script>

<style lang="stylus">
html,body
  height 100%
*
  margin 0
  padding 0
#app
  background-color #F3F4F5
  box-sizing border-box
  border-top: 1px solid #ccc//新增
  min-height 100%
.center
  display flex
  align-items center
  justify-content center
.page__bd
  margin 0 auto
  margin-top 64px
  font-size 26px
  background-color #fff
  width 9.466667rem /* 710/75 */
.accountMask
  position fixed
  width 14rem /* 564/75 */
  height 100vh
  top 0
  left 0
  right 0
  left 0
  z-index 9999
  display flex
.mask
  width 6.46rem
  height 100vh
  background-color rgba(45, 45, 45, .2)
.acc-mask-enter-active {
  transition: all .5s ease
  // transition: opacity .5s
}
.acc-mask-leave-active {
  transition: all .5s ease
}
.acc-mask-enter, .acc-mask-leave-to
/* .acc-mask-leave-active for below version 2.1.8 */ {
  transform: translateX(-4rem)
  opacity 0
}
.chooseOri-enter-active {
  transition: all .5s ease
  // transition: opacity .5s
}
.chooseOri-leave-active {
  transition: all .5s ease
}
.chooseOri-enter, .chooseOri-leave-to
/* .acc-mask-leave-active for below version 2.1.8 */ {
  transform: translateX(6rem)
  opacity 0
}
#mapPage
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index 9999
</style>
