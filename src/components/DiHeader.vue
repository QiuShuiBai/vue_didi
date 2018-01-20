<template>
  <div class="scrollX">
      <h2>better-scroll横向滚动测试</h2>
      <div class="scrollOutside" >
          <div ref="scrollOutside">
                <ul class="scrollInside"  ref="scrollInside">
                    <li class="list" v-for="(value,index) in content" :key="index.id">
                        <img :src="value.pic" alt="">
                    </li>
                </ul>
         </div>        
      </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      content:[{
        title:'1',
        pic:require('./images/girl1.jpg')
      },
      {
        title:'2',
        pic:require('./images/girl2.jpg')
      },
      {
        title:'3',
        pic:require('./images/girl3.jpg')
      },
      {
        title:'4',
        pic:require('./images/girl4.jpg')
      },
      {
        title:'5',
        pic:require('./images/girl5.jpg')
      }
       
      ]
    };
  },
  mounted() {
    this._initScrollX();
  },
  methods: {
    _initScrollX() {
      let width = 100;
      let marginLeft = 20;
      this.$refs.scrollInside.style.width =
        (width + marginLeft) * this.content.length - marginLeft + "px";
      if (!this.listScroll) {
        this.listScroll = new BScroll(this.$refs.scrollOutside, {
          scrollX: true,
          click: true,
          eventPassthrough: "vertical"
        });
      } else {
        this.listScroll.refresh();
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.scrollX
    margin: 20px 10px
    .scrollOutside
        width: 100%
        overflow: hidden
        .scrollInside
            margin: 0
            padding: 0
            width: 100%
            &>li
                list-style: none
                display: inline-block
                margin-right: 10px
            .list img
                width: 100px
                height: auto
</style>
