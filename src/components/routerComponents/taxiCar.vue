<template>
<div class="wrap">
  <di-loading v-if="isLoading"></di-loading>
  <div v-if="!isLoading" class="page__bd">
    <di-time></di-time>
    <di-where></di-where>
    <div class="page__bd-choTime center">
      <di-choose-time></di-choose-time>
    </div>
    <di-money></di-money>
    <div class="page__bd-choBtn">
      <cube-button :active="true">确定</cube-button>
    </div>
    <div class="page__bd-img">
      <img src="https://imgchr.com/content/images/users/pp1L4/bkg_1519641651.png" alt="">
    </div>
  </div>
  <div>
    <ul>
      <li v-for='product in shop' :key='product.id'>
          {{ product.title }} - {{ product.price }}
          <br>
      </li>
    </ul>
  </div>
  <div @click="giv">22222222222222</div>
</div>
</template>

<script>
import DiLoading from "../DiLoading"
import DiWhere from "../DiWhere"
import DiMoney from "../DiMoney"
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
    DiMoney,
    DiWhere,
    DiTime,
    DiChooseTime
  },
  mounted() {
    this.$store.dispatch("increment")
  },
  data() {
    return {
      isLoading: true
    }
  },
  watch: {
    shop() {
      this.isLoading = false
    }
  },
  methods: {
    giv() {
      this.$store.dispatch("timeComing")
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
