<template>
  <div>
    <router-link to="/detail" tag="div">
      <div class="boxdiv" v-for="(item,index) in company" :key="index" @click="numFn(item)">
        <div class="imgs">
          <img :src="item.image" alt />
        </div>
        <!-- <div class="tags">
          当地玩乐
        </div>-->
        <div class="special">
          <div class="title">{{item.name}}</div>
          <div class="tags-wrap">
            <span class="hollow color">热门推荐</span>
            <span class="hollow color">畅销行程</span>
            <span class="hollow">当地特色体验</span>
            <span class="hollow">情侣蜜月游</span>
          </div>
          <div class="product-price">
            <span class="sale-price">{{item.default_price}}</span>
            <span class="sale">/起</span>
            <!-- <span class="prcie"> 原价:￥1,861</span> -->
          </div>
          <div>
            <span class="default-price">暂无评论</span>
            <span class="default-price">3人出行</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    company() {
      return this.$store.state.join;
    }
  },
  methods: {
    numFn(obj) {
      this.$store.commit("DetailMut", obj);
      console.log(obj);
    }
  }
};
</script>

<style scoped>
.boxdiv {
  width: 375px;
  height: 157px;
  padding: 10px 15px;
  float: left;
  background: white;
}
.imgs {
  width: 91px;
  height: 110px;
  float: left;
}
.imgs img {
  width: 91px;
  height: 110px;
  border-radius: 8px;
}
.special {
  width: 245px;
  height: 127px;
  padding-left: 13px;
  float: left;
}
.title {
  width: 241px;
  height: 40px;
  overflow: hidden;
  color: #3e3e3e;
}
.tags-wrap {
  width: 241px;
  height: 18px;
  overflow: hidden;
}
.hollow {
  color: #3e3e3e;
  margin: 5px;
  background: #eee;
  border-radius: 8px;
}
.color {
  width: 65px;
  color: #fb605d;
  border-color: #fb605d;
}
.product-price {
  width: 241px;
  height: 27px;
}
.sale-price {
  color: #fb605d;
  font-size: 20px;
  font-weight: bolder;
}
.sale {
  color: #fb605d;
}
.price {
  color: #3a3a3a;
  font-size: 12px;
  text-decoration: line-through;
}
.default-price {
  color: #989898;
  margin: 10px;
}
</style>