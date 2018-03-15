<template>
<div class="wrap">
  <di-loading v-if="isLoading"></di-loading>
  <div v-show="!isLoading" class="page__bd">
    <di-time></di-time>
    <di-where></di-where>
    <div class="page__bd-choTime center">
      <di-choose-time></di-choose-time>
    </div>
    <di-taxi-money></di-taxi-money>
    <div class="page__bd-choBtn">
      <cube-button :active="true">确定</cube-button>
    </div>
    <div class="page__bd-img">
      <img @load="imageLoaded" src="https://imgchr.com/content/images/users/pp1L4/bkg_1519641651.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
import DiLoading from "../DiLoading"
import DiWhere from "../DiWhere"
import DiTaxiMoney from "../DiTaxiMoney"
import DiTime from "../DiTime"
import DiChooseTime from "../DiChooseTime"
import {mapGetters} from "vuex"
export default {
  name: "taxiCar",
  computed: {
    ...mapGetters([
      "shop"
    ])
  },
  components: {
    DiLoading,
    DiTaxiMoney,
    DiWhere,
    DiTime,
    DiChooseTime
  },
  mounted() {
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    imageLoaded() {
      this.isLoading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.page__bd-choTime
  width 100%
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
.page__bd-choBtn
  width 8.933333rem /* 670/75 */
  margin 0 auto
  margin-top 10px
  padding-bottom 10px
.page__bd-img
  border-top 10px solid #F3F4F5
  img
    width 9.466667rem
</style>
