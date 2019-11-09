<template>
  <div data-v-0f7bdca4 class="search-wrap">
    <div data-v-2d7b87a1 data-v-0f7bdca4 class="search-main">
      <div data-v-2d7b87a1 class="country-bg">
        <img
          data-v-2d7b87a1
          :src="listDataone.route_ingUrl"
          alt
        />
        <div data-v-2d7b87a1 class="desc">{{listDataone.route_title}}</div>
      </div>
      <div data-v-2d7b87a1 class="hot-box">
        <h2 data-v-2d7b87a1>热门目的地</h2>
        <div data-v-687bb942 data-v-2d7b87a1 class="hot-place">
          <div data-v-687bb942 class="hot-item" v-for="(item,index) in listDataone.Destination" :key="index">
            <img
              data-v-687bb942
              :src="item.imgUrl"
              alt
            />
            <div data-v-687bb942 class="title">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div data-v-2d7b87a1 class="result-line">
        <h2 data-v-2d7b87a1>全部目的地</h2>
        <div data-v-2d7b87a1 class="line">
          <div data-v-1973f747 data-v-2d7b87a1 class="tag normal" v-for="(item,index) in listDataone.Alladdress" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listDataone() {
      return this.$store.state.listDataone
    }
  },
};
</script>

<style>
</style>