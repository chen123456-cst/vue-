<template>
  <div class="cadd">
    <!-- 添加页面房间 -->
    <van-nav-bar title="选择出行日期" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-datetime-picker v-model="currentDate" type="date" @confirm="rquire()" />
    <van-divider content-position="left">{{data}}年{{mouth}}月{{day}}日</van-divider>
    <!-- 提交订单 -->
    <van-submit-bar :price="priceall*10" button-text="去结算" @submit="addcart()" />
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);
import { DatetimePicker } from "vant";
Vue.use(DatetimePicker);
import { SubmitBar } from "vant";
Vue.use(SubmitBar);
export default {
  data() {
    return {
      currentDate: new Date(),
      data: "",
      mouth: "",
      day: "",
      mony: 388,
      //房间数量循环
      list1: 1,
      obj: {}
      // pricem: 0
    };
  },
  created() {
    this.obj = this.$store.state.DetailData;
    this.ollpric = this.obj.default_price;
  },
  // 计算价格
  computed: {
    pricem() {
      return this.obj.default_price;
    },
    priceall() {
      let allprice = parseInt(this.ollpric) * 10;
      return allprice;
    }
    // DetailData(){
    //   return this.obj=this.$store.state.DetailData;
    // }
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/detail"
      });
    },
    onClickRight() {
      Toast("按钮");
    },
    // 获取事件
    rquire() {
      this.data = this.currentDate.getFullYear();
      this.mouth = this.currentDate.getMonth() + 1;
      this.day = this.currentDate.getDate();
    },
    //添加房间
    add() {
      this.list1++;
    },
    //删除房间
    del() {
      if (this.list1 > 1) {
        this.list1--;
      }
    },
    // 添加到购物
    addcart() {
      //跳转到结算界面
      (this.obj.ollpric = this.priceall),
        this.$router.push({
          name: "ccart"
        });
      this.$store.commit("addcart", this.obj);
    }
  }
};
</script>

<style  lang="scss" scoped>
.van-nav-bar {
  box-shadow: 5px 5px 5px #ccc;
}
.van-datetime-picker {
  color: #333;
}
.van-button:nth-of-type(2) {
  width: 80%;
  margin-left: 10%;
}
</style>