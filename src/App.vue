<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <div class="scroll-wrapper">
      <cube-scroll :listenScroll="listenScroll"
       :data="items" :options="options" @click="zczc"
       @scroll="ccc" :direction="direction" ref="scroll"></cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listenScroll: true,
      items: ["快车", "出租车", "专车", "顺丰车", "代驾车"],
      direction: "horizontal",
      options: {
        probeType: 2,
        startX: 0,
        tap: true,
        scrollbar: {
          fade: true
        }
      },
      scrollX: true
    }
  },
  mounted() {
    this.$refs.scroll.$refs.listWrapper.childNodes[0].addEventListener("tap", (e) => {
      this.element = e.srcElement
    })
  },
  methods: {
    zczc(event) {
      this.$refs.scroll.scrollToElement(this.element, 1000, true, true, "bounce")
    },
    ccc(e) {
      console.log(e)
    }
  }
}

</script>

<style lang="stylus">
  .scroll-wrapper
    position: relative;
    height: 500px;
    background-color pink
    overflow: hidden;
  .cube-scroll-content
    position: relative
    width 14rem
  .cube-scroll-list
    display flex
    width 14rem
    height 40px
    justify-content space-between
  .cube-scroll-item
    width 2.5rem
    text-align center
    font-size 0.5rem
    line-height 40px
</style>
