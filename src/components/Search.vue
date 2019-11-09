<template>
            <!-- 顶部搜索框 -->
            <div
              class="layout-header tours-no-bb classBg show-bg van-nav-bar van-nav-bar--fixed van-hairline--bottom"
              style="z-index:999;box-shadow:;"
              data-v-64ad55b0
              data-v-0f7bdca4
            >
                <router-link to="/" tag="div" class="van-nav-bar__left">
                <i
                  class="left-wrap van-icon van-icon-arrow-left"
                  style="color:undefined;font-size:undefined;"
                  data-v-64ad55b0
                ></i>
              </router-link>
              <div class="van-ellipsis van-nav-bar__title"></div>
              <div class="van-nav-bar__right">
               <i
                  class="right-wrap van-icon van-icon-undefined"
                  style="color:undefined;font-size:undefined;"
                  data-v-64ad55b0
                >
                  <div class="big-search" data-v-64ad55b0>
                    <div data-v-64ad55b0>
                      <div class="search-box" data-v-64ad55b0>
                        <i
                          class="van-icon van-icon-search"
                          style="color:undefined;font-size:undefined;"
                          data-v-64ad55b0
                        ></i>
                        <input placeholder="城市/景点/产品/关键字" value class="box" data-v-64ad55b0 />
                        <i
                          class="van-icon van-icon-clear"
                          style="color:undefined;font-size:undefined;display:none;"
                          data-v-64ad55b0
                        ></i>
                      </div>
                    </div>
                  </div>
                </i>
              </div>
            </div>





                <!-- 侧边导航栏********* -->




                <!-- 公共详情页*********** -->


</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  computed: {
    SearchData() {
      return this.$store.state.SearchData;
    },
    listData() {
      return this.$store.state.listData;
    }
  }
};
</script>

<style  scoped>
@import "../assets/css/47be9c4e65728f78d214.css";
@import "../assets/css/cfad6e5824a924c0b7ef.css";
@import "../assets/css/e096b3031876e3972ba8.css";
html {
  font-size: 37.5px;
}
.layout-header[data-v-64ad55b0] {
  height: 1.173333rem;
  font-size: 0.426667rem;
  color: #eee;
  background-color: transparent;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  overflow: hidden;
}
.layout-header.show-bg[data-v-64ad55b0] {
  background-color: #fff;
  color: #191919;
  -webkit-box-shadow: 0 0.053333rem 0.16rem rgba(0, 0, 0, 0.14);
  box-shadow: 0 0.053333rem 0.16rem rgba(0, 0, 0, 0.14);
}
.layout-header.show-bg .left-wrap[data-v-64ad55b0] {
  /*color: #191919;*/
}
.layout-header .right-wrap .big-search[data-v-64ad55b0] {
  width: 8.453333rem;
  height: 0.96rem;
}
.layout-header .right-wrap .van-search[data-v-64ad55b0] {
  background: #fff !important;
  border-radius: 0.48rem;
  height: 0.96rem;
  padding: 0;
}
.search-box[data-v-64ad55b0] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 8.24rem;
  padding: 0 0.08rem 0 0.266667rem;
  height: 0.906667rem;
  background: #dbdbdb;
  border-radius: 0.48rem;
  overflow: hidden;
}
.search-box i.van-icon-search[data-v-64ad55b0] {
  color: #fff;
  font-size: 0.533333rem;
}
.search-box .box[data-v-64ad55b0] {
  width: 7.333333rem;
  border: none;
  outline: 0;
  color: #666;
  background: #dbdbdb;
  padding: 0.133333rem 0;
  line-height: 0.533333rem;
}
.search-box .box.list[data-v-64ad55b0] {
  width: 6.266667rem !important;
}
.search-box i.van-icon-clear[data-v-64ad55b0] {
  color: #666;
  padding-right: 0.133333rem;
}
.has-keyword[data-v-64ad55b0] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.has-keyword .search-box[data-v-64ad55b0] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.has-keyword .search-box .box[data-v-64ad55b0] {
  width: 6.133333rem;
  padding: 0.133333rem 0;
}
.has-keyword .search-btn[data-v-64ad55b0] {
  line-height: 0.96rem;
  padding-left: 0.133333rem;
  color: #00abf9;
}
.has-keyword .personal-btn[data-v-64ad55b0] {
  font-size: 0.64rem !important;
  padding-left: 0.133333rem;
}
.has-keyword .personal-btn i[data-v-64ad55b0] {
  vertical-align: bottom;
  font-size: 0.64rem !important;
}
.tag[data-v-1973f747] {
  display: inline-block;
  margin: 0 0.2rem 0.213333rem 0;
  padding: 0.186667rem 0.266667rem;
  font-size: 0.32rem;
  border-radius: 0.4rem;
}
.tag.normal[data-v-1973f747] {
  color: #191919;
  background: #f1f1f1;
}
.tag.active[data-v-1973f747] {
  color: #f1f1f1;
  background: #399ef6;
}
.hot-place[data-v-687bb942] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.hot-place .hot-item[data-v-687bb942] {
  margin-bottom: 0.266667rem;
  width: 2.133333rem;
}
.hot-place .title[data-v-687bb942] {
  font-size: 0.266667rem;
  color: #000000;
  height: 0.426667rem;
  overflow: hidden;
}
.hot-place .desc[data-v-687bb942] {
  font-size: 0.266667rem;
  color: #bebebe;
  height: 0.426667rem;
  overflow: hidden;
}
.hot-place img[data-v-687bb942] {
  width: 2.133333rem;
  height: 1.6rem;
  border-radius: 0.08rem;
}
.play-ways[data-v-fab4d164] {
  padding: 0.16rem 0 0.266667rem 0;
}
.play-ways img[data-v-fab4d164] {
  width: 6.746667rem;
  height: 1.6rem;
  border-radius: 0.106667rem;
}
.play-ways .title[data-v-fab4d164] {
  font-size: 0.32rem;
  color: #000;
  font-weight: 400;
}
.play-ways .title span.desc[data-v-fab4d164] {
  font-size: 0.293333rem;
  color: #bebebe;
}
.search-main h2[data-v-e3608972] {
  padding: 0.133333rem 0 0.266667rem 0;
  font-size: 0.373333rem;
  color: #9a9a9a;
}
.search-main .active[data-v-e3608972] {
  background-color: #00abf9;
  color: #fff;
}
.search-main .play-ways[data-v-e3608972] {
  padding: 0.16rem 0 0.266667rem 0;
}
.search-main .play-ways img[data-v-e3608972] {
  width: 6.746667rem;
  height: 1.6rem;
  border-radius: 0.106667rem;
}
.search-main .play-ways .title[data-v-e3608972] {
  font-size: 0.32rem;
  color: #000;
  font-weight: 400;
}
.search-main .play-ways .title span.desc[data-v-e3608972] {
  font-size: 0.293333rem;
  color: #bebebe;
}
.country-bg[data-v-2d7b87a1] {
  width: 6.906667rem;
  height: 1.6rem;
  position: relative;
  background-color: #d8d8d8;
  border-radius: 0.106667rem;
  overflow: hidden;
}
.country-bg img[data-v-2d7b87a1] {
  position: absolute;
  width: 100%;
  height: 100%;
}
.country-bg .desc[data-v-2d7b87a1] {
  position: relative;
  z-index: 4;
  line-height: 1.6rem;
  font-size: 0.373333rem;
  color: #ffffff;
  padding-left: 0.24rem;
}
.search-main h2[data-v-2d7b87a1] {
  padding: 0.133333rem 0 0.266667rem 0;
  font-size: 0.373333rem;
  color: #9a9a9a;
}
.search-main .active[data-v-2d7b87a1] {
  background-color: #00abf9;
  color: #fff;
}
.square-wrap[data-v-5641a056] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}
.square-wrap h2.title[data-v-5641a056] {
  padding: 0.426667rem 0 0.32rem;
  font-size: 0.373333rem;
  font-weight: 400;
  color: #bebebe;
}
.square-wrap .square-item[data-v-5641a056] {
  width: 2.133333rem;
  height: 1.413333rem;
  margin: 0 0.213333rem 0.213333rem 0;
  padding: 0.266667rem 0;
  background-color: #f1f1f1;
  border-radius: 0.106667rem;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.44rem;
}
.loading[data-v-4e61b4bc] {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  z-index: 10000;
}
.loading .center-position[data-v-4e61b4bc] {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 0.32rem;
  color: #fff;
}
.white-bg[data-v-6495cc88] {
  position: fixed;
  top: 1.173333rem;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
}
.white-bg .text[data-v-6495cc88] {
  text-align: center;
  padding-top: 1.333333rem;
  font-size: 0.373333rem;
}
.search-area[data-v-2d7c8556] {
  padding: 0.213333rem 0.213333rem 0 0;
}
.search-area .search-item[data-v-2d7c8556] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-items: center;
  border-bottom: 0.013333rem solid #e4e4e4;
  padding: 0.266667rem 0;
}
.search-area .search-item img[data-v-2d7c8556] {
  width: 1.04rem;
  height: 0.88rem;
  border-radius: 0.106667rem;
  margin-right: 0.266667rem;
  background-color: #eee;
}
.search-area .search-item .desc[data-v-2d7c8556] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.32rem;
}
.search-wrap[data-v-0f7bdca4] {
  position: relative;
  top: 1.173333rem;
  z-index: 9;
  bottom: 0;
}
.search-wrap .badge-bar[data-v-0f7bdca4] {
  position: fixed;
  top: 1.173333rem;
  bottom: 0;
  width: 2.4rem;
  background-color: #f1f1f1;
}
.search-wrap .badge-bar.has-history[data-v-0f7bdca4] {
  top: 2.826667rem;
}
.search-wrap .search-content-w[data-v-0f7bdca4] {
  padding-top: 1.653333rem;
}
.search-wrap .van-badge[data-v-0f7bdca4] {
  padding: 0.426667rem 0;
  font-size: 0.373333rem;
  background-color: transparent;
  height: 1.333333rem;
  line-height: 0.48rem;
  border: none;
}
.search-wrap .van-badge--select[data-v-0f7bdca4] {
  background-color: #fff;
}
.search-wrap .search-main[data-v-0f7bdca4] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.266667rem 0.133333rem 0 2.8rem;
}
.search-wrap .search-main h2[data-v-0f7bdca4] {
  padding: 0.133333rem 0 0.266667rem 0;
  font-size: 0.373333rem;
  color: #9a9a9a;
}
.search-wrap .search-main .active[data-v-0f7bdca4] {
  background-color: #00abf9;
  color: #fff;
}
.search-wrap .search-main .result-line[data-v-0f7bdca4] {
  padding-top: 0.293333rem;
}
.search-wrap .history-list[data-v-0f7bdca4] {
  height: 1.653333rem;
  padding: 0 0.426667rem;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 0.053333rem 0.16rem rgba(0, 0, 0, 0.14);
  box-shadow: 0 0.053333rem 0.16rem rgba(0, 0, 0, 0.14);
}
.search-wrap .history-list .title[data-v-0f7bdca4] {
  font-size: 0.32rem;
  line-height: 0.586667rem;
  color: #bebebe;
  font-weight: 400;
  height: 0.586667rem;
}
.search-wrap .history-list .search-items[data-v-0f7bdca4] {
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  padding-bottom: 0.266667rem;
}
.search-wrap .history-list .search-items .main-item[data-v-0f7bdca4] {
  height: 0.8rem;
  line-height: 0.266667rem;
  position: relative;
  white-space: nowrap;
}
.search-wrap .history-list .search-items .item-info[data-v-0f7bdca4] {
  display: inline-block;
  background-color: #f1f1f1;
  color: #000;
  border-radius: 0.4rem;
  margin-right: 0.133333rem;
  font-size: 0.32rem;
  padding: 0 0.266667rem;
  line-height: 0.8rem;
}
.search-wrap .history-list .search-items .item-info i[data-v-0f7bdca4] {
  vertical-align: text-top;
}
.search-result[data-v-0f7bdca4] {
  padding: 0 0.186667rem 0.133333rem 0.426667rem;
  background-color: #fff;
  position: relative;
  top: 1.173333rem;
  z-index: 10;
}
.search-result h2.title[data-v-0f7bdca4] {
  padding: 0.426667rem 0 0.32rem;
  font-size: 0.373333rem;
  font-weight: 400;
  color: #bebebe;
}
.search-wrap .van-badge__text {
  padding-left: 0.426667rem;
}
.search-wrap .van-badge--select .van-badge__text {
  border-left: 0.08rem solid #399ef6;
}
</style>