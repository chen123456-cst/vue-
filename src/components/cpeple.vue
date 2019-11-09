<template>
  <!-- 个人中心 -->
  <div id="cpeple">
    <div class="cnav">
      <!-- 设置按钮跳转事件 -->
      <van-nav-bar title="个人中心" left-text="返回" @click-left="onClickLeft" />
      <div class="header">
        <div class="imgbox">
          <img src="../assets/img/uugai.com_1573090557571.png" alt="图片" />
        </div>
        <!-- 跳转登录页面 -->
        <router-link to="/login" class="log" v-if="user==''">登录/</router-link>
        <router-link to="/register" class="reg" v-if="user==''">注册</router-link>
        <span style="padding-top:50px">{{user}}</span>
        <van-button type="info" size="small" @click="exit()" v-if="user!=''">退出登录</van-button>
      </div>
      <van-row>
        <van-col span="7" offset="5" @click="address()">我的地址</van-col>
        <van-col span="7" offset="3">查看优惠卷</van-col>
      </van-row>
    </div>
    <div class="center">
      <div class="centerbox">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <van-icon :name="item.img" size="25px" :color="item.color" />
            <router-link to="/corder">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 我的工具 -->
    <div class="mytool">我的工具</div>
    <div class="center">
      <div class="centerbox">
        <ul>
          <li>
            <van-icon name="gold-coin-o" size="25px" color="#ff6700" />
            <a>切换货币</a>
          </li>
          <li>
            <van-icon name="ecard-pay" size="25px" color="#ff6700" />
            <a>兑换优惠码</a>
          </li>
          <li>
            <van-icon name="bag-o" size="25px" color="#ff6700" />
            <a>我的收藏</a>
          </li>
          <li>
            <van-icon name="user-o" size="25px" color="red" />
            <a>常用旅客</a>
          </li>
          <li>
            <van-icon name="flower-o" size="25px" color="red" />
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="home()">首页</van-tabbar-item>
      <van-tabbar-item icon="location-o" @click="listclick()">目的地</van-tabbar-item>
      <van-tabbar-item icon="chat-o">在线咨询</van-tabbar-item>
      <van-tabbar-item icon="friends-o ">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
import { Button } from "vant";
Vue.use(Button);
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      list: [
        { img: "bookmark-o", title: "我的订单", color: "#00abf9" },
        { img: "bookmark-o", title: "待支付", color: "#00abf9" },
        { img: "bag-o", title: "待出行", color: "#ff6700" },
        { img: "flower-o", title: "已出行", color: "red" }
      ],
      // 控制底部点击激活
      active: 3,
      // 用户名
      user: ""
    };
  },
  created() {
    //本地获取用户名
    this.user = window.localStorage.getItem("user");
    //判断token的状态
    let token = window.localStorage.getItem("token");
    if (!token) {
      this.user = "";
    }
  },
  methods: {
    exit() {
      // 清空token
      window.localStorage.clear("token");
      this.$router.push({
        path: "/"
      });
    },
    // 跳转首页
    home() {
      this.$router.push({
        path: "/"
      });
    },
    // 跳转到分栏页
    listclick() {
      this.$router.push({
        path: "/listnav"
      });
    },
    onClickLeft() {
      this.$router.push({
        path: "/"
      });
    },
    address() {
      console.log(1);
      this.$router.push({
        path: "/caddress"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// 退出登录按钮
#cpeple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #eee;
}
.van-button:nth-of-type(1) {
  margin-left: 1.571429rem;
  margin-top: 2rem;
}

.cnav {
  width: 100%;
  padding: 0, 0.293333rem;
}
.van-icon:nth-of-type(1) {
  float: right;
  margin-right: 1rem;
  margin-top: 1rem;
}
.van-icon:nth-of-type(2) {
  float: left;
  margin-left: 1rem;
  margin-top: 1rem;
}
.header {
  width: 100%;
  display: flex;
}
/* logo图片 */
.imgbox {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  margin-top: 0.714286rem;
}
.imgbox img {
  width: 100%;
  height: 100%;
}
.reg,
.log {
  // width: 3.571429rem;
  display: inline-block;
  margin-top: 0.357143rem;
  line-height: 2.857143rem;
  padding-top: 1.428571rem;
  margin-left: 0.714286rem;
  text-align: center;
}
.reg {
  margin-left: 0;
}

.van-col {
  color: #00abf9;
}
.center {
  width: 100%;
  margin-top: 0.3rem;
}

.centerbox {
  width: 90%;
  margin-left: 5%;
  background: #fff;
  border-radius: 1.071429rem;
  display: flex;
  // height: 5.714286rem;
}
.centerbox ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 2.142857rem;
    width: 25%;
    .van-icon {
      margin-right: 0;
      color: #00abf9;
    }
    a {
      color: #ccc;
    }
  }
}
// 我的工具
.mytool {
  width: 80%;
  margin-left: 10%;
  line-height: 2rem;
  margin-top: 0.5;
  font-weight: bold;
  padding-left: 0.357143rem;
}
</style>