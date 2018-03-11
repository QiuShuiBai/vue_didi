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

    <cube-slide ref="slide" :data="items">
      <!-- @change="changePage" -->
      <cube-slide-item v-for="(item, index) in items" :key="index">
         <!-- @click.native="clickHandler(item, index)" -->
        <a :href="item.url">
          <img :src="item.image" class="slideImg">
        </a>
      </cube-slide-item>
    </cube-slide>

    <div class="page__ft">
      <div class="page__ft-operation center" v-for="(item, index) in desData" :key="index">
        <div class="operation-icon" :class="item.class"></div>
        <div class="operation-text">{{item.text}}</div>
        <div class="operation-remark">{{item.remark}}</div>
      </div>
    </div>

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
      iconText: ["呼叫多位司机", "邀请好友", "我的会员"],
      items: [
        {
          url: "https://page.xiaojukeji.com/market/ddPage_0aCF7rWT.html?resFrom=privilegeIntro&didichn=webbanner&abkey=djWebappBanner.0.0&lat=28.682892&lng=115.858198&maptype=soso&datatype=webapp&daijia_token=DCZ6kmoRDKq09tkHxbqczsXLG30JxPIFXSrtru45aRNUzTkOwjAQhtGroK-ewmNmbOu_DUtYCoSERRXl7hRUqV_xVk4IjDOqI1pGtOp9tDgaV-TGgtYD8zWRZy1RovUw5vv7uSwoN-O2pzvC03vxHL0mxuOfPFHZfgEAAP__&daijia_pid=239621543&channel=&cityid=38",
          image: "https://pt-starimg.didistatic.com/static/starimg/img/1520481621717aSmsw0k8tOPPl1Fgu5F.jpg?abkey=djWebappBanner.0.0"
        },
        {
          url: "https://page.xiaojukeji.com/market/newfriv13.html?didichn=webbanner&abkey=djWebappBanner.0.0&lat=28.682892&lng=115.858198&maptype=soso&datatype=webapp&daijia_token=DCZ6kmoRDKq09tkHxbqczsXLG30JxPIFXSrtru45aRNUzTkOwjAQhtGroK-ewmNmbOu_DUtYCoSERRXl7hRUqV_xVk4IjDOqI1pGtOp9tDgaV-TGgtYD8zWRZy1RovUw5vv7uSwoN-O2pzvC03vxHL0mxuOfPFHZfgEAAP__&daijia_pid=239621543&channel=&cityid=38",
          image: "https://pt-starimg.didistatic.com/static/starimg/img/1520242742906AnSS8W4j0xhVxZJGBcQ.jpg?abkey=djWebappBanner.0.0"
        },
        {
          url: "https://page.kuaidadi.com/m/ctcv2.html?didichn=ctcv2_webbannernew&abkey=djWebappBanner.0.0&lat=28.682892&lng=115.858198&maptype=soso&datatype=webapp&daijia_token=DCZ6kmoRDKq09tkHxbqczsXLG30JxPIFXSrtru45aRNUzTkOwjAQhtGroK-ewmNmbOu_DUtYCoSERRXl7hRUqV_xVk4IjDOqI1pGtOp9tDgaV-TGgtYD8zWRZy1RovUw5vv7uSwoN-O2pzvC03vxHL0mxuOfPFHZfgEAAP__&daijia_pid=239621543&channel=&cityid=38",
          image: "https://pt-starimg.didistatic.com/static/starimg/img/1519624494510LkqsZPc6IMtC9cS0KJA.jpg?abkey=djWebappBanner.0.0"
        }
      ],
      desData: [
        {
          class: "newUser",
          text: "新用户专项",
          remark: "100元见面礼"
        },
        {
          class: "carerSer",
          text: "车主服务中心",
          remark: "领会员试用"
        }
      ]
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
.cube-slide
  overflow: hidden;
  border-top 10px solid #F3F4F5
.slideImg
  width 9.466667rem
.page__ft
  border-top 3px solid #EBEBEB
  width 100%
  height 100px
  display flex
  align-items center
  flex-direction column
.page__ft-operation
  width 8.8rem /* 660/75 */
  height 50px
  box-sizing border-box
  &:first-child
    border-bottom 1px solid #EBEBEB
.operation-icon
  width 16px
  height 12px
  margin 0 10px
.newUser
  background-color #EBEBEB
  border-radius 1px 1px 4px 4px
  position relative
  &::before
    content "￥"
    position absolute
    width 16px
    height 12px
    text-align center
    line-height 12px
    font-size 10px
    color #FFFFFF
  &::after
    content ""
    position absolute
    width 4px
    height 4px
    border-radius 50%
    background-color #ffffff
    top 4px
    left -2px
    box-shadow #FFFFFF 16px 0
.carerSer
  height 5px
  width 16px
  background linear-gradient(150deg, transparent 2px, #EBEBEB 2px)
  position relative
  &::before
    content ""
    position absolute
    width 6px
    border-bottom 3px solid #EBEBEB
    border-left 1px solid transparent
    border-right 2px solid transparent
    top -2px
    left 5px
  &::after
    content ""
    position absolute
    width 3px
    height 3px
    background-color #EBEBEB
    border-radius 50%
    top 4px
    left 3px
    box-shadow 0 0 0 1px white,
      7px 0 0 0 #EBEBEB,
      7px 0 0 1px white
.operation-text
  font-size 13px
  color #666666
  width 6.3rem
.operation-remark
  font-size 9px
  color #A7A7A7
  width 2rem
  position relative
  &::after
    content ""
    position absolute
    width 6px
    height 6px
    border-top 1px solid #858E98
    border-right 1px solid #858E98
    transform rotate(45deg)
    top 1px
    right 15px
</style>
