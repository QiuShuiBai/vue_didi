<template>
  <div>
    <cube-button :active="true">
      <slot name="button"></slot>
    </cube-button>
    <div class="chooseIcon">
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
.chooseIcon
  display flex
  align-items center
  justify-content space-around
.Icon
  width 60px
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
  width 50px
  text-align center
  color #666666
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
</style>
