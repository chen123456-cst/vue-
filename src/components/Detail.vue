<template>
  <div class="product-detail-page" data-v-456dd6df>
    <!-- 标题部分 -->
    <div
      class="product-detail-header tours-no-bb product-detail-header van-nav-bar van-nav-bar--fixed van-hairline--bottom"
      style="z-index:999;"
      data-v-2ec9a5e5
      data-v-456dd6df
    >
      <router-link to="/" tag="div" class="van-nav-bar__left">
        <i
          class="left-wrap van-icon van-icon-arrow-left"
          style="color:undefined;font-size:undefined;"
          data-v-2ec9a5e5
        ></i>
      </router-link>
      <div class="van-ellipsis van-nav-bar__title">{{DetailData.name}}</div>
      <div class="van-nav-bar__right">
        <i
          class="right-wrap van-icon van-icon-ellipsis"
          style="color:undefined;font-size:undefined;"
          data-v-2ec9a5e5
        ></i>
      </div>
    </div>

    <div class="product-detail" data-v-456dd6df>
      <!-- 轮播部分s -->

      <div class="banner-wrap" data-v-456dd6df @click="cons">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in  imglist" :key="index">
            <img :src="item.imge" alt="图片" />
          </van-swipe-item>
        </van-swipe>
        <div class="serial-num" data-v-456dd6df>産品編號：29-938</div>
      </div>

      <!-- 评论详解登 -->
      <div class="product" data-v-456dd6df>
        <p class="setelse" data-v-456dd6df>
          <span data-v-456dd6df>
            <span data-v-456dd6df>暂无评论</span>
          </span>
          <span data-v-456dd6df>出行人数：3</span>
        </p>
        <p class="name" data-v-456dd6df>{{DetailData.name}}</p>
        <div class="price-wrap" data-v-456dd6df>
          <!---->
          <span
            class="price fs-48 fw-800"
            style="color:#fb605d;text-decoration:none;font-size: 20px;"
            data-v-456dd6df
          >
            ￥{{DetailData.default_price}}
            <span class="unit" data-v-456dd6df>起</span>
          </span>
          <span class="default-price" data-v-456dd6df>{{DetailData.default_price}}</span>
          <div class="showapp" data-v-456dd6df>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACGElEQVRYR+2XvWsUURTFz5n9cDNOgmCzjR+FFklhE3RWsAlYpRAMllqEjQTUzn8gYKkgKAElbP6AgFpYKAiWrsnGhChooWAlLDbiKjM4zLwri6xKmJE7OwkEeVOfc95vzr3Fe8Qe/7jH+WABi07oP2xwRUqneuGMQ04LjKdpiKAB+C5xknudWa+r8Qw0uRqcWJHq6LdgieQlIv/+CtBNWD7Xma12tJC5AP1WcN0hbmnD03QCbPXCkTNvr/K7JkcPuCBO43D4goCvCc7SiMDEUj69Pldd0+SoAU/c7O53D45tEjiuCf6XJhHMrDXdR5ocNeDE4mdvrOZtkjhmBG0AnzQH/NFI2QHPgvCM4MJq032g8Q8LqD5gALHtB9V+C2gbLNpAUb/dQdtg0QaK+u0O2gaLNlDUb3fQNli0gaL+IXdQrsWl0lPNjfi3RuhWTPKYxJFdv1ELEFKQ5AIEIIBLwtkVwKMLH2v1Q/UNUsYznpMiYu5CnDYd3CZQz37ZOdMvm7Unmh9Uj7gf1mgFD0mczwCMosSc3LjsvW60guckptJ17NFwsj1X+7DjgJP3v/qVcuUZidHUcJF1gbNFyEUQ+9I0RmRptenOA5QdB+wH+q1wijCLJFNHnTlWMBCRO3E8cuPVPAMNXF+Ta8R/vXHpL0fjRJLe5LbTYwP5EUXv31w58EULNtANCZj3mOH1FnD47n45bYNFG/wJ1MWUOMpc224AAAAASUVORK5CYII="
              alt
              data-v-456dd6df
            />
            App下单立减￥18.61起,更有新人优惠等你拿
          </div>
        </div>
      </div>

      <!-- 稀饭推荐 -->

      <div class="recommend mt-24" data-v-456dd6df>
        <div class="title" data-v-456dd6df>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAbFBMVEUAAABKsfRKsvRKsPRLsPRAr/9LsPRLsfRLsfVfufZQs/XJ6Pyp2vqNzvnH5/y03/u/5Pyd1fp8x/jY7/2n2fpbuPZWtvXS7P284vuu3PuZ0/ng8v6k2PqCyfh4xfdxwfeS0PmIzPjn9f7M6fyrGansAAAACHRSTlMAwGDwvxDvX0A/zNcAAADJSURBVCjPbdLbcoMgAEVRLpoeiAIFQa23pP3/fywmgZiR/QZrYBiAxFh1waFL9UX26gqnqjoCBQoS90FO2A0pdlgQBtOvaUAJz7ApMQ/5BAS5VmNxSL1Bqhb3/gyyUwGjPkEYnYCcnBkGbRNY56Zf4wF/+4nN/fqC1litJVJybBM08rtBLuilDN5sZRBKJOg+wBpZhrlDGfrlARy4jaLRInWfPABOKLAqdf27ppR9XjsDpBeHwuuhyk9L989QEFqTPUY5DnHK4uQ/+5EWKG5DqRwAAAAASUVORK5CYII="
            alt="icon"
            data-v-456dd6df
          />
          稀饭推荐
        </div>
        <div class="content mt-12" data-v-456dd6df>
          <!-- ★{{DetailData.icons_tour?'【'+DetailData.icons_tour[0].title+'】'+DetailData.icons_tour[0].content:""}} -->
          ★
          <!-- {{'【'+DetailData.icons_tour[0].title+'】'+DetailData.icons_tour[0].content}} -->
          <br />★
          <!-- ★{{DetailData.icons_tour?'【'+DetailData.icons_tour[1].title+'】'+DetailData.icons_tour[1].content:""}} -->
          <!-- ★{{'【'+DetailData.icons_tour[1].title+'】'+DetailData.icons_tour[1].content}} -->
          <br />★
          <!-- ★{{DetailData.icons_tour?'【'+DetailData.icons_tour[2].title+'】'+DetailData.icons_tour[2].content:""}} -->
          <!-- ★{{'【'+DetailData.icons_tour[2].title+'】'+DetailData.icons_tour[2].content}} -->
        </div>
      </div>

      <!-- 下拉菜单部分 -->

      <div class="notice mt-24" data-v-456dd6df>
        <div class="van-hairline--top-bottom van-collapse" data-v-456dd6df>
          <div class="van-collapse-item" data-v-456dd6df>
            <div name="1" class="van-cell van-cell--clickable van-collapse-item__title">
              <div class="van-cell__title">
                <span>接送地点</span>
              </div>
              <i
                class="van-icon van-icon-arrow van-cell__right-icon"
                style="color:undefined;font-size:undefined;"
              ></i>
            </div>
          </div>
          <div class="van-collapse-item van-hairline--top" data-v-456dd6df>
            <div name="2" class="van-cell van-cell--clickable van-collapse-item__title">
              <div class="van-cell__title">
                <span>预定须知</span>
              </div>
              <i
                class="van-icon van-icon-arrow van-cell__right-icon"
                style="color:undefined;font-size:undefined;"
              ></i>
            </div>
          </div>
          <div class="van-collapse-item van-hairline--top" data-v-456dd6df>
            <div name="3" class="van-cell van-cell--clickable van-collapse-item__title">
              <div class="van-cell__title">
                <span>注意事项</span>
              </div>
              <i
                class="van-icon van-icon-arrow van-cell__right-icon"
                style="color:undefined;font-size:undefined;"
              ></i>
            </div>
          </div>
          <div class="van-collapse-item van-hairline--top" data-v-456dd6df>
            <div name="4" class="van-cell van-cell--clickable van-collapse-item__title">
              <div class="van-cell__title">
                <span>预定程序及电子票</span>
              </div>
              <i
                class="van-icon van-icon-arrow van-cell__right-icon"
                style="color:undefined;font-size:undefined;"
              ></i>
            </div>
          </div>
          <div class="van-collapse-item van-hairline--top" data-v-456dd6df>
            <div name="5" class="van-cell van-cell--clickable van-collapse-item__title">
              <div class="van-cell__title">
                <span>订购条例</span>
              </div>
              <i
                class="van-icon van-icon-arrow van-cell__right-icon"
                style="color:undefined;font-size:undefined;"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部咨询预定部分 -->
      <div class="footer-fixed" data-v-456dd6df>
        <div class="footer-tabbar" data-v-456dd6df>
          <div class="operate" data-v-456dd6df>
            <div class="btn-operate" data-v-456dd6df>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAhFBMVEX////7YF3//f37YV78mpj7aWb/6ej8mJb8lJL7enj/9vb+y8r9pKL8lpT8kY//5OP9qKb/+vr/8/L9sa/8npz+2dj+wcD9oZ/8joz8gX77ZGH/7Ov/4N/+3dz9uLf8i4n8iIb7dnP7c3D+1NP+xML9urn9tbP9q6n7b2z/5uX+z87+2tphM1H4AAAB1UlEQVRIx+2U2XqDIBSEHcEFjXvUaBY1e9v3f79GquJXheh1O1d+w/kDzCFH+0NyKJowWgnt8NJuHZOC62sVVAF5DlRrmANA9nsCHNbdyNI0C/CXMwEAU9NMAMFiyO628AF7IcJ3OPRXMxdCFlD/fNUAXbgRAS4/n5c2xUUQBYr+mwFbdbVufp7y+gnA7S0XwLPOT5+mPnOk68NmJTqxoUJnvVcy+3Ed9zqiJYRIcxFLl4ZgpDoeVjadZRT07ga/DhIF7p0WRldiDf7L8cMsjTWF4jQLd4AxGGcgXJJrOIZuADaqanGLh8iaCkrNUF0bU2+7uO0ZQVktpSsa3zKWKBAU1aUM5czEthWU7glmSnm6lLHnl/yu4xNZHSOlrlM/kzDiTbtT2wWYItgzEMwOp7OccQAyFxEBIil0BNicz4CjFMoATzIHr6onmcz5ieqvU43DS9NxfDsp9ATMPrHqVdgn+aGIzwHKrsoDl2cO8TkSKO2m5H5LABgGALLdv4kv408vDsu2Oo/jTcuW4WveeEAmD+/uJHxY2fxcps8HW+Ik8mngAT5HiuPQ7oJjtmjgtB1cjTs23TO4Ell6Tfurt98T9tTuzibpiXX/NrPo5NUp0v411TeV7hRWtAAoggAAAABJRU5ErkJggg=="
                alt="icon"
                data-v-456dd6df
              />
              <p class="operate-name" data-v-456dd6df>收藏</p>
            </div>
            <div class="btn-operate" data-v-456dd6df>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAllBMVEUAAAA9PT0bGxstLS04ODg0NDQ9PT09PT0+Pj48PDw9PT08PDw6Ojo5OTk7OzsyMjI9PT09PT05OTk9PT09PT08PDw6Ojo7Ozs6Ojo9PT09PT09PT09PT09PT09PT08PDw6Ojo4ODg9PT09PT09PT09PT07Ozs6Ojo6Ojo8PDw8PDw8PDw8PDw8PDw8PDw6Ojo8PDw+Pj58O8i+AAAAMXRSTlMA+wMIGQz38Mlm5HImIUoPu4gR086RQzUt1sG0sJdsX08W69/belQxHp6bW6mlgjyrV9p+ngAAAsRJREFUSMfVVdeWozAMxca0UEJ6YxJI77P+/59byWaEKcnMPO1ZPSRG6Fq6V7Kx/kMbRvngj++n1/VJ8B8h+vlCGsYG3+Ocq2zZbv4eNvkK9FaXyX1EsOI1JOrpkKSwtYP3oytDl3t4hQlcfP8hGgXnHrrT7hIHuOcybr+wQ3yzsLswKFXwom4UdN9GBQzYTxvOebDOVegwBZTf2ssFzKzum46VBgOE2Suk2wCBbqyRZyNLW/ZRDx8iPluEGnxmyL43wt8LPgsPspq0HBf2a+ReQUwAr7DGmaoWFmsjAGenobUDrqdabaUcqAXC+9WMdpCcAQXdz0zKsVoICDtSQA5Pog1y9eoIcL3aS7mFP3rYt04IMQC4HOq2GSyGsE6spqWQaq5CCWS7VX0ReNuz/4mNPZeqce3bSfmwqGjZMY0HnFL4f0K7Kte26qxndViotYBRyEgdEh00TbtAZwjRfQpLD69k9qlSMuKquZ2+XIzk86m1dVursseaGYEiEvfegSk8PEIC4m7kg6xnmrxRG8PvUrLYGoEaNHCCWgZlUCN4HGZZiGXbH+DNFKPAPGKsjJyTkHYmld2jZIe3ghomzzaPy9JIGivMvn6z2twn6dC4Z6jPysOJFbHVqsSMObQX35A5zNjiCbEODC74fPh3Bi5IM+VWIumE06XtmKIkiqanfbyPoTmDzUQ90aSqtafoHiBR45Zmp/osau6VfhsAGf2yL0jQPGaC1WeUjzBJYtx96svm3syYtBwHMuFBJhur3ACraK3u1t60flBaI8oLZCHRmNS2EmbADXfh3R9CsgWVRhivePFd09/CrX+s1xGSKp0WBUEiGj6RImZj/cKckGFtyZuQ4Wg8t43CnAlTShbv9n0oTs8Zx7KCpdQ2eV/MQZbGGCm5PH/DgB97sm6T+CfM4+RRAtkyPDm/kEzE0XnIrX9sfwHjb3jZeMJrSAAAAABJRU5ErkJggg=="
                alt="icon"
                data-v-456dd6df
              />
              <p class="operate-name" data-v-456dd6df>电话咨询</p>
            </div>
            <div class="btn-operate" data-v-456dd6df>
              <img src="https://m.tourscool.com/_nuxt/img/3ea0ea1.png" alt="icon" data-v-456dd6df />
              <p class="operate-name" data-v-456dd6df>在线咨询</p>
            </div>
          </div>
          <div class="reserve" data-v-456dd6df>
            <button
              class="btn-reserve van-button van-button--default van-button--large"
              style="background:#fb605d;"
              data-v-456dd6df
              @click="changge"
            >
              <span class="van-button__text">立即預定</span>
              <!-- <van-button type="danger">立即預定</van-button> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: [
        {
          imge: ''
        },
        {
          imge:
            'https://img.tourscool.com/images/product/8882e7f29c5a7e5145f6e03c9aa3be24.jpg/600x338'
        },
        {
          'imge':
            'http://assets.tourscool.com/uploads/inn/2019/10/23/952/ggoPDFxBYN0ac_fcyybQGlyCEzU.jpg'
        },
        {
          'imge':
            'http://assets.tourscool.com/uploads/inn/2019/10/15/952/0WrYwP2OyFGSOsGPBTzzbtsBUuo.jpg'
        },
        {
          imge:
            'https://img.tourscool.com/images/product/48e70ec320170c93a36e958238405497.jpg/600x338'
        }
      ]
    };
  },
  created(){
    this.imglist[0].imge = this.DetailData.image;
  },
  computed:{
    DetailData() {
      return this.$store.state.DetailData;
    }
  },
  methods: {
    cons() {
      console.log(this.DetailData);
  
    },
    // 跳转到预定页面
    changge() {
      this.$router.push({
        name: "caddroom"
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/5b15a81a1a45da1b0bc7.css";
@import "../assets/css/cfad6e5824a924c0b7ef.css";
@import "../assets/css/e096b3031876e3972ba8.css";
.van-swipe-item img {
  width: 375px;
  height: 210px;
}
</style>