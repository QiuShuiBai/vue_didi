<template>
  <div class="DiChooseWrap">
    <cube-button :active="true">
      <slot name="button"></slot>
    </cube-button>
    <div class="chooseIconWrap">
      <div class="Icon">
        <div class="iconWrap center">
          <div :class="iconShow[0]"></div>
        </div>
        <p class="iconText">{{iconText[0]}}</p>
      </div>

      <div class="Icon">
        <div class="iconWrap center">
          <div :class="iconShow[1]"></div>
        </div>
        <p class="iconText">{{iconText[1]}}</p>
      </div>

      <div class="Icon">
        <div class="iconWrap center">
          <div :class="iconShow[2]"></div>
        </div>
        <p class="iconText">{{iconText[2]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconShow: {
      type: Array,
      default() {
        return ["ticket", "carer", "discount"]
      }
    },
    iconText: {
      type: Array,
      default() {
        return ["车票", "车主招募", "套餐"]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.DiChooseWrap
  width 8.933333rem /* 670/75 */
  margin 0 auto
  margin-top 0.266667rem /* 20/75 */
.chooseIconWrap
  display flex
  align-items center
  justify-content space-around
  margin-top 0.4rem /* 30/75 */
.Icon
  width 100px
  display flex
  align-items center
  justify-content center
  flex-direction column
.iconWrap
  width 44px
  height 44px
  box-sizing border-box
  border 1px solid #EAEAEA
  border-radius 50%
.iconText
  font-size 12px
  display inline-block
  width 80px
  text-align center
  color #666666
  margin-top 0.266667rem /* 20/75 */
  margin-bottom 0.4rem /* 30/75 */
.ticket
  width 16px
  height 14px
  background-color #999999
  border-radius 1px 1px 4px 4px
  position relative
  &::before
    content ""
    position absolute
    width 1px
    height 2px
    background-color white
    top 2px
    left 9px
    box-shadow: white 0px 3px,
        white 0px 6px
  &::after
    content ""
    position absolute
    width 4px
    height 4px
    border-radius 50%
    background-color #FFFFFF
    top 4px
    left 14px
.carer
  width 10px
  height 6px
  background-image: radial-gradient(circle at 5px 2px,#999999 0px, #999999 4px, white 4px)
  border-top: 2px solid #999999
  margin-top -9px
  position relative
  &::before
    content ""
    position absolute
    width 14px
    height 6px
    background-color #999999
    top 7px
    left -2px
    border-radius 4px 4px 1px 1px
  &::after
    content ""
    position absolute
    width 5px
    height 1px
    background-color #FFFFFF
    transform rotate(-45deg)
    top 10px
    left 3px
.discount
  width 10px
  height 10px
  background-color #999999
  transform rotate(45deg)
  position relative
  margin-left 3px
  margin-top 2px
  &::before
    content ""
    position absolute
    width 2px
    height 2px
    background-color #FFFFFF
    outline 3px solid #999999
    transform rotate(45deg)
    top 4px
    left -1px
.callFri
  width 14px
  height 9px
  background linear-gradient(125deg ,transparent 0px, transparent 3px, #999999 3px) no-repeat top left / 8px 7px,
             linear-gradient(235deg ,transparent 0px, transparent 3px, #999999 3px) no-repeat top right / 8px 7px,
             linear-gradient(to right, #999999 0px, #999999 0px) no-repeat bottom  right / 14px 4px
  border-radius 0 0 3px 3px
  position relative
  top 2px
  &::before
    content ""
    position absolute
    width 6px
    border-top 3px solid #999999
    border-left 2px solid transparent
    border-right 2px solid transparent
    top -4px
    left 2px
  &::after
    content "￥"
    position absolute
    width 14px
    height 9px
    background-color transparent
    font-size 8px
    color #FFFFFF
    text-align center
.myVip
  width 12px
  height 10px
  background linear-gradient(160deg ,transparent 0px, transparent 1px, #999999 1px) no-repeat top left / 7px 2px,
             linear-gradient(200deg ,transparent 0px, transparent 1px, #999999 1px) no-repeat top right / 7px 2px,
             linear-gradient(280deg ,transparent 0px, transparent 1px, #999999 1px) no-repeat bottom right / 7px 9px,
             linear-gradient(80deg ,transparent 0px, transparent 1px, #999999 1px) no-repeat bottom left / 7px 9px
  position relative
  &::before
    content ""
    position absolute
    width 4px
    height 4px
    background-color #FFFFFF
    transform rotate(45deg)
    top -2px
    left 1px
    box-shadow #FFFFFF 4px -4px
  &::after
    content ""
    position absolute
    width 2px
    height 2px
    background-color #999999
    border-radius 50%
    top -2px
    left -1px
    box-shadow #999999 5.5px -1px,
               #999999 11px 0
</style>
