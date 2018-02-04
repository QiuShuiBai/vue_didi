<template>
  <div class="page__bd">
    <di-time>
      <slot>“ 最快两分钟接驾 ”</slot>
    </di-time>

    <di-where>
      <p slot="nowWhere">百佳超市对面</p>
      <p slot="goWhere">你要去哪儿</p>
    </di-where>

    <div class="page__bd-fastChoose center">
      <div class="page__bd-fastGo center">
        <div class="fastGoIcon"></div>
        <p class="fastGoText">现在出发</p>
      </div>
      <div class="page__bd-fastChange center">
        <!-- <input type="tel" /> -->
        <div class="fastChangeIcon"></div>
        <p class="fastChangeText">换乘车人</p>
      </div>
    </div>

    <di-choose>
      <p slot="button">呼叫快车</p>
      <div slot="firstIcon">
        <div class="IconWrap">
          <div></div>
        </div>
        <div>套餐</div>
      </div>
      <div slot="secondIcon">
        <div class="IconWrap">
          <div></div>
        </div>
        <div>车主招募</div>
      </div>
      <div slot="thirdIcon">
        <div class="IconWrap">
          <div></div>
        </div>
        <div>套餐</div>
      </div>
    </di-choose>

    <div class="qqqq" @click="zczc"></div>
    <transition name="slide-fade">
      <div v-show="isShow" class="cccc"></div>
    </transition>
  </div>
</template>

<script>
import DiTime from "../DiTime.vue"
import DiWhere from "../DiWhere.vue"
import DiChoose from "../DiChoose.vue"
export default {
  name: "fastCar",
  components: {
    DiTime,
    DiWhere,
    DiChoose
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    zczc() {
      this.isShow = !this.isShow
      console.log(this.qqqq)
    }
  }
}
</script>

<style lang="stylus" scoped>
.qqqq
  width 5rem
  height 50px
  background-color red
.cccc
  width 5rem
  height 50px
  background-color gold
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-5rem);
}
.page__bd-fastGo,.page__bd-fastChange
  width 4.733333rem /* 355/75 */
  height 46px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
.page__bd-fastGo
  border-right 1px solid #FAFAFA
.page__bd-fastChange
  border-left 1px solid #FAFAFA
.fastGoIcon,.fastChangeIcon
  width 12px
  height 12px
  position relative
  margin-right 0.186667rem /* 14/75 */
.fastGoIcon
  border-radius 50%
  background-color #CCCCCC
  &::before
    content ""
    position absolute
    width 3px
    height 1px
    background-color #FFFFFF
    left 6px
    top 5px
  &::after
    content ""
    position absolute
    width 1px
    height 5px
    background-color #FFFFFF
    left 5px
    top 1px
.fastChangeIcon
  &::before
    content ""
    position absolute
    width 8px
    height 8px
    background: radial-gradient(circle, #CCCCCC 3px, transparent 3px, transparent 4px);
    right 2px
    top -1px
    border-radius 50%
  &::after
    content ""
    position absolute
    width 12px
    height 5px
    background-color #CCCCCC
    border-top-left-radius 3px
    border-top-right-radius 3px
    top 7px
.fastGoText,.fastChangeText
  font-size 12px
  color #666666
</style>
