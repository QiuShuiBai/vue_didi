<template>
  <div class="page__bd-time center">
    <p class="time-title" v-if="ifShow">“ 正在查看附近车辆 ”</p>
    <p class="time-title" v-if="!ifShow">“ {{timeComing}} ”</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "DiTime",
  mounted() {
    this.$store.dispatch("timeComing", this.$route.name)
  },
  computed: {
    ...mapGetters([
      "where",
      "timeComing"
    ])
  },
  watch: {
    timeComing() {
      this.ifShow = false
    }
  },
  data() {
    return {
      ifShow: true
    }
  },
  activated() {
    this.ifShow = true
    this.$store.dispatch("timeComing", this.$route.name)
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
