<template>
  <div v-if="isMoney" class="diMoney center">
    <div class="moneyText">
      <span>打表计价</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters([
      "isMoney"
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
  color #666666
  span
    font-size 20px
</style>
