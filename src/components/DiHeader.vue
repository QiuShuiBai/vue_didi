<template>
<div class="page__hd center">
  <div class="page__hd-left">
  </div>
  <div class="page__hd-mid" ref="wriper">
    <ul class="hd__mid-content">
      <li class="hd__mid-title" @click="zc" v-for="(item, index) in title"
        :key="index">
        <router-link class="words" :num="index" :class="{'isActive':index===active}" :to="item.path">{{item.titleName}}</router-link>
      </li>
    </ul>
  </div>
  <div class="page__hd-right" :style="{opacity:opaNum,transform:`rotate(${transRot}deg)`}">
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex"
import BScroll from "better-scroll"
export default {
  name: "DiHeader",
  computed: {
    ...mapGetters([
      "title"
    ])
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wriper, {
        probeType: 3,
        scrollX: true,
        scrollY: false,
        click: true
      })
      // this.scroll.on("touchEnd", (pos) => {
      //   console.log(pos.x + "~" + pos.y)
      // })
      this.scroll.on("scroll", (pos) => {
        if(pos.x <= this.scroll.maxScrollX) {
          this.transRot = (-pos.x + this.scroll.maxScrollX) * 8
          this.opaNum = 1 + (pos.x - this.scroll.maxScrollX) / 150
        }
      })
    })
  },
  methods: {
    zc: function(e) {
      console.log(e.target.attributes)
      this.scroll.scrollToElement(e.target, 1000, true, true, "bounce")
      this.active = +e.target.attributes[3].value
    }
  },
  data: function() {
    return {
      transRot: 0,
      opaNum: 1,
      active: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.page__hd
  width 10rem
  height 54px
  position fixed
  background-color #ffffff
  top 0
  left 0
  right 0

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
    height 6px
    border-top-left-radius 2px
    border-top-right-radius 2px
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
</style>
