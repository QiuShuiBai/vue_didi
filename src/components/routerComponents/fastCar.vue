<template>
  <div class="page__bd">
    <di-time>
      <slot>“ 最快两分钟接驾 ”</slot>
    </di-time>
    <di-where>
      <p slot="nowWhere">百佳超市对面</p>
      <p slot="goWhere">你要去哪儿</p>
    </di-where>
    <div class="qqqq" @click="zczc"></div>
    <transition name="slide-fade">
      <div v-show="isShow" class="cccc"></div>
    </transition>
  </div>
</template>

<script>
import DiTime from "../DiTime.vue"
import DiWhere from "../DiWhere.vue"
export default {
  name: "fastCar",
  components: {
    DiTime,
    DiWhere
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    zczc() {
      this.isShow = !this.isShow
      console.log(this.qqqq)
    }
  }
}
</script>

<style lang="stylus" scoped>
.qqqq
  width 5rem
  height 50px
  background-color red
.cccc
  width 5rem
  height 50px
  background-color gold
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-5rem);
}
</style>
