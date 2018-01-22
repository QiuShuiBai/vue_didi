<template>
<div id="app">
  <di-header :titleName="titleName" :isActive="isActive"></di-header>
</div>
</template>
<script>
import DiHeader from "./components/DiHeader.vue"
export default {
  data() {
    return {
      titleName: ["快车", "出租车", "顺风车", "代驾", "自驾租车"],
      isActive: 0
    }
  },
  components: {
    DiHeader
  }
}
</script>

<style lang="stylus">
.center
  display flex
  align-items center
  justify-content center
</style>
