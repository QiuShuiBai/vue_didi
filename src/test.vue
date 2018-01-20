<template>
<div id="app">
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li class="titleName" @click="zc" v-for="item in titleName" :key="item.id">{{item}}</li>
    </ul>
  </div>
</div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  data() {
    return {
      titleName: ["快车", "出租车", "专车", "顺丰车", "代驾车"]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        scrollX: true,
        scrollY: false,
        click: true
      })
      this.scroll.on("touchEnd", (pos) => {
        console.log(pos.x + "~" + pos.y)
      })
    })
  },
  methods: {
    zc: function(e) {
      console.log(e)
      this.scroll.scrollToElement(e.target, 300)
      console.log("ssss")
    }
  }
}
</script>

<style lang="stylus">
.wrapper
  background-color pink
  overflow hidden
.content
  display flex
  width 14rem
  height 40px
  justify-content space-between
.titleName
  width 2.5rem
  text-align center
  font-size 0.5rem
  line-height 40px
</style>
