<template>
  <div class="cart">
    <!-- 购物车页面 -->
    <van-nav-bar title="结算页面" left-arrow @click-left="onClickLeft" />
    <van-card
      :num="item.num"
      :price="item.default_price"
      :desc="item.name"
      :title="item.departure_city"
      :thumb="item.image"
      v-for="(item,index) in ccartdata"
      :key="index"
    >
      <div slot="footer">
        <van-button size="mini">支付</van-button>
        <van-button size="mini" @click="del(index)">删除</van-button>
      </div>
    </van-card>
    <van-submit-bar :price="allshop*10" button-text="结算" @submit="onSubmit"></van-submit-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { SubmitBar } from "vant";
import { RadioGroup, Radio } from "vant";
Vue.use(SubmitBar);
Vue.use(Radio);
export default {
  // 获取进入购物车的数据
  data() {
    return {
      checked: false
    };
  },
  // 获取购物车商品和计算后的数据
  computed: {
    ccartdata() {
      return this.$store.state.ccartdate;
    },
    allshop() {
      return this.$store.getters.allshop.allnum;
    }
  },

  methods: {
    onClickLeft() {
      // 返回上一个页面
      this.$router.push({
        name: "caddroom"
      });
    },
    // 支付结算
    onSubmit() {
      this.$router.push({
        path: "/"
      });
    },
    //购物车删除所选的
    del(i) {
      // 删除购物车所选的
      this.$store.commit("cartdel", i);
    }
  }
};
</script>

<style>
</style>