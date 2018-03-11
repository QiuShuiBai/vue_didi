<template>
  <div v-if="isMoney" class="diMoney center">
    <div class="moneyText">
      约&nbsp;<span>{{money}}</span>&nbsp;元
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
  },
  methods: {
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.diMoney
  width 100%
  height 55px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
.moneyText
  font-size 12px
  color #666666
  span
    font-size 20px
</style>
