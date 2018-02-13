<template>
  <div class="page__bd-where">

    <div class="ori-Where center" @click="chooseOri(1)">
      <div class="where-nowLeft"></div>
      <div class="where-mid mid-nowText">
        <slot name="nowWhere"></slot>
      </div>
      <div class="where-right"></div>
    </div>

    <div class="des-Where center" @click="chooseOri(2)">
      <div class="where-goLeft"></div>
      <div class="where-mid mid-goText">
        <slot name="goWhere"></slot>
      </div>
      <div class="where-right"></div>
    </div>

  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  methods: {
    ...mapMutations({
      chooseOri: "chooseOri"
    })
  }
}
</script>

<style lang="stylus" scoped>
.page__bd-where
  width 100%
  height 100px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
.ori-Where,.des-Where
  width 100%
  height 50px
  box-sizing border-box
.where-nowLeft
  width 1.013333rem /* 76/75 */
  height 50px
  position relative
  &::before
    content ""
    position absolute
    width 6px /* 12/75 */
    height 6px /* 12/75 */
    left 0.426667rem /* 32/75 */
    top 22px /* 44/75 */
    background-color #3CBCA3
    border-radius 50%
.where-mid
  width 8.56rem /* 642/75 */
  box-sizing border-box
  height 50px
  border-bottom 1px solid #EBEBEB
.where-right
  width 0.426667rem /* 32/75 */
.where-goLeft
  width 1.013333rem /* 76/75 */
  height 50px
  position relative
  &::before
    content ""
    position absolute
    width 6px /* 12/75 */
    height 6px /* 12/75 */
    left 0.426667rem /* 32/75 */
    top 22px /* 44/75 */
    background-color #FC9153
    border-radius 50%
.mid-nowText
  font-size 15px
  color #7A7A7A
  line-height 50px
.mid-goText
  font-size 15px
  color #FC9153
  line-height 50px
</style>
