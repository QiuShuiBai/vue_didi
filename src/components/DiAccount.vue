<template>
  <div class="page__ft-account">
    <div class="page_ft-acc center">
      <div class="accIcon"></div>
      <div class="accNum">15170158725</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.page__ft-account
  width 7.52rem /* 564/75 */
  height 100%
  background-color #FFFFFF
.page__ft-acc
  width 100%
  height 75px
.accIcon
  width 24px
  height 12px
  position relative
  &::before
    content ""
    position absolute
    width 8px
    height 8px
    background: radial-gradient(circle, #CCCCCC 3px, transparent 3px, transparent 4px);
    left 8px
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
    left 6px
.accNum
  height 75px
  font-size 12px
  color #666666
  line-height 75px
</style>
