<template>
  <div class="page__bd">
    <di-time></di-time>
    <di-where></di-where>
  </div>
</template>

<script>
import DiWhere from "../DiWhere"
import DiMoney from "../DiMoney"
import DiTime from "../DiTime"
import DiChooseTime from "../DiChooseTime"
import DiChoose from "../DiChoose"
export default {
  name: "desDri",
  components: {
    DiMoney,
    DiWhere,
    DiTime,
    DiChooseTime,
    DiChoose
  }
}
</script>

<style lang="stylus" scoped>
</style>
