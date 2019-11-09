<template>
  <div data-v-0f7bdca4 class="search-wrap" style="z-index:999">
    <div data-v-0f7bdca4 class="van-hairline--top-bottom badge-bar van-badge-group">
      <router-link
        to="/search"
        data-v-0f7bdca4
        class="van-badge van-hairline"
        :class="n==-1?'van-badge--select':''"
      >
        <div class="van-badge__text" @click="n=-1">热门推荐</div>
      </router-link>

      <router-link
        to="/listnav"
        data-v-0f7bdca4
        class="van-badge van-hairline"
        v-for="(item,index) in SearchData"
        :key="index"
        :class="n==index?'van-badge--select':''"
      >
        <div class="van-badge__text" @click="numFn(index),n=index">{{item}}</div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: -1
    };
  },
  computed: {
    SearchData() {
      return this.$store.state.SearchData;
    }
  },
  methods: {
    numFn(i) {
      this.$store.commit("Listn", i);
      console.log(i);
    }
  }
};
</script>

<style scoped>
@import "../assets/css/47be9c4e65728f78d214.css";
@import "../assets/css/cfad6e5824a924c0b7ef.css";
@import "../assets/css/e096b3031876e3972ba8.css";
</style>