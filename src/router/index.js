import Vue from 'vue'
import VueRouter from 'vue-router'
// 个人中心组件
import cpeple from '@/components/cpeple'
// 登录
import clogin from '@/components/clogin'
// 注册
import cregister from '@/components/register'
// 我的订单管理
import corder from '@/components/corder'
// 详情页里面的日期和人数
import caddroom from '@/components/caddroom'
// 购物车路由
import ccart from '@/components/ccart'
import Search from '@/components/Search'
import List from '@/components/List'
import Main from '@/components/Main'
import Listnav from '@/views/Listnav'
import Detail from '@/components/Detail'
import Zswiper from '@/components/Zswiper'
import Zfont from '@/views/Zfont'
import Znav from '@/components/Znav'
import Zrecom from '@/views/Zrecom'
import Zpackage from '@/views/Zpackage'
import Zell from '@/views/Zell'
import Ztag from '@/views/Ztag'
import Zcar from '@/views/Zcar'
// 地址菜单
import caddress from '@/components/caddress'
Vue.use(VueRouter)
const routes = [
  // oldblack的组件
  {
    path: '/search',
    name: 'search',
    components: {
      Zswiper: Search,
      List,
      default: Main
    },
  },
  {
    path: '/listnav',
    name: 'Listnav',
    components: {
      Zswiper: Search,
      List,
      default: Listnav
    },
  },
  {
    path: '/detail',
    name: 'Detail',
    components: {
      default: Detail
    },
  },
  // 张渝的主件
  {
    path: '/',
    name: 'Zswiper',
    components: {
      Zswiper,
      default: Zfont,
    }
  },
  {
    path: '/Znav/:id',
    name: 'Znav',
    components: {
      Zswiper: Search,
      List: Znav,
      default: Zrecom
    },
  },
  {//当地跟团
    path: '/Zpack',
    name: 'Zpack',
    components: {
      Zswiper: Search,
      List: Znav,
      default: Zpackage
    },
  },
  {//稀饭推荐
    path: '/Zrecom',
    name: 'Zrecom',
    components: {
      Zswiper: Search,
      List: Znav,
      default: Zrecom
    },

  },
  // 当地玩乐
  {
    path: '/Zell',
    name: 'Zell',
    components: {
      Zswiper: Search,
      List: Znav,
      default: Zell
    },
  },
  {
    //精品小团
    path: '/Ztag',
    name: 'Ztag',
    components: {
      Zswiper: Search,
      List: Znav,
      default: Ztag
    },
  },
  {
    path: '/Zcar',
    name: 'Zcar',
    components: {
      Zswiper: Search,
      List: Znav,
      default: Zcar
    },
  },

  // 个人中心路由
  {
    path: '/cpeple',
    name: "cpeple",
    components: {
      default: cpeple,
    }
  },
  // 登录
  {
    path: "/login",
    name: 'clogin',
    components: {
      default: clogin,
    },
  },
  // 注册
  {
    path: "/register",
    name: 'cregister',
    components: {
      default: cregister,
    },
  },
  // 我的订单
  {
    path: '/corder',
    name: 'corder',
    component: corder,
    beforeEnter: (to, from, next) => {
      let token = window.localStorage.getItem('token');
      if (token) {
        // 验证token
        next();
      } else {
        next('/login')
      }
    }
  },
  // 详情页里面选择日期和人数
  {
    path: '/caddroom',
    name: 'caddroom',
    component: caddroom,
    
  },
  // 购物车路由
  {
    path: '/ccart',
    name: 'ccart',
    components: {
      default: ccart
    },
    beforeEnter: (to, from, next) => {
      let token = window.localStorage.getItem('token');
      if (token) {
        // 验证token
        next();
      } else {
        next('/login')
      }
    }
  },
  // 三级联动
  {
    path:'/caddress',
    name:'caddress',
    component:caddress,
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
