<template>
  <div class="corder">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />
    <van-tabs animated>
      <van-tab v-for="index in list" :key="index" :title="index">
        <!-- 购买的商品信息 -->
        <van-card
          v-for="(item,index) in  ccartdata"
          :key="index"
          :num="item.num"
          :price="item.ollpric/10"
          :desc="item.name"
          :title="item.departure_city"
          :thumb="item.image"
        >
          <div slot="footer">
            <van-button size="mini" @click="del(index)">删除</van-button>
            <van-button size="mini">去结算</van-button>
          </div>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["全部订单", "待付款", "带出行", "待评价"],
      ccartdata:[],
    };
  },
  // 获取购物车里的数据生成我的订单
  created() {
    let storage = window.localStorage.getItem("list1");
    let date = storage == "null" ? [] : JSON.parse(storage);
    this.ccartdata = date;
  },
  methods: {
    onClickLeft() {
      // 返回个人中心页面
      this.$router.push({
        name: "cpeple"
      });
    },
    // 删除购物车的数据
    del(i) {
      this.cartdate.splice(i, 1);
    }
  }
};
</script>

<style>
</style>