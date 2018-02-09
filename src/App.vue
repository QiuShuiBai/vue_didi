<template>
<div id="app">
  <di-header></di-header>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <transition name="slide-fade">
    <div class="accountMask" v-if="isMask">
      <di-account></di-account>
    </div>
  </transition>
</div>
</template>
<script>
import {mapGetters} from "vuex"
import DiAccount from "./components/DiAccount.vue"
import DiHeader from "./components/DiHeader.vue"
export default {
  computed: {
    ...mapGetters([
      "isMask"
    ])
  },
  components: {
    DiHeader,
    DiAccount
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
html,body
  height 100%
*
  margin 0
  padding 0
#app
  background-color #F3F4F5
  box-sizing border-box
  border-top: 1px solid #ccc;//新增
  height 100%
.center
  display flex
  align-items center
  justify-content center
.page__bd
  margin 0 auto
  margin-top 64px
  font-size 26px
  background-color #fff
  width 9.466667rem
.accountMask
  position fixed
  width 14rem
  height 100vh
  background-color rgba(45, 45, 45, .2)
  top 0
  left 0
  right 0
  left 0
  z-index 9999
.slide-fade-enter-active {
  transition: all .5s ease;
  // transition: opacity .5s;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-4rem)
  opacity 0
}
</style>
