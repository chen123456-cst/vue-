<template>
  <div>
    <ul class="ul">
      <li v-for="(item,index) in dz" :key="index" :class="n==index?'active':''" @click="n=index">
        <router-link :to="item.paths">{{item.name}}</router-link>
      </li>
    </ul>
    <div class="navs">
      <div class="actives" @click="Show">{{msg}}</div>

      <div>行程天数</div>
      <div>筛选</div>
    </div>
    <!-- 推荐 -->
    <div class="block" v-if="isShow">
        <div @click="Tfn($event)">推荐排序</div>
        <div @click="Tfn($event)">价格从高到底</div>
        <div @click="Tfn($event)">价格从低到高</div>
        <div @click="Tfn($event)">最受欢迎</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg:"推荐排序",
      isShow: false,
      n: 1,
      dz: [
           
            {
                name:"稀饭推荐",
                paths:"/Zrecom"
            },
            {
                name:"精品小团",
                paths:"/Ztag"
            },
             {
                name:"当地玩乐",
                paths:"/Zpack"
            },
            {
                name:"当地跟团",
                paths:"/Zell"
            },
            
            {
                name:"邮轮",
                paths:"/Zcar"
            },
        ]
    };
  },
  methods: {
      Show(){
          this.isShow=!this.isShow
      },
      Tfn(e){
           this.isShow=!this.isShow
           this.msg=e.target.innerHTML
      }
  },
  created() {
    this.n = this.$route.params.id++;
    this.n+=1;
  }
};
</script>

<style scoped>
.ul {
  width: 375px;
  height: 44px;
  display: flex;
  background: white;
  position: fixed;
  top: 44px;
  left: 0px;
}
.ul li {
  width: 75px;
  text-align: center;
  line-height: 44px;
  color: #7d7e80;
}
a {
  text-align: center;
  line-height: 44px;
  color: #7d7e80;
}
.active {
  border-bottom: 2px solid #ef9a1a;
  
}

.navs {
  width: 375px;
  height: 44px;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  background: white;
  display: flex;
  justify-content: space-around;
  line-height: 44px;
  margin-top: 88px;
}
.navs div {
  color: #7d7e80;
}
.navs div .actives {
  color: #ef9a1a;
  position: relative;
}
.actives{
    color: #ef9a1a;
}

/* 推荐 */
.block{
    position: absolute;
    top: 88px;
    left: 0px;
    background: white;
    width: 375px;
}
.block div{
    width: 375px;
    padding: 10px 15px;
    border-top: 1px solid #e4e4e4;
    color: #323233;
}
</style>