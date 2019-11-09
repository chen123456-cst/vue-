<template>
  <div class="cnav">
    <van-nav-bar
      left-text="返回"
      right-text='注册'
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
    // 返回登录页面
      this.$router.push({
          path:"/login"
      })
    },
    // 跳到注册页面
    onClickRight() {
      this.$router.push({
          path:'/register'
      })
    }
  }
};
</script>

<style>
</style>