<template>
  <div class="page__bd">
    <di-time></di-time>

    <di-where></di-where>

    <div class="page__bd-fastChoose center">
      <div class="page__bd-fastGo center" @click="showTimePicker">
        <div class="fastGoIcon"></div>
        <p class="fastGoText">{{time}}</p>
      </div>

      <div class="page__bd-fastChange center" @click="choosePer">
        <!-- <input type="tel" /> -->
        <div class="fastChangeIcon"></div>
        <p class="fastChangeText">{{changePer}}</p>
      </div>
    </div>

    <di-money></di-money>

    <di-choose :iconShow="iconShow" :iconText="iconText">
      <p slot="button">呼叫快车</p>
    </di-choose>

    <cube-slide ref="slide" :data="items" >
      <!-- @change="changePage" -->
      <cube-slide-item v-for="(item, index) in items" :key="index">
         <!-- @click.native="clickHandler(item, index)" -->
        <a :href="item.url">
          <img :src="item.image" class="slideImg">
        </a>
      </cube-slide-item>
    </cube-slide>

    <div v-if="ifChoosePer" class="choosePer center"  @click.self="choosePer">
      <div class="chooseWrap">
        <div class="chooseTitle center">
          请输入乘车人联系电话
        </div>
        <div class="chooseIpt" :lalala="tureText">
          <input type="tel" pattern="[0-9]" maxlength="11" placeholder="请输入手机号码" @keyup="writeTel" v-model="tleNum">
        </div>
        <cube-button :disabled="iptDisabled" @click="isTelNum">确定</cube-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
import DiTime from "../DiTime.vue"
import DiWhere from "../DiWhere.vue"
import DiChoose from "../DiChoose.vue"
import DiMoney from "../DiMoney.vue"
export default {
  name: "fastCar",
  computed: {
    ...mapGetters([
      "where",
      "time"
    ])
  },
  mounted() {
    this.$store.dispatch("getNowWhere")
  },
  components: {
    DiTime,
    DiWhere,
    DiChoose,
    DiMoney
  },
  data() {
    return {
      ifChoosePer: false,
      iptDisabled: true,
      changePer: "换乘车人",
      tureText: "",
      zcInput: "zcInput",
      tleNum: "",
      items: [
        {
          url: "http://www.didichuxing.com/",
          image: "http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image: "http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image: "http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png"
        }
      ],
      isShow: true,
      iconShow: ["ticket", "carer", "discount"],
      iconText: ["车票", "车主招募", "套餐"]
    }
  },
  methods: {
    ...mapMutations({
      changeTime: "changeTime"
    }),
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
          if(selectedText !== "现在") {
            this.changeTime(selectedText)
          } else {
            this.changeTime("现在出发")
          }
        },
        onCancel: () => {
        }
      }).show()
    },
    choosePer() {
      this.ifChoosePer = !this.ifChoosePer
    },
    writeTel() {
      var reg = /^[1][3,4,5,7,8][0-9]{9}$/
      var phoneNum = this.tleNum
      if(reg.test(phoneNum)) {
        this.iptDisabled = false
        this.tureText = ""
      }else{
        this.iptDisabled = true
        if(phoneNum.length === 11) {
          this.tureText = "请输入正确号码"
        }
      }
    },
    isTelNum() {
      this.ifChoosePer = !this.ifChoosePer
      this.tureText = ""
      this.changePer = "尾号" + this.tleNum.slice(7, 11)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page__bd-fastGo,.page__bd-fastChange
  width 4.733333rem /* 355/75 */
  height 46px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
.page__bd-fastGo
  border-right 1px solid #FAFAFA
.page__bd-fastChange
  border-left 1px solid #FAFAFA
.fastGoIcon,.fastChangeIcon
  width 12px
  height 12px
  position relative
  margin-right 0.186667rem /* 14/75 */
.fastGoIcon
  border-radius 50%
  background-color #CCCCCC
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
.fastChangeIcon
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
    height 5px
    background-color #CCCCCC
    border-top-left-radius 3px
    border-top-right-radius 3px
    top 7px
.fastGoText,.fastChangeText
  font-size 12px
  color #666666
.cube-slide
  overflow: hidden;
  position relative
  min-height: 1px;
  border-top 10px solid #F3F4F5
.choosePer
  position fixed
  z-index 9999
  width 100vw
  height 100vh
  top 0
  bottom 0
  left 0
  right 0
  background-color rgba(35, 35, 35, 0.25)
.chooseWrap
  height 184px
  width 7.2rem /* 540/75 */
  background-color #FFFFFF
  border-radius 4px
  display flex
  flex-direction column
  justify-content space-between
  z-index inherit
  button
    border-radius 0 0 4px 4px
.chooseTitle
  font-size 17px
  height 18px
  margin-top 40px
.chooseIpt
  width 100%
  position relative
  &::before
    content attr(lalala)
    position absolute
    width 2.666667rem /* 200/75 */ /* 100/75 */
    height 20px
    color red
    top -15px
    left 2.266667rem /* 170/75 */
    text-align center
    font-size 12px
  input
    width 100%
    vertical-align middle
    height 25px
    text-align center
    font-size 14px
.slideImg
  width 9.466667rem
</style>
