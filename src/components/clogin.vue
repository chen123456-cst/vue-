<template>
  <div id="loginres">
    <loginnav></loginnav>
    <div class="form">
      <div class="formbox">蜗牛旅行账号登录</div>
      <van-cell-group name="use">
        <van-field v-model="user.username" placeholder="请输入用户名"  />
        <van-field v-model="user.userpwd" placeholder="请输入用户密码" type="password" />
        <van-button type="primary" size="large" @click="lgreg()">登录</van-button>
      </van-cell-group>
      <div class="form_footer">
        登录及代表你同意我们的
        <span>服务请求</span>
      </div>
    </div>
    <van-dialog v-model="show" title="用户未注册" show-cancel-button @confirm="isshow()"></van-dialog>
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
      show: false
    };
  },
  components: {
    loginnav
  },
  methods: {
    //  像后端发起登录请求
    lgreg() {
      let data = `username=${this.user.username}&userpwd=${this.user.userpwd}`;
      this.$axios.get("http://localhost:3000/users/login?" + data).then(res => {
        // 后端下发token;
        window.localStorage.setItem("token", res.data.token);
        let msg = res.data.msg;
        if (msg == "登录成功") {
          this.$router.push({
            name: "cpeple",
          });
          //本地缓存保存用户名
          window.localStorage.setItem('user',this.user.username);
        } else{
          this.show = true;
          this.user.username = "";
          this.user.userpwd = "";
        }
        msg = "";
      });
    },
    isshow() {
      this.show = false;
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script> 
<style lang="scss" scoped>
.form {
  width: 100%;
  margin-top:2rem;
  .formbox {
    width: 100%;
    text-align: center;
    line-height: 2.142857rem;
    color: #333;
    font-weight: 500;
    font-size:.857143rem;
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
    color: #ccc;
    > span {
      color: #00abf9;
    }
  }
}
</style>