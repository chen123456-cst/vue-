<template>
  <div class="address">
    <van-nav-bar title="添加地址" left-arrow @click-left="onClickLeft" />
    <div v-if="newshow">
      <van-card
        v-for="(item,index) in address"
        :key="index"
        :title="'电话:'+item.userpwd"
        :desc="'姓名:'+item.username"
      >
        <div slot="tags">
          <span>邮箱:{{item.useremail}}</span>
          <span>地址:{{item.loc[0].text}}{{item.loc[1].text}}{{item.loc[2].text}} 详细地址：{{item.useraddress}}</span>
        </div>
        <div slot="footer">
          <van-button size="mini" @click="del(index)">删除</van-button>
          <van-button size="mini" @click="onAdd(index)">修改</van-button>
        </div>
      </van-card>
    </div>
    <popaddress v-if="isshow" :newnum="num" @con="ishow()"></popaddress>
    <van-button type="info" size="large" v-if="show" @click="onAdd(-1)">新增地址</van-button>
  </div>
</template>

<script>
import popaddress from "../components/popaddres";
import Vue from "vue";
import { AddressEdit } from "vant";
Vue.use(AddressEdit);

export default {
  components: {
    popaddress
  },
  data() {
    return {
      show: true,
      isshow: false,
      num: 0,
      newshow: true
    };
  },
  computed: {
    address() {
      return this.$store.state.address;
    }
  },
  methods: {
    //   返回个人中心
    onClickLeft() {
      this.$router.push({
        path: "/cpeple"
      });
    },
    onAdd(i) {
      this.num = i;
      this.isshow = true;
      this.show = false;
      this.newshow = false;
      if (this.num !== -1) {
        this.$store.commit("idx", this.num);
      }
    },
    ishow() {
      this.isshow = false;
      this.show = true;
      this.newshow = true;
    },
    // 删除地址数据
    del(i) {
      this.address.splice(i, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-button :nth-of-type(3) {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>