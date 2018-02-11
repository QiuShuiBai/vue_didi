<template>
  <div class="page__ft-account">
    <div class="page_ft-acc center">
      <div class="accIcon"></div>
      <div class="accNum">15170158725</div>
    </div>
    <div v-for="item in items" :key="item.id">
      <a :href="item.url" class="accItem">
        <div class="iconWrap">
          <div :class="item.class"></div>
        </div>
        <div class="accText">
          <p>{{item.text}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url: "#javascript1",
          text: "行 程",
          class: "travel"
        },
        {
          url: "#javascript2",
          text: "钱 包",
          class: "money"
        },
        {
          url: "#javascript3",
          text: "设 置",
          class: "setUp"
        },
        {
          url: "#javascript4",
          text: "客 服",
          class: "service"
        }
      ]
    }
  }
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
.accItem
  display flex
  align-items center
  justify-content flex-start
  width 100%
  height 16px
  margin 34px 0
.iconWrap
  width 17px
  margin-left 18px
  margin-right 14px
  height 16px
.accText
  color #333333
  font-size 16px
.travel
  width 17px
  height 16px
  background-color #666666
  border-radius 0 0 4px 4px
  position relative
  &::before
    content ""
    position absolute
    width 2px
    height 2px
    background-color #FFFFFF
    border-radius 50%
    left 3px
    top 2px
    box-shadow #FFFFFF 9px 0px
  &::after
    content ""
    position absolute
    width 11px
    height 2px
    background-color #ffffff
    border-radius 1px
    left 3px
    top 7px
    box-shadow #FFFFFF 0px 4px
.money
  width 17px
  height 16px
  background-color #666666
  border-radius 0 0 4px 4px
  position relative
  &::before
    content ""
    position absolute
    width 2px
    height 2px
    background-color #666666
    border-radius 50%
    left 12px
    top 7px
    z-index 2
  &::after
    content ""
    position absolute
    width 6px
    height 4px
    background-color #ffffff
    border-radius 2px 0% 0% 2px
    top 6px
    left 11px
.setUp
  height 16px
  width 15px
  position relative
  left 2px
  background: linear-gradient(135deg, transparent 2px, #666666 2px) no-repeat top left / 4px 8px,
    linear-gradient(45deg, transparent 2px, #666666 2px) no-repeat bottom left / 4px 8px,
    linear-gradient(210deg, transparent 5px, #666666 5px) no-repeat top right / 11px 8px,
    linear-gradient(-30deg, transparent 5px, #666666 5px) no-repeat bottom right / 11px 8px
  &::before
    content ""
    position absolute
    height 16px
    width 15px
    background: linear-gradient(135deg, transparent 2px, #666666 2px) no-repeat top left / 4px 8px,
      linear-gradient(45deg, transparent 2px, #666666 2px) no-repeat bottom left / 4px 8px,
      linear-gradient(210deg, transparent 5px, #666666 5px) no-repeat top right / 11px 8px,
      linear-gradient(-30deg, transparent 5px, #666666 5px) no-repeat bottom right / 11px 8px
    transform rotate(180deg)
    left -2px
  &::after
    content ""
    position absolute
    height 2px
    width 2px
    border 1.5px solid #FFFFFF
    border-radius 50%
    background-color #FFFFFF
    top 6px
    left 4px
    z-index 2
.service
  width 5px
  height 2px
  background-color #666666
  border-radius 1px 1px 0px 0px
  position relative
  transform rotate(45deg)
  left 11px
  top 2px
  &::before
    content ""
    position absolute
    width 5px
    height 11px
    top 3px
    background-color #666666
  &::after
    content ""
    position absolute
    width 0px
    height 0px
    top 14px
    border-top 4px solid #666666
    border-left 2.5px solid transparent
    border-right 2.5px solid transparent
</style>
