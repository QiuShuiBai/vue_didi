<template>
<div class="page__hd-change center">
  <div class="page__hd-left" @click="showAccount">
  </div>
  <cube-scroll :listenScroll="listenScroll"
      :data="items" :options="options" @click="zczc"
      :direction="direction" ref="scroll">
    <ul class="hd__mid-content">
      <li class="hd__mid-title" @click="zc" v-for="(item, index) in items"
        :key="index">
        {{item.title}}
      </li>
    </ul>
    </cube-scroll>
  <div class="page__hd-right" :style="{opacity:opaNum,transform:`rotate(${transRot}deg)`}">
  </div>
</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
export default {
  name: "DiHeader",
  computed: {
    ...mapGetters([
      "title"
    ])
  },
  mounted() {
    this.$refs.scroll.$refs.listWrapper.childNodes[0].addEventListener("tap", (e) => {
      // that.e.srcElement
      this.$refs.scroll.scrollToElement(e.srcElement, 1000, true, true, "bounce")
    })
    this.$nextTick(() => {
      this.$refs.scroll.scroll.on("scrollEnd", function(qq) {
        console.log(qq)
      })
    })
  },
  methods: {
    zc: function(e) {
      // console.log(e.target.attributes)
      this.scroll.scrollToElement(e.target, 1000, true, true, "bounce")
    },
    ...mapMutations({
      showAccount: "changeMask"
    })
  },
  data: function() {
    return {
      transRot: 0,
      opaNum: 1,
      active: 0,
      listenScroll: true,
      items: [{
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
      direction: "horizontal",
      options: {
        probeType: 2,
        startX: 0,
        tap: true,
      },
      scrollX: true
    }
  }
}
</script>

<style lang="stylus">
.page__hd-change
  width 10rem
  height 54px
  position fixed
  background-color #ffffff
  top 0
  left 0
  right 0
  z-index 1

.page__hd-left
  width 1.173333rem /* 88/75 */
  height 17px
  box-sizing border-box
  position relative
  border-right 1px solid #F5F5F5
  &:before
    content ""
    position absolute
    width 8px
    height 8px
    border-radius 4px
    background-color #666666
    left 18px
  &:after
    content ""
    position absolute
    width 14px
    height 7px
    border-top-left-radius 4px
    border-top-right-radius 4px
    border-bottom-left-radius 1px
    border-bottom-right-radius 1px
    background-color #666666
    top 10px
    left 15px
.page__hd-mid
  width 7.813333rem /* 586/75 */
  overflow hidden
  height 36px

.hd__mid-content
  display flex
  width 9rem
  height 36px
  justify-content space-around

.hd__mid-title
  text-align center
  font-size 14px
  color #666666
  line-height 36px

.page__hd-right
  width 1.013333rem /* 76/75 */
  height 17px
  position relative
  transform-origin 17px 8px
  &:before
    content: ""
    width 8px
    height 8px
    background-color: #999
    position: absolute
    border-radius 2px
    left: 8px
    box-shadow: #999 9px 0px,
      #999 0px 9px,
      #999 9px 9px
  &:after
    content: ""
    width 4px
    height 4px
    background-color: #999999
    position: absolute
    left: 12px
    top 4px
    box-shadow: #999999 5px 0px,
      #999 0px 5px,
      #999 5px 5px
.words
  display inline-block
  width 100%
  height 100%
.isActive
  font-size 16px
  color #FC9153

.cube-scroll-wrapper
  width 7.813333rem /* 586/75 */
  height 36px
.cube-scroll-content
  width 9rem
  height 36px
.hd__mid-content
  display flex
  width 9rem
  height 36px
  justify-content space-around
.hd__mid-title
  text-align center
  font-size 14px
  color #666666
  line-height 36px
</style>
