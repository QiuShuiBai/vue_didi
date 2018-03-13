<template>
  <div class="page__bd">
    <di-time></di-time>

    <di-where></di-where>

    <div class="page__bd-fastChoose center">
      <div>
        <di-choose-time></di-choose-time>
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
          <img @load="imageLoaded" :src="item.image" class="slideImg">
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
import {mapGetters} from "vuex"
import DiTime from "../DiTime.vue"
import DiWhere from "../DiWhere.vue"
import DiChoose from "../DiChoose.vue"
import DiMoney from "../DiMoney.vue"
import DiChooseTime from "../DiChooseTime"
export default {
  name: "fastCar",
  computed: {
    ...mapGetters([
      "where",
      "time"
    ])
  },
  components: {
    DiTime,
    DiWhere,
    DiChoose,
    DiMoney,
    DiChooseTime
  },
  data() {
    return {
      ifChoosePer: false,
      iptDisabled: true,
      changePer: "换乘车人",
      tureText: "",
      tleNum: "",
      imageNum: 0,
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
    },
    imageLoaded() {
      this.imageNum = this.imageNum + 1
      if(this.imageNum === 3) {
        this.$refs.slide.refresh()
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.page__bd-fastChoose
  border-bottom 1px solid #EBEBEB
.page__bd-fastChange
  width 4.733333rem /* 355/75 */
  height 46px
  box-sizing border-box
.page__bd-fastChange
  border-left 2px solid #FAFAFA
.fastChangeIcon
  width 12px
  height 12px
  position relative
  margin-right 0.186667rem /* 14/75 */
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
.fastChangeText
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
