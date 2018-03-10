<template>
  <div class="page__bd">
    <di-time></di-time>
    <di-where></di-where>

    <div class="page__bd-fastChange center" @click="choosePer">
          <!-- <input type="tel" /> -->
      <div class="fastChangeIcon"></div>
      <p class="fastChangeText">{{changePer}}</p>
    </div>
    <di-money></di-money>

    <di-choose :iconShow="iconShow" :iconText="iconText">
      <p slot="button">呼叫快车</p>
    </di-choose>

    <div v-if="ifChoosePer" class="choosePer center"  @click.self="choosePer">
      <div class="chooseWrap">
        <div class="chooseTitle center">
          请输入代叫车主联系电话
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
import DiWhere from "../DiWhere"
import DiMoney from "../DiMoney"
import DiTime from "../DiTime"
import DiChoose from "../DiChoose"
export default {
  name: "desDri",
  components: {
    DiMoney,
    DiWhere,
    DiTime,
    DiChoose
  },
  data() {
    return {
      ifChoosePer: false,
      iptDisabled: true,
      tureText: "",
      changePer: "换联系人代叫",
      tleNum: "",
      iconShow: ["carer", "callFri", "myVip"],
      iconText: ["呼叫多位司机", "邀请好友", "我的会员"]
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.page__bd-fastChange
  width 100%
  height 46px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
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
</style>
