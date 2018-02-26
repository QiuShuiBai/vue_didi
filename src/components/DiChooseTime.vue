<template>
  <div class="page__bd-fastGo center" @click="showTimePicker">
    <div class="fastGoIcon"></div>
    <p class="fastGoText">{{time}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "diChooseTime",
  computed: {
    ...mapGetters(["time"])
  },
  methods: {
    showTimePicker(e) {
      this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 10,
        day: {
          len: 3,
          filter: ["今天", "明天", "后天"],
          format: "M月d日"
        },
        onSelect: (selectedTime, selectedText) => {
          selectedText = selectedText.replace("点", "").replace("分", "")
          if (selectedText !== "现在") {
            this.changeTime(selectedText)
          } else {
            this.changeTime("现在出发")
          }
        },
        onCancel: () => {}
      }).show()
    }
  }
}
</script>

<style lang="stylus">
.page__bd-fastGo
  width 4.733333rem /* 355/75 */
  height 46px
  box-sizing border-box
.fastGoIcon
  border-radius 50%
  background-color #CCCCCC
  width 12px
  height 12px
  position relative
  margin-right 0.186667rem /* 14/75 */
  &::before
    content ""
    position absolute
    width 3px
    height 1px
    background-color #FFFFFF
    left 6px
    top 5px
  &::after
    content ""
    position absolute
    width 1px
    height 5px
    background-color #FFFFFF
    left 5px
    top 1px
.fastGoText
  font-size 12px
  color #666666
</style>
