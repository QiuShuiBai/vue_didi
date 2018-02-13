<template>
  <div class="page__bd">
    <di-time>
      <slot>“ 最快两分钟接驾 ”</slot>
    </di-time>

    <di-where>
      <p slot="nowWhere">{{where.nowWhere.poiname}}</p>
      <p slot="goWhere">{{where.goWhere.poiname}}</p>
    </di-where>

    <div class="page__bd-fastChoose center">
      <div class="page__bd-fastGo center">
        <div class="fastGoIcon"></div>
        <p class="fastGoText">现在出发</p>
      </div>
      <div class="page__bd-fastChange center">
        <!-- <input type="tel" /> -->
        <div class="fastChangeIcon"></div>
        <p class="fastChangeText">换乘车人</p>
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
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import DiTime from "../DiTime.vue"
import DiWhere from "../DiWhere.vue"
import DiChoose from "../DiChoose.vue"
import DiMoney from "../DiMoney.vue"
export default {
  name: "fastCar",
  computed: {
    ...mapGetters([
      "where"
    ])
  },
  mounted() {
    this.$store.commit("getNowWhere")
  },
  components: {
    DiTime,
    DiWhere,
    DiChoose,
    DiMoney
  },
  data() {
    return {
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
</style>
