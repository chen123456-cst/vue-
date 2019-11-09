<template>
<div>
  <div class="box">
     
      <div class="item" v-for="(item,index) in homelist" :key="index">
          <router-link :to="'/Znav/'+index++">
                <img :src="item.image">
           </router-link>
          <p>{{item.title}}</p>
      </div>
      
  </div>

  <!-- 热门目的地 -->
    
    <div class="hot">
        <div class="hot-one">
            <p>热门目的地</p>
            <router-link to="/search" tag="p">查看全部</router-link>
            <!-- <p>查看全部 ></p> -->
        </div>
        <div class="hot-two">
            <div class="hot-twos">
            <div v-for="(item,index) in fontdata" in :key="index">
                <router-link to="/Zrecom">
                <img :src="item.imgUrl" alt="">
                </router-link>
                <p>{{item.name}}</p>
            </div>
            
            </div>
        </div>
    </div>

    <!-- 精选商品 -->
    <Zhandpick></Zhandpick>
</div>
</template>

<script>
import Zhandpick from '@/components/Zhandpick.vue'
export default {
    data() {
        return {
            fontdata:[
                {
                    imgUrl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/_KMHLpS45kgRFhmMU1rXPgvcfE4.jpg',
                    name:'美国西部'
                },
                {
                    imgUrl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/no4AHPnG1fzDnbgZomxg2ysobVM.jpg',
                    name:'美国东部'
                },
                {
                    imgUrl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/DxI9s0Q5_0r_BYNrdbk6Zf-OvuI.jpg',
                    name:'加拿大'
                },
                {
                    imgUrl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/0Vjxz9AvguP1E-z0A6F9SWBjB1Q.jpg',
                    name:'夏威夷'
                },
                 {
                    imgUrl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/FBbOVlJMwOTv--dojEsDb9mN_gE.jpg',
                    name:'日本'
                },
                {
                    imgUrl:'http://assets.tourscool.com/uploads/inn/2019/08/22/952/9hCjSHS0cmEFm--EonL_NPUGqdQ.jpg',
                    name:'欧洲'
                },
                {
                    imgUrl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/754h0Rfh3ECsZs16BDrV131OBy4.jpg',
                    name:'澳大利亚'
                },
                {
                    imgUrl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/BgR1vC7Ob9bCz__wCw7OFrCkrpM.jpg',
                    name:'新西兰'
                },
            ],

        }
    },
    computed: {
        homelist(){
            return this.$store.state.homelist
        }
    },
    components:{
        Zhandpick
    }
}
</script>

<style scoped>
body{
    background: rgb(236, 236, 236);
}
.box{
    width: 375px;
    height: 114px;
    padding-top:26px; 
    padding-bottom: 12px;
    display: flex;
    background: white;
}
.item{
    width: 25%;
    text-align: center;
}
.item img{
    width: 44px;
    height: 44px;
}
.item p{
    font-size: 12px;
}

/* 热门目的地 */
.hot{
    width: 375px;
    height: 272px;
    padding: 6px 12px 6px 12px;
    float: left;
    background: white;
}
.hot-one{
    width: 344px;
    height: 46px;
    padding-bottom: 20px;
    float: left;
}
.hot-one p:nth-of-type(1){
    font-size: 20px;
    float: left;
}
.hot-one p:nth-of-type(2){
    float: right;
}
.hot-two{
    width: 344px;
    height: 214px;
    
}
.hot-twos{
    width: 344px;
    height: 97px;
    /* display: flex;
    justify-content: space-between; */
    float: left;
}
.hot-twos div{
    width: 80px;
    height: 97px;
    margin-bottom: 10px;
    text-align: center;
    float: left;
    margin-left: 5px;
}
.hot-twos div img{
    width: 80px;
    height: 60px;
    border-radius: 4px;
}


</style>