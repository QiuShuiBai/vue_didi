<template>
<div>
  <div v-if="isLoading" class="page__bd center">
    asdassssssssssssssssssssssssss
  </div>
  <div v-if="!isLoading">
    <div class="page__bd center">出租车</div>
    <img src="http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg" alt="">
  </div>
  <div>
    <ul>
      <li v-for='product in shop' :key='product.id'>
          {{ product.title }} - {{ product.price }}
          <br>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import store from "../../store"
import {mapGetters} from "vuex"
export default {
  name: "taxiCar",
  computed: {
    ...mapGetters([
      "isLoading",
      "time",
      "shop"
    ])
  },
  mounted() {
    this.$store.dispatch("increment")
    this.$nextTick(() => {
      // store.commit("zFalse")
    })
  },
  watch: {
    shop() {
      store.commit("zFalse")
      console.log("2222222")
    }
  }
  // beforeRouteEnter (to, from, next) {
  //   next()
  // }
}
</script>

<style lang="stylus" scoped>
</style>
