<template>
  <div class="wrap">
    <di-loading v-if="isLoading"></di-loading>
    <cube-slide ref="slide" :data="items">
      <!-- @change="changePage" -->
      <cube-slide-item v-for="(item, index) in items" :key="index">
         <!-- @click.native="clickHandler(item, index)" -->
        <a :href="item.url">
          <img @load="imageLoaded" :src="item.image" class="slideImg">
        </a>
      </cube-slide-item>
      <template slot="dots" slot-scope="props">
        <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index">{{index + 1}}</span>
      </template>
    </cube-slide>
    <div class="page__bd-sellSer">
      <div class="sellSer-title center">
        <div class="left-desc">
          卖车服务
        </div>
        <div class="right-desc">
          <span class="person-num">493129</span> 位车主已成功卖车
        </div>
      </div>
      <div class="sellSer-remind">
        高价卖车，最高<span>多卖20%</span>
      </div>
      <div class="sellSer-ipt center">
        <input type="tel" placeholder="请输入手机号，帮您卖高价" />
      </div>
      <div class="page__bd-sellCar">
        <cube-button :primary="true">我想卖车</cube-button>
      </div>
      <div class="two-item">
        <div class="guide-two-item" v-for="(item, index) in twoItem" :key="index">
          <div class="main-desc">{{item.title}}</div>
          <div class="sub-desc">{{item.remark}}</div>
        </div>
      </div>
    </div>

    <div class="page__bd-sellSer">
      <div class="sellSer-title center">
        <div class="left-desc left-desc-change">
          买车服务
        </div>
      </div>
      <div class="sellSer-item">
        <ul>
          <li v-for="(item, index) in carItem" :key="index" class="carItem">{{item}}</li>
        </ul>
        <div class="page__bd-sellCar btn-change">
          <cube-button :outline="true" :primary="true">在线选车</cube-button>
        </div>
      </div>
    </div>
    <div class="cc-phone">免费咨询专家：400-022-5387</div>
  </div>
</template>

<script>
import DiLoading from "../DiLoading"
export default {
  name: "borCar",
  components: {
    DiLoading
  },
  data() {
    return {
      imageNum: 0,
      isLoading: true,
      carItem: [
        "省油代步", "急售降价", "捡便宜", "准新车", "5万以下", "5-10万",
        "10-15万", "15万以上", "大众", "五菱汽车", "别克", "雪拂兰"
      ],
      twoItem: [
        {
          title: "免费估值",
          remark: "买卖先估价，更靠谱"
        },
        {
          title: "查历史成交",
          remark: "1秒查真实成交价"
        }
      ],
      items: [
        {
          url: "https://guzhi.renrenche.com/index.html",
          image: "https://img1.rrcimg.com/dist/webapp/images/didi/banner/guzhi-banner-ff1addc4.png"
        },
        {
          url: "https://m.renrenche.com/dd/passenger/baomai",
          image: "https://img2.rrcimg.com/dist/webapp/images/didi/banner/bianzhi-banner-84d1b317.png"
        }
      ]
    }
  },
  methods: {
    imageLoaded() {
      this.imageNum = this.imageNum + 1
      if(this.imageNum === 2) {
        this.$refs.slide.refresh()
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  margin 0 auto
  margin-top 64px
  width 9.466667rem /* 710/75 */
.cube-slide
  overflow: hidden
.slideImg
  width 9.466667rem
.my-dot
  width 6px
  height 6px
  border-radius 50%
  position relative
  top -2px
  margin 0 2px
.page__bd-sellSer
  width 100%
  margin-top 10px
  background-color #fff
  border 1px solid #EBEBEB
  border-radius 2px
.sellSer-title
  width 100%
  height 42px
  box-sizing border-box
  border-bottom 1px solid #EBEBEB
  font-size 12px
  justify-content space-between
.left-desc
  font-size 14px
  width 140px
  text-align center
  color #333333
  position relative
  &::before
    content "￥"
    position absolute
    width 15px
    height 15px
    line-height 16px
    text-align center
    font-size 12px
    color #FFFFFF
    background-color #4A4C5B
    border-radius 50%
    left 18px
.left-desc-change
  &::before
    content "buy"
    font-size 8px
.right-desc
  font-size 12px
  width 150px
  color #999999
  span
    color #FC9153
.sellSer-remind
  width 100%
  height 62px
  text-align center
  font-size: 16px
  line-height 72px
  font-weight: 700
  color #666666
  span
    color #FC9153
.sellSer-ipt
  width 8.933333rem /* 670/75 */
  margin 0 auto
  height 50px
  border 1px solid #EBEBEB
  box-sizing border-box
  border-radius 2px
  input
    width 8.933333rem /* 670/75 */
    height 48px
    font-size 13px
    padding-left 20px
.page__bd-sellCar
  width 8.933333rem /* 670/75 */
  margin 0 auto
  margin-top 10px
  padding-bottom 10px
.btn-change
  padding 0
.two-item
  width 8.933333rem /* 670/75 */
  display flex
  margin 0 auto
  justify-content space-between
  margin-bottom 10px
.guide-two-item
  height 44px
  width 4.266667rem /* 320/75 */
  background: rgba(252,145,83,.04)
  box-sizing border-box
  border: 1px solid rgba(252,145,83,.4)
  border-radius: 4px
  display flex
  align-items center
  flex-direction column
  justify-content space-around
.main-desc
  font-size 13px
  color #333333
.sub-desc
  font-size 12px
  color #999999
.sellSer-item
  width 100%
  box-sizing border-box
  padding 10px
  ul
    list-style none
    display flex
    flex-wrap wrap
.carItem
  width 25%
  text-align: center
  font-size: 14px
  height 50px
  line-height 50px
  color: #333
.cc-phone
  background-color transparent
  text-align: center
  font-size: 12px
  color: #999
  padding: 10px 0 20px
</style>
