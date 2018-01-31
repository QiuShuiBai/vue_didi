<template>
<div id="app">
  <di-header></di-header>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>
<script>
import DiHeader from "./components/DiHeader.vue"
export default {
  components: {
    DiHeader
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
</style>
