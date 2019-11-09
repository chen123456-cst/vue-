<template>
  <div id="loginres">
    <loginnav></loginnav>
    <div class="form">
      <div class="formbox">蜗牛旅行账号注册</div>
      <van-cell-group name="use">
        <van-field v-model="user.username" placeholder="请输入用户名" />
        <van-field v-model="user.userpwd" placeholder="请输入用户密码" />
        <van-button type="primary" size="large" @click="zcreg()">注册</van-button>
      </van-cell-group>
      <div class="form_footer">我已阅读并同意服务协议</div>
    </div>
    <van-dialog v-model="show" :title="title" show-cancel-button @confirm="isshow()"></van-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";
Vue.use(Field);
import loginnav from "./loginnav";
import { Dialog } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      user: {
        username: "",
        userpwd: ""
      },
      show: false,
      title: ''    
      };
  },
  components: {
    loginnav
  },
  methods: {
    // 注册向后端发起请求
    zcreg() {
      let data = `username=${this.user.username}&userpwd=${this.user.userpwd}`;
      this.$axios
        .get("http://localhost:3000/users/register?" + data)
        .then(res => {
          let msg = res.data.msg;
          if (msg == "注册成功") {
            this.title="用户注册成功"
            this.show = true;
          } else {
            this.title = "用户已经存在";
            this.show = true;
          }
        });
    },
    isshow() {
      this.show = false;
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script> 
<style lang="scss" scoped>
.form {
  width: 100%;
  margin-top: 2rem;
  .formbox {
    width: 100%;
    text-align: center;
    line-height: 2.142857rem;
    color: #333;
    font-weight: 500;
    font-size: .857143rem;
  }
  .van-cell-group {
    width: 80%;
    margin-left: 10%;
  }
  .van-field {
    border: 1px solid #ccc;
    border-radius: 1.428571rem;
  }
  .van-field:nth-of-type(2) {
    margin-top: 20px;
  }
  .van-button {
    margin-top: 10px;
    background: #00abf9;
    border-color: #00abf9;
    border-radius: 0.714286rem;
  }
  .form_footer {
    text-align: center;
    // font-size: 0.714286rem;
    margin-top: 0.714286rem;
    color: #00abf9;
  }
}
</style>