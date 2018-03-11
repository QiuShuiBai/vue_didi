<template>
  <div class="page__bd-time center">
    <p class="time-title">“ {{timeComing}} ”</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "DiTime",
  mounted() {
    this.$store.dispatch("timeComing")
  },
  computed: {
    ...mapGetters([
      "where",
      "timeComing"
    ])
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.page__bd-time
  width 100%
  height 44px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
.time-title
  font-size 13px
  color #A3A3A3
</style>
