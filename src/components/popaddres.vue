 <template>
  <div class="addaddress">
    <van-cell-group>
      <van-field v-model="user.username" placeholder="请输入姓名" label="姓名" required />
      <van-field v-model="user.userpwd" placeholder="请输入电话" label="电话" required />
      <select v-model="lv1">
        <option :value="-1">请选择省市</option>
        <option :value="index" v-for="(item,index) in cityloc" :key="index">{{item.Name}}</option>
      </select>
      <select v-model="lv2">
        <option :value="-1">请选择市</option>
        <option :value="index" v-for="(item,index) in loc2" :key="index">{{item.Name}}</option>
      </select>
      <select v-model="lv3">
        <option :value="-1">请选择区/县</option>
        <option :value="index" v-for="(item,index) in loc3" :key="index">{{item.Name}}</option>
      </select>
      <van-field v-model="user.useraddress" placeholder="请输入详细地址" label="详细地址" />
      <van-field v-model="user.useremail" placeholder="请输入邮政地址" label="邮政编码" required />
    </van-cell-group>
    <van-button type="primary" size="large" @click="res()">保存</van-button>
    <van-button size="large" @click="reslt()">返回</van-button>
    <van-dialog v-model="showadd" title="保存成功" show-cancel-button></van-dialog>
  </div>
</template>
 
 <script>
import city from "../assets/js/city";
export default {
  props: {
    // 判断更新还是删除
    newnum: 0
  },
  data() {
    return {
      list: [],
      lv1: -1,
      lv2: -1,
      lv3: -1,
      list: [],
      showadd: false,
      user: {
        username: "",
        userpwd: "",
        useraddress: "",
        useremail: "",
        loc: [
          {
            text: "",
            num: -1
          },
          {
            text: "",
            num: -1
          },
          {
            text: "",
            num: -1
          }
        ]
      },
      cityloc: []
    };
  },
  created() {
    this.cityloc = city;
    if (this.newnum !== -1) {
      this.user = JSON.parse(JSON.stringify(this.address[this.newnum]));
      console.log(this.user);
      this.lv1 = this.address[this.newnum].loc[0].num;
      this.lv2 = this.address[this.newnum].loc[1].num;
      this.lv3 = this.address[this.newnum].loc[2].num;
      this.user.loc[0].text = this.address[this.newnum].loc[0].text;
      this.user.loc[1].text = this.address[this.newnum].loc[1].text;
      this.user.loc[2].text = this.address[this.newnum].loc[2].text;
    }
  },
  updated() {
    this.user.loc[0].text = this.city;
    this.user.loc[0].num = this.lv1;
    this.user.loc[1].text = this.city1;
    this.user.loc[1].num = this.lv2;
    this.user.loc[2].text = this.city2;
    this.user.loc[2].num = this.lv3;
    // console.log(this.cityloc[this.lv1].Name);
  },
  computed: {
    address() {
      return this.$store.state.address;
    },
    loc2() {
      return this.lv1 === -1 ? [] : this.cityloc[this.lv1].City;
    },
    loc3() {
      return this.lv2 === -1 ? [] : this.loc2[this.lv2].Region;
    },
    city() {
      return this.lv1 === -1 ? [] : this.cityloc[this.lv1].Name;
    },
    city1() {
      return this.lv2 === -1 ? [] : this.loc2[this.lv2].Name;
    },
    city2() {
      return this.lv3 === -1 ? "市辖区" : this.loc3[this.lv3].Name;
    }
  },
  watch: {
    lv1() {
      this.lv2 = this.lv3 = -1;
    },
    lv2() {
      this.lv3 = -1;
    }
  },
  methods: {
    // 保存
    res() {
      this.showadd = true;
      this.$emit("con");
      if (this.newnum === -1) {
        this.$store.commit("address", this.user);
      } else {
        this.$store.commit("editaddress", this.user);
      }
    },
    reslt() {
      // 返回页面
      this.$emit("con");
      console.log(1);
    }
  }
};
</script>
 
 <style scoped>
select {
  /* overflow: hidden; */
  width: 100%;
  float: left;
  line-height: 0.714286rem;
  border: 1px solid #ccc;
  background: #fff;
  /* 去掉select自带的样式 */
  appearance: none;
  background-size: 10% 30%;
}
.van-button {
  margin-top: 1.428571rem;
}
.van-button:nth-of-type(2) {
  margin-top: 0;
}
</style>