<template>
  <div v-if="isMoney" class="moneyWrap center">
    <div class="payTogether active center">
      <p class="payText">拼座</p>
      <p class="payMoney"><span>约&nbsp;</span>{{money}}<span>&nbsp;元</span></p>
    </div>|
    <div class="notTogether center">
      <p class="payText">不拼座</p>
      <p class="payMoney">{{money}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters([
      "isMoney",
      "money"
    ])
  }
}
</script>

<style lang="stylus" scoped>
.moneyWrap
  width 100%
  height 83px
  display flex
  color #F9F9F9
.payTogether,.notTogether
  flex 1
  box-sizing border-box
  height 83px
  flex-direction column
  color #333333
.payText
  font-size 12px
  line-height 26px
.payMoney
  font-size 19px
  span
    font-size 13px
.active
  color #FC9153
</style>
