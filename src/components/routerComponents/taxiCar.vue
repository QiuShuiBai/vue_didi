<template>
<div class="wrap">
  <di-loading v-if="isLoading"></di-loading>
  <div v-if="!isLoading" class="page__bd center">出租车</div>
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
import DiLoading from "../DiLoading"
import {mapGetters} from "vuex"
export default {
  name: "taxiCar",
  computed: {
    ...mapGetters([
      "shop"
    ])
  },
  components: {
    DiLoading
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
  }
}
</script>

<style lang="stylus" scoped>
</style>
