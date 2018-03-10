<template>
<div class="wrap">
  <div class="optionPer">
    <div class="optionPer-left" :class="{'optionActive' : showMenu}" @click="changeMenu">乘客</div>
    <div class="optionPer-mid" :class="{'optionActive' : !showMenu}" @click="changeMenu">车主</div>
    <div class="optionPer-right">我的信任值&nbsp;&nbsp;<span>80分</span></div>
  </div>
  <div class="page__bd" v-if="showMenu">
    <div class="page__free-title center">
      <div class="free-title">预约市内或跨域顺风车</div>
      <div class="free-minTit">越远越划算</div>
    </div>
    <di-where></di-where>
    <div class="freeNumTime center">
      <div class="freeNum center" @click="showPickerStyle">
        <div class="freeNum-icon"></div>
        <div class="freeNum-text">{{perNum}}</div>
      </div>|
      <di-choose-time></di-choose-time>
    </div>
    <div class="freeRemark" @click="showPopup('myPopup')">
      <div class="freeRemark-icon"></div>
      <div class="freeRemark-text">{{freeRemark_text}}</div>
    </div>
    <di-free-money></di-free-money>
  </div>

  <div v-if="showMenu">
    <div class="page__bd-choBtn">
      <cube-button :active="true">预约顺风车</cube-button>
    </div>
    <div class="page__bd-choBtn">
      <cube-button :light="true">我有车 我要顺路接人</cube-button>
    </div>
  </div>

<cube-popup type="my-popup" :center="false" ref="myPopup">
  <div class="remarkMask">
    <div class="maskHd">
      <div class="maskHd-left" @click="hidePopup('myPopup')">取消</div>
      <div class="maskHd-title">行程备注</div>
    </div>
    <div class="maskBd">
      <div class="maskBd-title">
        <i class="cubeic-alert"></i><span>填写下列信息， 方便车主与你沟通</span>
      </div>
      <div class="maskBd-content">
        <div v-for="(item, index) in content" :key="index" class="maskBd-item" :class="{'itemActive': item.isActive === true}" @click="zczc(index)">
          &nbsp;&nbsp;{{item.text}}&nbsp;&nbsp;
        </div>
      </div>
    </div>
    <div class="maskFt">
      <cube-button @click="hidePopup('myPopup')">确定</cube-button>
    </div>
  </div>
</cube-popup>
</div>
</template>

<script>
import {mapMutations} from "vuex"
import DiWhere from "../DiWhere.vue"
import DiMoney from "../DiMoney.vue"
import DiChooseTime from "../DiChooseTime.vue"
import DiFreeMoney from "../DiFreeMoney.vue"
export default {
  name: "freeCar",
  components: {
    DiWhere,
    DiMoney,
    DiChooseTime,
    DiFreeMoney
  },
  data() {
    return {
      freeRemark_text: "行程备注选填空",
      perNum: "选择乘车人数",
      showMenu: true,
      content: [
        {
          text: "有儿童",
          isActive: false
        },
        {
          text: "有孕妇",
          isActive: false
        },
        {
          text: "有宠物",
          isActive: false
        },
        {
          text: "有大件行李",
          isActive: false
        },
        {
          text: "需要走高速，高速费由我承担",
          isActive: false
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      changePerNum: "changePerNum"
    }),
    changeMenu() {
      this.showMenu = !this.showMenu
    },
    zczc(index) {
      this.content[index].isActive = !this.content[index].isActive
    },
    showPopup(refId) {
      this.freeRemark_text = "点击查看"
      const component = this.$refs.myPopup
      component.show()
    },
    hidePopup() {
      const component = this.$refs.myPopup
      component.hide()
    },
    showPickerStyle() {
      var that = this
      this.$createActionSheet({
        title: "乘车人数",
        pickerStyle: true,
        active: +that.perNum.slice(0, 1) - 1,
        data: [
          {
            content: "1人"
          },
          {
            content: "2人"
          },
          {
            content: "3人"
          },
          {
            content: "4人"
          }
        ],
        onSelect: (item, index) => {
          that.perNum = index + 1 + "人"
          that.changePerNum(index + 1)
        }
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  margin-top 53px  //DiHeader组件高度为54px,这里53px是因为限制#app里的margin-top而使用了border-top 1px
  width 10rem
  border-top solid 1px white
.optionPer
  width 100%
  display flex
  flex-direction row
  position fixed
  top 54px
  background-color #fff
.optionPer-left
  width 1.2rem /* 120/75 */
  margin-left 0.4rem /* 30/75 */
  text-align center
  font-size 14px
  height 24px
.optionActive
  color #FC9135
  box-sizing border-box
  border-bottom 2px solid #FC9135
.optionPer-mid
  margin-left 0.4rem /* 30/75 */
  width 1.2rem
  text-align center
  font-size 14px
  height 24px
.optionPer-right
  position absolute
  right 0.9rem /* 54/75 */
  height 24px
  line-height 20px
  color #9D9D9D
  span
    color #FC9135
  &::before
    content ""
    position absolute
    width 4px
    height 4px
    border-top 1px solid #9D9D9D
    border-right 1px solid #9D9D9D
    transform rotate(45deg)
    top 7px
    left 100px
.page__bd
  margin-top 34px
.page__free-title
  height 61px
  flex-direction column
  border-bottom 1px solid #EBEBEB
  width 100%
  box-sizing border-box
.free-title
  font-size 17px
  color #333333
.free-minTit
  margin-top 10px
  font-size 12px
  color #666666
.page__bd-choBtn
  width 8.933333rem /* 670/75 */
  margin 0 auto
  margin-top 10px
  padding-bottom 10px
.freeNumTime
  width 100%
  height 50px
  color #F9F9F9
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
.freeNum,.freeTime
  width 4.733333rem
  height 49px
  color #666666
  font-size 13px
  display flex
  flex-direction row
  align-items center
.freeNum-icon
  width 12px
  height 12px
  position relative
  margin-left 14px
  margin-right 14px /* 14/75 */
  &::before
    content ""
    position absolute
    width 8px
    height 8px
    background: radial-gradient(circle, #CCCCCC 3px, transparent 3px, transparent 4px);
    right 2px
    top -1px
    border-radius 50%
  &::after
    content ""
    position absolute
    width 12px
    height 6px
    background-color #CCCCCC
    border-top-left-radius 3px
    border-top-right-radius 3px
    top 7px
.freeRemark
  width 100%
  height 50px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
  display flex
  align-items center
.freeRemark-icon
  width 11px
  height 14px
  border-radius 0 0 2px 2px
  background-color #CCCCCC
  margin-left 42px
  position relative
  &::before
    content ""
    position absolute
    width 5px
    height 1px
    background-color #FFFFFF
    top 2px
    left 2px
  &::after
    content ""
    position absolute
    width 7px
    height 1px
    background-color #FFFFFF
    top 6px
    left 2px
    box-shadow #FFFFFF 0 4px 0 0
.freeRemark-text
  color #666666
  font-size 13px
  margin-left 20px
.remarkMask
  width 10rem
  height 280px
  background-color #FFFFFF
.maskHd
  width 100%
  height 60px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
  display flex
.maskHd-left
  color #999999
  font-size 13px
  height 59px
  line-height 59px
  text-align center
  width 1.573333rem /* 118/75 */
.maskHd-title
  width 6.853333rem /* 514/75 */
  text-align center
  font-size 17px
  color #333333
  height 59px
  line-height 59px
.maskBd-title
  width 100%
  height 56px
  box-sizing border-box
  line-height 56px
  font-size 12px
  color #CECECE
  padding-left 0.333333rem /* 25/75 */
  span
    color #666666
    padding-left 0.1rem
.maskBd-content
  box-sizing border-box
  padding-left 0.2rem /* 15/75 */
  margin-bottom 14px
.maskBd-item
  height 30px
  line-height 30px
  border 1px solid #cccccc
  color #6A6A6A
  display inline-block
  margin-bottom 10px
  margin-left 10px
.itemActive
  border 1px solid #FC9153
  color #FC9153
.maskFt
  padding 0 10px /* 10/75 */
</style>
