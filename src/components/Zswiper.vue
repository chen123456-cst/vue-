<template>
  <div class="swiper-container">
    <div
      class="layout-header tours-no-bb classBg show-bg van-nav-bar van-nav-bar--fixed van-hairline--bottom"
      style="z-index:999;box-shadow:;opacity: .9;"
      data-v-64ad55b0
      data-v-0f7bdca4
    >
      <div class="van-ellipsis van-nav-bar__title"></div>
      <div class="van-nav-bar__right">
        <i
          class="right-wrap van-icon van-icon-undefined"
          style="color:undefined;font-size:undefined;"
          data-v-64ad55b0
        >
          <div class="big-search" data-v-64ad55b0 style="float: left;">
            <div data-v-64ad55b0>
              <div class="search-box" data-v-64ad55b0>
                <i
                  class="van-icon van-icon-search"
                  style="color:undefined;font-size:undefined;"
                  data-v-64ad55b0
                ></i>
                <input placeholder="目的地/关键词" value class="box" data-v-64ad55b0 />
              </div>
            </div>
          </div>
          <van-icon name="user-circle-o" style="float: left;margin-top:10px;" @click="changge()" />
        </i>
      </div>
    </div>

    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swiperData" :key="index">
        <img :src="item.image" alt="图片" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {};
  },
  computed: {
    swiperData() {
      return this.$store.state.swiper;
    }
  },
  methods: {
    //跳转到个人中心页面
  changge(){
    this.$router.push({
      path:'/cpeple'
    })
  }
  }
};
</script>

<style scoped>
.van-swipe-item img {
  width: 375px;
  height: 210px;
}
</style>