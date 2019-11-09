<template>
      <router-link to="/detail" tag="div" class="item-box">
      <div class="item-box-p">
          <h1>精选商品</h1>
      </div>
      <div class="item-box-div">
          <div class="item-box-son" v-for="(item,index) in dataList" :key="index" @click="numFn(item)">
              <div class="son1">
                  <img :src="item.image" alt="">
              </div>
              <div class="son2">
                  {{item.name}}
              </div>
              <div class="son3">
                  <span v-for="(items,index) in item.icons_tour" :key="index">{{items.title}}</span>
                  <!-- <span>买二送二</span> -->
              </div>
              <div class="son4">
                  <span>{{item.default_price}} </span>
                  <span> / 起</span>
              </div>
          </div>
           
      </div>
</router-link>
</template>

<script>
export default {
    computed:  {
        dataList(){
            return this.$store.state.data
        }
    },
    methods: {
        numFn(obj) {
            this.$store.commit('DetailMut', obj)
        }
    },
}
</script>

<style scoped>
    .item-box{
        float: left;
        width: 375px;
        background: white;
        margin-top: 20px;
    }
    .item-box-p{
        width: 375px;
        height: 50px;
        padding:12px 16px;
    }
    .item-box-p h1{
        font-size: 20px;
    }
    .item-box-div{
        width: 375px;
        float: left;
        padding: 0px 8px;
        /* height: 1444px; */
    }
    .item-box-son{
        /* background: firebrick; */
        width: 50%;
        height: 212px;
        float: left;
        text-align: center;
        margin-bottom: 8px;
    }
    .son1{
         width: 170px;
        height: 120px;
        margin: 0 auto;
    }
    .son1 img{
        width: 170px;
        height: 120px;
    }
    .son2{
        width: 170px;
        height: 36px;
        overflow: hidden;
        float: left;
        /* margin-bottom: 8px; */
    }
    .son3{
       float: left;
        height: 20px;
        width: 170px;
        overflow: hidden;
    }
    .son3 span{
        width: 56px;
        height: 20px;
        border-radius: 10px;
        background: #f0eeee;
        margin: 3px;
        font-size: 12px;
         float: left;
    }
    .son4{
        float: left;
    }
    .son4 span{
        font-size: 16px;
        color: #ff0000;
    }
</style>