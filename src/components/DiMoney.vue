<template>
  <div class="diMoney center">
    <div class="moneyText">
      约&nbsp;<span>{{diMoney}}</span>&nbsp;元
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diMoney: 18
    }
  }
}
</script>

<style lang="stylus" scoped>
.diMoney
  width 100%
  height 55px
  box-sizing border-box
  border-bottom 1px solid #FAFAFA
.moneyText
  font-size 12px
  color #666666
  span
    font-size 20px
</style>
