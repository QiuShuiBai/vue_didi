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
      "isMap"
    ])
  },
  mounted() {
    var that = this
    window.addEventListener("message", function(event) {
      // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
      var loc = event.data
      if(loc && loc.module === "locationPicker") {
        // 防止其他应用也会向该页面post信息，需判断module是否为"locationPicker"
        console.log("location", loc)
        that.chooseOri()
        that.chooseWhere(loc)
      }
    }, false)
  },
  components: {
    DiHeader,
    DiAccount
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      showAccount: "changeMask",
      chooseOri: "chooseOri",
      chooseWhere: "chooseWhere"
    })
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
  border-top: 1px solid #ccc;//新增
  height 100%
.center
  display flex
  align-items center
  justify-content center
.page__bd
  margin 0 auto
  margin-top 64px
  font-size 26px
  background-color #fff
  width 9.466667rem
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
  transition: all .5s ease;
  // transition: opacity .5s;
}
.acc-mask-leave-active {
  transition: all .5s ease;
}
.acc-mask-enter, .acc-mask-leave-to
/* .acc-mask-leave-active for below version 2.1.8 */ {
  transform: translateX(-4rem)
  opacity 0
}

.chooseOri-enter-active {
  transition: all 1s ease;
  // transition: opacity .5s;
}
.chooseOri-leave-active {
  transition: all 1s ease;
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
