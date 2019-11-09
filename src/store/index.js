import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 首页轮播
    swiper: [
      { 'image': 'https://assets.tourscool.com/uploads/inn/2019/11/01/952/qPxcQ6UcMBBAG78sk0S3gw4wj8g.jpg' }, {
        'image': 'https://assets.tourscool.com/uploads/inn/2019/10/31/952/LfhcC7Y3hMSXPLLClCdJ-e8M2Q8.jpg'
      }, {
        'image': 'https://assets.tourscool.com/uploads/inn/2019/10/23/952/OhbJ6K2fifm2qkp1dH5IjYoSPfA.jpg'
      }, {
        'image': 'http://assets.tourscool.com/uploads/inn/2019/10/23/952/ggoPDFxBYN0ac_fcyybQGlyCEzU.jpg'
      }, {
        'image': 'http://assets.tourscool.com/uploads/inn/2019/10/15/952/0WrYwP2OyFGSOsGPBTzzbtsBUuo.jpg'
      }, {
        'image': 'http://assets.tourscool.com/uploads/inn/2019/10/15/952/9pCLhgGLb4tY5kOgvSfGfh-SN3w.jpg'
      }, {
        'image': 'http://assets.tourscool.com/uploads/inn/2019/08/27/952/8248kb4LBUpYwG0g-m9g6Jn12DA.jpg'
      }
    ],
    // 首页导航栏
    homelist: [
      {
        'title': '精品小团',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/07/24/952/V1DIqxhFFcoUSYLjcivub_qwZRo.png'
      },
      {
        'title': '当地玩乐',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/07/24/952/mXxtCra5hsG4Buqw6TOyOr6-bNA.png'
      },
      {
        'title': '当地跟团',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/07/24/952/MkzS1-dg32N32BqVvlAkgEWDxkE.png'
      },
      {
        'title': '个性定制',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/07/24/952/qHA_VhqUItHNyNWXR-o0Kg-ExGQ.png'
      },
      {
        'title': '邮轮',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/07/24/952/LRQzPTBTDdKbjkmzqLn42Vycyqk.png'
      },
    ],
    //精选商品
    data: [
      {
        "product_id": 709,
        "default_price": 2493,
        "image": "https://img.tourscool.com/images/product/5c88bb2068182.jpg/600x338",
        "sales": 636,
        "comment_score": "4.8",
        "special_price": "",
        "name": "（7天）【跨国深度游】美国加拿大纽约+华盛顿+多伦多+魁北克+波士顿跟团游·品尝正宗法式大餐+震撼的尼亚加拉瀑布+全程豪华酒店",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "买二送一",
            "content": "是指三人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "买二送二",
            "content": "是指四人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 382,
        "default_price": 15820,
        "image": "https://img.tourscool.com/images/product/5b5edf7e6ad0f.jpg/600x338",
        "sales": 259,
        "comment_score": "5.0",
        "special_price": "",
        "name": "(6天) 【近观瀑布荡涤尘嚣】纽约+费城+华盛顿跟团游·免费升级酒店住宿+尼亚加拉大瀑布+昆西市场+美味龙虾餐",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "买二送一",
            "content": "是指三人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "买二送二",
            "content": "是指四人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "低价保证",
            "content": ""
          }
        ]
      },
      {
        "product_id": 4472,
        "default_price": 10981,
        "image": "https://img.tourscool.com/images/product/06701c8e3bc43612cbfdec822c43defd.jpg/600x338",
        "sales": 221,
        "comment_score": "0.0",
        "special_price": "",
        "name": "(1日)【峡谷风情】米尔福德峡湾大巴+游船一日游 皇后镇往返(含自助午餐+接送+玻璃顶大巴)",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 3126,
        "default_price": 6570,
        "image": "https://img.tourscool.com/images/product/5cf4c58693583.jpg/600x338",
        "sales": 209,
        "comment_score": "4.7",
        "special_price": "",
        "name": "(3天)【自由畅游】美国洛杉矶+圣地亚哥跟团游•迪士尼主题乐园+好莱坞环球影城+圣地亚哥海洋世界",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 1420,
        "default_price": 10981,
        "image": "https://img.tourscool.com/images/product/5bcd97d84b793.jpg/600x338",
        "sales": 209,
        "comment_score": "4.8",
        "special_price": "",
        "name": "（2天）【北岛萤火虫】新西兰北岛奥克兰+罗托鲁阿跟团游·霍比特人村庄+毛利文化村+萤火虫钟乳石洞（每周二发团）",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 2081,
        "default_price": 2472,
        "image": "https://img.tourscool.com/images/product/5c1b3151c5007.jpg/600x338",
        "sales": 204,
        "comment_score": "0.0",
        "special_price": "",
        "name": "（半日）【夏威夷小环岛】威基基海滩+钻石山+努阿努帕里大风口跟团游▪游览闻名风景+领略热带风情",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 5334,
        "default_price": 4936,
        "image": "https://img.tourscool.com/images/product/5db817ba60465.jpg/600x338",
        "sales": 199,
        "comment_score": "4.8",
        "special_price": "",
        "name": "(7天)【极光之约】美国阿拉斯加安克雷奇+费尔班克斯跟团游 ·3次极光探索+极地巴士探秘+深度双城游+北极光号列车+特色活动体验+精选国际酒店",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 3160,
        "default_price": 3316,
        "image": "https://img.tourscool.com/images/product/5cf8b7d5b41fb.jpg/600x338",
        "sales": 197,
        "comment_score": "4.3",
        "special_price": "",
        "name": "（3天）【雨林探险】澳洲凯恩斯跟团游·库兰达热带雨林+大堡礁+棕榈湾+道格拉斯港+澳洲自助餐",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 3694,
        "default_price": 5317,
        "image": "https://img.tourscool.com/images/product/01b57222094a6ac541ce8c531490b678.jpg/600x338",
        "sales": 194,
        "comment_score": "0.0",
        "special_price": "",
        "name": "（半日）【大桥攀登】奥克兰海港大桥攀登(含证书 无死角海港风光)",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 5300,
        "default_price": 8743,
        "image": "https://img.tourscool.com/images/product/5c89ee1b07b18.jpg/600x338",
        "sales": 193,
        "comment_score": "4.2",
        "special_price": "",
        "name": "(7天)【极光星球屋】美国阿拉斯加安克雷奇+费尔班克斯极光跟团游▪3次极光观测机会+入住星球小屋+迪纳利公园+北极光列车+陆路跨越北极圈+自选多种特色项目",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "热门推荐",
            "content": ""
          },
          {
            "title": "最受欢迎",
            "content": ""
          },
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 2333,
        "default_price": 3690,
        "image": "https://img.tourscool.com/images/product/5c6284a6d4c24.jpg/600x338",
        "sales": 192,
        "comment_score": "5.0",
        "special_price": "",
        "name": "(1日)【镰仓物语】日本镰仓+江之岛一日游·鹤岗八幡宫+花开长谷寺+镰仓大佛+打卡SLAM DUNK",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 3175,
        "default_price": 2410,
        "image": "https://img.tourscool.com/images/product/5cfe1f416b768.jpg/600x338",
        "sales": 185,
        "comment_score": "4.5",
        "special_price": "",
        "name": "（4天）【经典游】澳洲凯恩斯跟团游·凯恩斯市区游+大堡礁+库兰达热带雨林+酷牛农场+4星酒店含早餐+优惠券赠送",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 31,
        "default_price": 14407,
        "image": "https://img.tourscool.com/images/product/5c98c5fdc5ac9.jpg/600x338",
        "sales": 184,
        "comment_score": "4.9",
        "special_price": "",
        "name": "(5天)【美西风光】美国洛杉矶+拉斯维加斯+大峡谷跟团游▪精选舒适酒店+饱览西部风光+资深品质巴士接送+主题项目10选1",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 1849,
        "default_price": 27261,
        "image": "https://img.tourscool.com/images/product/5bf29f83337e1.jpg/600x338",
        "sales": 183,
        "comment_score": "0.0",
        "special_price": "",
        "name": "(7天)【美西三城精华游】梦想天堂旧金山+不夜城拉斯维加斯+\"天使之城\"洛杉矶",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "热门推荐",
            "content": ""
          },
          {
            "title": "买二送一",
            "content": "是指三人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 2141,
        "default_price": 338,
        "image": "https://img.tourscool.com/images/product/5c2c84ff54b29.jpg/600x338",
        "sales": 182,
        "comment_score": "4.7",
        "special_price": "",
        "name": "(1日)【夜景度假游】日本大阪+六甲山+神户夜景一日游•晚去晚回+景点全览+酒店接送",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "热门推荐",
            "content": ""
          },
          {
            "title": "最受欢迎",
            "content": ""
          },
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 691,
        "default_price": 20481,
        "image": "https://img.tourscool.com/images/product/5c89f834411f5.jpg/600x338",
        "sales": 181,
        "comment_score": "4.9",
        "special_price": "",
        "name": "(6天) 【美东经典线路】美国纽约+费城+华盛顿+波士顿6日跟团游·阿米希人部落+入住瀑布内酒店+三大世界比博物馆",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "热门推荐",
            "content": ""
          },
          {
            "title": "最受欢迎",
            "content": ""
          },
          {
            "title": "买二送一",
            "content": "是指三人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "买二送二",
            "content": "是指四人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 1921,
        "default_price": 2916.8,
        "image": "https://img.tourscool.com/images/product/5d70add1d9aa3.png/600x338",
        "sales": 180,
        "comment_score": "4.7",
        "special_price": "",
        "name": "(5天)【极光净土】美国阿拉斯加费尔班克斯+珍娜温泉+冰雕博物馆跟团游▪2次极光观测+可选极光晚宴+陆路探险北极圈+自选多种活动+品牌连锁酒店",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 4138,
        "default_price": 226.75,
        "image": "https://img.tourscool.com/images/product/c3a540a4a54408ed036b8790ff2b2a90.jpg/600x338",
        "sales": 179,
        "comment_score": "0.0",
        "special_price": "",
        "name": "（半日）【大巴票】基督城-奥玛鲁/奥玛鲁-基督城(单程)",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 1795,
        "default_price": 181.36,
        "image": "https://img.tourscool.com/images/product/5be419b63afef.jpg/600x338",
        "sales": 179,
        "comment_score": "0.0",
        "special_price": "￥126.95",
        "name": "澳大利亚布里斯班龙柏考拉保护区门票",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 420,
        "default_price": 550.88,
        "image": "https://img.tourscool.com/images/product/5c80bf8247e4e.jpg/600x338",
        "sales": 177,
        "comment_score": "4.7",
        "special_price": "",
        "name": "（1天）【纽约必打卡】美国华尔街+自由女神像+时代广场跟团游·俯瞰北美+豪华奔驰+Wifi热水供应",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "热门推荐",
            "content": ""
          },
          {
            "title": "低价保证",
            "content": ""
          }
        ]
      },
      {
        "product_id": 5435,
        "default_price": 592.39,
        "image": "https://img.tourscool.com/images/product/5d5e30d3c6d11.jpg/600x338",
        "sales": 176,
        "comment_score": "4.6",
        "special_price": "",
        "name": "【全新体验】日本冲绳人气项目 • 与鲸鲨同游+体验浮潜/潜水/FUN潜水",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 559,
        "default_price": 2789.69,
        "image": "https://img.tourscool.com/images/product/5c89f81fa7cc7.jpg/600x338",
        "sales": 174,
        "comment_score": "0.0",
        "special_price": "",
        "name": "(8天)【美西西南巨环】拉斯维加斯+气势恢宏布莱斯+拱门+大峡谷+ 奇幻光影羚羊彩穴",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "热门推荐",
            "content": ""
          },
          {
            "title": "买二送一",
            "content": "是指三人共同享用一个酒店标准间的价格，不提供加床"
          },
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      },
      {
        "product_id": 2014,
        "default_price": 402.56,
        "image": "https://img.tourscool.com/images/product/5d7797dba895f.png/600x338",
        "sales": 171,
        "comment_score": "0.0",
        "special_price": "",
        "name": "【鲸生有你】夏威夷欧胡岛跟团游▪船上观景台眺望+寻觅鲸鱼群+酒店接送服务",
        "icons_show": [],
        "icons_tour": []
      },
      {
        "product_id": 1004,
        "default_price": 1546.69,
        "image": "https://img.tourscool.com/images/product/5b73ca9662b3e.jpg/600x338",
        "sales": 169,
        "comment_score": "4.7",
        "special_price": "",
        "name": "(1天)【独家单品】美国阿拉斯加2019-2020北极光季“极光自由家”+迪纳利国家公园火车之旅·一人起订",
        "icons_show": [],
        "icons_tour": [
          {
            "title": "热门推荐",
            "content": ""
          },
          {
            "title": "畅销行程",
            "content": ""
          }
        ]
      }
    ],
    // 热门目的地
    hotaddress: [
      {
        'title': '美国西部',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/02/19/952/_KMHLpS45kgRFhmMU1rXPgvcfE4.jpg'
      }, {
        'title': '美国东部',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/02/19/952/no4AHPnG1fzDnbgZomxg2ysobVM.jpg'
      }, {
        'title': '加拿大',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/02/19/952/DxI9s0Q5_0r_BYNrdbk6Zf-OvuI.jpg'
      }, {
        'title': '夏威夷',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/02/19/952/0Vjxz9AvguP1E-z0A6F9SWBjB1Q.jpg'
      }, {
        'title': '日本',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/02/19/952/FBbOVlJMwOTv--dojEsDb9mN_gE.jpg'
      }, {
        'title': '欧洲',
        'image': 'http://assets.tourscool.com/uploads/inn/2019/08/22/952/9hCjSHS0cmEFm--EonL_NPUGqdQ.jpg'
      }, {
        'title': '澳大利亚',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/02/19/952/754h0Rfh3ECsZs16BDrV131OBy4.jpg'
      }, {
        'title': '新西兰',
        'image': 'https://assets.tourscool.com/uploads/inn/2019/02/19/952/BgR1vC7Ob9bCz__wCw7OFrCkrpM.jpg'
      }
    ],
    // 稀饭推荐
    recommd: [
      {
        "product_id": 297,
        "name": "（7天）【含接送机】美国旧金山+洛杉矶跟团游·三晚入住云霄赌场酒店一睹城市夜景+第三人同房价格钜惠+射击等多种行程任选+人间仙境优胜美地",
        "special_icons": [],
        "special_price": "",
        "default_price": 24522,
        "image": "https://img.tourscool.com/images/product/5c88e5420ba14.jpg",
        "is_soldout": false,
        "margin": "40.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 76,
        "agent_sales": 3,
        "comment_score": "4.6",
        "product_type": 1,
        "agent_fee": "￥173",
        "departure_city": "旧金山",
        "min_book_date": "",
        "coupons": [
          "现金券￥49"
        ],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 896,
        "name": "(2天)【畅玩美西】美国洛杉矶+圣地亚哥跟团游•洛杉矶环球影城+迪士尼乐园+棕榈泉奥特莱斯+圣地亚哥海景火车",
        "special_icons": [
          {
            "type": "percentage",
            "title": "7.5折"
          }
        ],
        "special_price": "￥365.48",
        "default_price": 48710,
        "image": "https://img.tourscool.com/images/product/5c99c1ae567cb.jpg",
        "is_soldout": false,
        "margin": "40.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 2,
        "agent_sales": 3,
        "comment_score": "0.0",
        "product_type": 1,
        "agent_fee": "￥35",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [
          "现金券￥49"
        ],
        "is_favorite": false,
        "icons_show": [
          "热门"
        ],
        "icons_tour": [
          {
            "title": "双语导游",
            "content": ""
          },
          {
            "title": "主题乐园",
            "content": ""
          }
        ],
        "is_video": false
      },
      {
        "product_id": 3126,
        "name": "(3天)【自由畅游】美国洛杉矶+圣地亚哥跟团游•迪士尼主题乐园+好莱坞环球影城+圣地亚哥海洋世界",
        "special_icons": [],
        "special_price": "",
        "default_price": 60738,
        "image": "https://img.tourscool.com/images/product/5cf4c58693583.jpg",
        "is_soldout": false,
        "margin": "17.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 209,
        "agent_sales": 1,
        "comment_score": "4.7",
        "product_type": 1,
        "agent_fee": "￥24",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 262,
        "name": "（4天）【人间仙境】美国旧金山+洛杉矶跟团游▪人间仙境优胜美地+南加主题项目任选+环球影城or迪士尼冒险乐园or迪士尼主题乐园等+旧金山市区游+坐复古叮当车穿越浪漫九曲花街",
        "special_icons": [],
        "special_price": "",
        "default_price": 10560,
        "image": "https://img.tourscool.com/images/product/5c88d08f6a7b8.jpg",
        "is_soldout": false,
        "margin": "40.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 35,
        "agent_sales": 1,
        "comment_score": "5.0",
        "product_type": 1,
        "agent_fee": "￥112",
        "departure_city": "旧金山",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 3353,
        "name": "(4天)【买二送一】美国拉斯维加斯跟团游•全程云霄塔赌场酒店俯瞰震撼城市夜景+羚羊彩穴+两天精华游7选2+奥特莱斯享超低折扣",
        "special_icons": [],
        "special_price": "",
        "default_price": 8245,
        "image": "https://img.tourscool.com/images/product/5c3ff1d07de79.jpg",
        "is_soldout": false,
        "margin": "0.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 43,
        "agent_sales": 4,
        "comment_score": "4.6",
        "product_type": 1,
        "agent_fee": "",
        "departure_city": "拉斯维加斯/洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 309,
        "name": "(4天)【舒适之旅】美国洛杉矶+拉斯维加斯跟团游▪精选舒适酒店+饱览西部风光+资深品质巴士接送+Vegas 经典歌舞秀",
        "special_icons": [],
        "special_price": "",
        "default_price": 11370,
        "image": "https://img.tourscool.com/images/product/5c98c80687945.jpg",
        "is_soldout": false,
        "margin": "40.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 18,
        "agent_sales": 4,
        "comment_score": "5.0",
        "product_type": 1,
        "agent_fee": "￥81",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 254,
        "name": "(3天)【美西至尊精品小环线】美国洛杉矶+旧金山跟团游▪人间仙境优胜美地+一号公路+北欧风情丹麦小镇+高新科技苹果总部",
        "special_icons": [],
        "special_price": "",
        "default_price": 7345,
        "image": "https://img.tourscool.com/images/product/5c88ce90d5167.jpg",
        "is_soldout": false,
        "margin": "23.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 59,
        "agent_sales": 2,
        "comment_score": "5.0",
        "product_type": 1,
        "agent_fee": "￥41",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 357,
        "name": "(4天)【多人立减】美国洛杉矶+旧金山跟团游▪品质地接服务保障+含接送机省时省心+学霸必打卡诺贝尔名校+金门大桥+渔人码头",
        "special_icons": [],
        "special_price": "",
        "default_price": 156081,
        "image": "https://img.tourscool.com/images/product/5c9c7b07e7508.jpg",
        "is_soldout": false,
        "margin": "40.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 68,
        "agent_sales": 1,
        "comment_score": "5.0",
        "product_type": 1,
        "agent_fee": "￥112",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 1381,
        "name": "(10天)【冰雪奇缘】美国拉斯维加斯+盐湖城•黄石公园+羚羊彩穴+雪王山庄半自助游·主题项目9选1+魅力光影+滑雪乐趣+冰雪热泉",
        "special_icons": [],
        "special_price": "",
        "default_price": 6836,
        "image": "https://img.tourscool.com/images/product/5bc71ba44fb59.jpg",
        "is_soldout": false,
        "margin": "18.05",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 12,
        "agent_sales": 0,
        "comment_score": "0.0",
        "product_type": 1,
        "agent_fee": "￥273",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      }
    ],
    // 当地玩乐
    join: [
      {
        "product_id": 2088,
        "name": "美国旅游拉斯维加斯佩吉上下羚羊谷单门票 · 多时间段可选择",
        "special_icons": [],
        "special_price": "",
        "default_price": 59072,
        "image": "https://img.tourscool.com/images/product/5c1c8dbb98557.jpg",
        "is_soldout": false,
        "margin": "20.00",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 0,
        "sales": 24,
        "agent_sales": 5,
        "comment_score": "4.9",
        "product_type": 2,
        "agent_fee": "￥12",
        "departure_city": "拉斯维加斯",
        "min_book_date": "明日",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 2090,
        "name": "上羚羊谷单门票 · 非黄金时间入谷",
        "special_icons": [],
        "special_price": "",
        "default_price": "￥233.06",
        "image": "https://img.tourscool.com/images/product/5c1c96706019b.jpg",
        "is_soldout": false,
        "margin": "20.00",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 0,
        "sales": 13,
        "agent_sales": 0,
        "comment_score": "0.0",
        "product_type": 2,
        "agent_fee": "￥9",
        "departure_city": "拉斯维加斯",
        "min_book_date": "明日",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 3220,
        "name": "旧金山-> 洛杉矶单程巴士",
        "special_icons": [],
        "special_price": "",
        "default_price": 59074,
        "image": "https://img.tourscool.com/images/product/5d034d19cf19a.jpg",
        "is_soldout": false,
        "margin": "20.00",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 0,
        "sales": 7,
        "agent_sales": 0,
        "comment_score": "0.0",
        "product_type": 2,
        "agent_fee": "￥15",
        "departure_city": "旧金山",
        "min_book_date": "明日",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 1843,
        "name": "拉斯维加斯KA秀门票:A/B/C/D等票",
        "special_icons": [],
        "special_price": "",
        "default_price": 8888,
        "image": "https://img.tourscool.com/images/product/5bee3ed7acad2.jpg",
        "is_soldout": false,
        "margin": "21.36",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 1,
        "sales": 3,
        "agent_sales": 0,
        "comment_score": "0.0",
        "product_type": 2,
        "agent_fee": "￥49",
        "departure_city": "拉斯维加斯",
        "min_book_date": "明日",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 1866,
        "name": "拉斯维加斯O秀秀票",
        "special_icons": [],
        "special_price": "",
        "default_price": 10033,
        "image": "https://img.tourscool.com/images/product/5bf5118da2165.jpg",
        "is_soldout": false,
        "margin": "10.58",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 0,
        "sales": 3,
        "agent_sales": 0,
        "comment_score": "0.0",
        "product_type": 2,
        "agent_fee": "",
        "departure_city": "拉斯维加斯",
        "min_book_date": "2019-11-6",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 1868,
        "name": "【Le Rêve 梦秀】Grandview座位",
        "special_icons": [],
        "special_price": "",
        "default_price": 12888,
        "image": "https://img.tourscool.com/images/product/5bf51c6cd52a8.png",
        "is_soldout": false,
        "margin": "27.05",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 0,
        "sales": 3,
        "agent_sales": 0,
        "comment_score": "0.0",
        "product_type": 2,
        "agent_fee": "￥68",
        "departure_city": "拉斯维加斯",
        "min_book_date": "明日",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 2093,
        "name": "下羚羊谷单门票",
        "special_icons": [],
        "special_price": "",
        "default_price": 339,
        "image": "https://img.tourscool.com/images/product/5c1ca9a1e68e4.jpg",
        "is_soldout": false,
        "margin": "20.00",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 0,
        "sales": 3,
        "agent_sales": 1,
        "comment_score": "0.0",
        "product_type": 2,
        "agent_fee": "￥13",
        "departure_city": "拉斯维加斯",
        "min_book_date": "明日",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 3222,
        "name": "洛杉矶-> 旧金山单程巴士",
        "special_icons": [],
        "special_price": "",
        "default_price": 388,
        "image": "https://img.tourscool.com/images/product/5d035808d25c1.jpg",
        "is_soldout": false,
        "margin": "20.00",
        "product_entity_type": 0,
        "self_support": 0,
        "is_play": 0,
        "sales": 2,
        "agent_sales": 2,
        "comment_score": "0.0",
        "product_type": 2,
        "agent_fee": "￥15",
        "departure_city": "洛杉矶",
        "min_book_date": "明日",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      }
    ],
    // 精品小团 
    company: [{
      "product_id": 2824,
      "name": "（8天）美国洛杉矶+圣地亚哥+拉斯维加斯跟团游▪摄影圣地+城市风光+峡谷刺激+摄影圣地+优胜美地+独家景点（高级酒店）",
      "special_icons": [],

      "special_price": "",
      "default_price": 10580,
      "image": "https://img.tourscool.com/images/product/5cb9966bd5b4b.jpg",
      "is_soldout": false,
      "margin": "4.05",
      "product_entity_type": 1,
      "self_support": 1,
      "is_play": 0,
      "sales": 15,
      "agent_sales": 0,
      "comment_score": "0.0",
      "product_type": 1,
      "agent_fee": "",
      "departure_city": "洛杉矶",
      "min_book_date": "",
      "coupons": [],
      "is_favorite": false,
      "icons_show": [],
      "icons_tour": [],
      "is_video": false
    },
    {
      "product_id": 2823,
      "name": "(11天)【私家团】美国东西海岸纽约+华盛顿+洛杉矶+拉斯维加斯+旧金山11日游•羚羊峡谷+大峡谷+纽约市区观光",
      "special_icons": [],
      "special_price": "",
      "default_price": 12780,
      "image": "https://img.tourscool.com/images/product/5cd277809ee7a.jpg",
      "is_soldout": false,
      "margin": "0.00",
      "product_entity_type": 1,
      "self_support": 1,
      "is_play": 0,
      "sales": 15,
      "agent_sales": 0,
      "comment_score": "0.0",
      "product_type": 1,
      "agent_fee": "",
      "departure_city": "纽约",
      "min_book_date": "",
      "coupons": [],
      "is_favorite": false,
      "icons_show": [],
      "icons_tour": [],
      "is_video": false
    },
    {
      "product_id": 2893,
      "name": "（6天）【双城攻略】美国洛杉矶+拉斯维加斯6日游·精品小团+网红打卡+美食体验+经典景点",
      "special_icons": [],
      "special_price": "",
      "default_price": 7390,
      "image": "https://img.tourscool.com/images/product/5cd274c153f22.jpg",
      "is_soldout": false,
      "margin": "0.00",
      "product_entity_type": 1,
      "self_support": 1,
      "is_play": 0,
      "sales": 14,
      "agent_sales": 0,
      "comment_score": "0.0",
      "product_type": 1,
      "agent_fee": "",
      "departure_city": "洛杉矶",
      "min_book_date": "",
      "coupons": [],
      "is_favorite": false,
      "icons_show": [],
      "icons_tour": [],
      "is_video": false
    },
    {
      "product_id": 2830,
      "name": "（11天）【私家团】美国东西海岸纽约+华盛顿+洛杉矶+拉斯维加斯+旧金山11日游· 羚羊峡谷+大峡谷+纽约市区观光+全程豪华酒店",
      "special_icons": [],
      "special_price": "",
      "default_price": 17030,
      "image": "https://img.tourscool.com/images/product/5cd277809e911.jpg",
      "is_soldout": false,
      "margin": "5.18",
      "product_entity_type": 1,
      "self_support": 1,
      "is_play": 0,
      "sales": 9,
      "agent_sales": 0,
      "comment_score": "0.0",
      "product_type": 1,
      "agent_fee": "￥408",
      "departure_city": "纽约",
      "min_book_date": "",
      "coupons": [],
      "is_favorite": false,
      "icons_show": [],
      "icons_tour": [],
      "is_video": false
    },
    {
      "product_id": 2819,
      "name": "（11天）【私家小团】美国洛杉矶+盐湖城+拉斯维加斯11日游 ·精品小团+黄石公园+拱门国家公园+锡安国家公园",
      "special_icons": [],
      "special_price": "",
      "default_price": 17620,
      "image": "https://img.tourscool.com/images/product/5cb99c396f9f1.jpg",
      "is_soldout": false,
      "margin": "0.00",
      "product_entity_type": 1,
      "self_support": 1,
      "is_play": 0,
      "sales": 9,
      "agent_sales": 0,
      "comment_score": "0.0",
      "product_type": 1,
      "agent_fee": "",
      "departure_city": "洛杉矶",
      "min_book_date": "",
      "coupons": [],
      "is_favorite": false,
      "icons_show": [],
      "icons_tour": [],
      "is_video": false
    },
    {
      "product_id": 2821,
      "name": "（11天）【私家小团】美国洛杉矶+盐湖城+拉斯维加斯11日游 ·精品小团+黄石公园+拱门国家公园+锡安国家公园+全程高级酒店住宿",
      "special_icons": [],
      "special_price": "",
      "default_price": 19980,
      "image": "https://img.tourscool.com/images/product/5cb99c396e60a.jpg",
      "is_soldout": false,
      "margin": "0.00",
      "product_entity_type": 1,
      "self_support": 1,
      "is_play": 0,
      "sales": 5,
      "agent_sales": 0,
      "comment_score": "0.0",
      "product_type": 1,
      "agent_fee": "",
      "departure_city": "洛杉矶",
      "min_book_date": "",
      "coupons": [],
      "is_favorite": false,
      "icons_show": [],
      "icons_tour": [],
      "is_video": false
    },
    {
      "product_id": 2892,
      "name": "（4天）【休闲游】美国洛杉矶4日游·4人小团+网红打卡+美食体验",
      "special_icons": [],
      "special_price": "",
      "default_price": 4710,
      "image": "https://img.tourscool.com/images/product/5cd2763577cfa.jpg",
      "is_soldout": false,
      "margin": "0.00",
      "product_entity_type": 1,
      "self_support": 1,
      "is_play": 0,
      "sales": 4,
      "agent_sales": 0,
      "comment_score": "0.0",
      "product_type": 1,
      "agent_fee": "",
      "departure_city": "洛杉矶",
      "min_book_date": "",
      "coupons": [],
      "is_favorite": false,
      "icons_show": [],
      "icons_tour": [],
      "is_video": false
    }],
    // 邮轮
    car: [
      {
        "product_id": 1283,
        "name": "<墨西哥-恩森纳达5天豪华邮轮>【卡特琳那岛+恩森那达+拉普发多拉喷泉+阿维隆+小酒馆欣赏乐队演奏+太平洋畅航】",
        "special_icons": [],
        "special_price": "",
        "default_price": 25968,
        "image": "https://img.tourscool.com/images/product/5bacbf54809b5.jpg",
        "is_soldout": false,
        "margin": "0.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 2,
        "agent_sales": 0,
        "comment_score": "0.0",
        "product_type": 7,
        "agent_fee": "",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      },
      {
        "product_id": 1281,
        "name": "<墨西哥-恩森纳达4天豪华游轮>【洛杉矶上船+恩森那达+拉普发多拉喷泉+小酒馆欣赏乐队演奏+太平洋畅航】",
        "special_icons": [],
        "special_price": "",
        "default_price": 59072,
        "image": "https://img.tourscool.com/images/product/5baca1d7431e4.jpg",
        "is_soldout": false,
        "margin": "0.00",
        "product_entity_type": 1,
        "self_support": 0,
        "is_play": 0,
        "sales": 2,
        "agent_sales": 2,
        "comment_score": "0.0",
        "product_type": 7,
        "agent_fee": "",
        "departure_city": "洛杉矶",
        "min_book_date": "",
        "coupons": [],
        "is_favorite": false,
        "icons_show": [],
        "icons_tour": [],
        "is_video": false
      }
    ],
    // 分栏页详情
    pagelist: [],
    //  用户名
    user: '你还没有设置昵称',
    // 购物车数据包
    ccartdate: [
    ],
    // 列表页
    SearchData: ["美西", "美东", "加拿大", "夏威夷", "日本", "东南亚", "欧洲", "澳新"],
    listData: [
      {
        "route_title": "美西全部线路265条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/2eFMjw0jVpqnFG7zzQtPBUQW9ao.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "洛杉矶",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/92h21TT0UKOCGCw3dqt8Vn4P7AY.jpg"
          },
          {
            "name": "旧金山",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/vI6rTPLnHDyUL-qhhttuL3lhzrI.jpg"
          },
          {
            "name": "拉斯维加斯",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/XYl21ovxiQV0r9HXFHpCWcS1NX4.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["洛杉矶", "拉斯维加斯", "旧金山", "盐湖城", "西雅图", "檀香山", "纽约", "圣地亚哥", "迈阿密"],
      },
      {
        "route_title": "美东全部线路232条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/4pNcJgNpFZXnRkTTyOBRpxE6ttI.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "华盛顿",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/S3eKrRKj1cAulfRVtVwg69xkIFE.jpg"
          },
          {
            "name": "纽约",
            "imgUrl": "http://assets.tourscool.com/uploads/inn/2019/06/28/952/Cr_Fv-a0DsTTa0Gj5MECIZpSvcQ.jpg"
          },
          {
            "name": "波士顿",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/c8eV_ZlfBZBhYs5OuQLgX-0p65g.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["纽约", "休斯顿", "波士顿", "华盛顿", "费城", "迈阿密", "盖瑟斯堡", "西雅图", "圣胡安", "亚特兰大", "多伦多", "罗德岱堡", "芝加哥", "布法罗", "圣安东尼奥", "奥斯汀", "达拉斯"],
      },
      {
        "route_title": "加拿大全部线路59条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/9b01KLXHbVXXV3qJE2cUgrp9HT8.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "温哥华",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/JMlxLaJe_DYHUmqyCjMZSMI2oOs.jpg"
          },
          {
            "name": "多伦多",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/RZraUq36cbBwfj7nCO71Ognfzj0.jpg"
          },
          {
            "name": "魁北克",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/vxnoOk8Y4a6Aw0ko5ElY9qcR-_U.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["卡尔加里", "温哥华", "西雅图", "黄刀镇市区", "黄刀镇"],
      },
      {
        "route_title": "夏威夷全部线路31条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/roxH5rZiyaO05U1Hpz7zWrBoQdc.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "檀香山",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/kGqTLvcFybwc7CjxKbaC-UN0FsU.jpg"
          },
          {
            "name": "大岛",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/XLddq2XPE2lg6MonKnEcdHEfmek.jpg"
          },
          {
            "name": "茂宜岛",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/59q1Noi7mA2w2CJtiz0pu9TrCSg.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["檀香山", "希洛", "茂宜岛", "卡胡卢伊"],
      },
      {
        "route_title": "日本全部线路404条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/ZwoBUZ5p-AOMup1mO_PUF-XyZHg.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "大版",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/8PVnMBr3u-SkbbmUdbAHQdDlfLw.jpg"
          },
          {
            "name": "京都",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/Ba-nG5m5J-kZ4x5xv7blll9hHdk.jpg"
          },
          {
            "name": "东京",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/hzaPX3nGcLxWceXP4A1MAbsv99A.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["大版", "东京", "京都", "新宿", "冲绳", "名古屋", "札幌", "难波", "北海道", "那霸", "奈良", "梅田", "长崎", "神户", "福冈", "静冈", "千叶", "岐阜县", "熊本县", "广岛市", "箱根", "兵库", "白滨"],
      },
      {
        "route_title": "东南亚全部线路309条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/G5Pvqd74wvavCk2y7HMiiCQnnTY.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "普吉",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/vdiy_TOKgAd6sceLUf7juCOdWYM.jpg"
          },
          {
            "name": "曼谷",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/0dSZuaSIlGqBGMAS_u53Hcctv5o.jpg"
          },
          {
            "name": "芭提雅",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/gp_Rx7LOvkS_qxwE1yxDk3AnUHk.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["曼谷", "普吉", "清迈", "芭提雅", "甲米", "苏梅岛", "华欣"],
      },
      {
        "route_title": "欧洲全部线路592条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/ZUbXZ0wtF4woz3Omr_uHgYAIoP4.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "巴黎",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/gwRulcEnN3wLEaBNKNqTFdN2E9s.jpg"
          },
          {
            "name": "伦敦",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/EvfwGFBelXTs10I-A4H743U6oR4.jpg"
          },
          {
            "name": "罗马",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/1T_n3usW3IO899URqWuF4-dmrWQ.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["法兰克福", "巴黎", "雷克雅未克", "伦敦", "慕尼黑", "阿姆斯特丹", "巴塞罗那", "苏黎世", "卢塞恩", "罗马", "柏林", "马德里", "萨尔茨堡", "威尼斯", "布达佩斯", "科隆", "布拉格", "哥本哈根", "佛罗伦萨", "维也纳", "里斯本", "塞维利亚", "日内瓦", "英戈尔施塔特", "米兰", "梅青根", "斯图加特", "罗瓦涅米", "里昂", "马拉加", "尼斯", "纽伦堡", "萨利色尔卡", "哥德堡", "弗洛姆", "圣雷莫", "阿维尼翁", "汉堡", "瓦伦西亚", "特罗姆瑟", "赫尔辛基", "爱丁堡", "希尔克内斯", "加米施-帕腾基兴", "斯特拉特福", "因特拉肯", "马赛", "洛桑", "斯德哥尔摩", "海德堡", "摩纳哥", "里加", "塔林", "温莎", "加的夫", "斯普利特"],
      },
      {
        "route_title": "澳新全部线路609条",
        "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/HJDYykoflNtujpLXyWukGDfBjSc.png",
        "title": "热门目的地",
        "Destination": [
          {
            "name": "悉尼",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/AqVPXo_c0d8_elmLOqFifnj8qUs.jpg"
          },
          {
            "name": "皇后镇",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/Nhk5qqFBlFzrb7IBGofdxpUgsxE.jpg"
          },
          {
            "name": "墨尔本",
            "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/rxrWrnWW8IbDEcNeZl6nDXXN0g8.jpg"
          }
        ],
        "alltitle": "全部目的地",
        "Alladdress": ["皇后镇", "奥克兰", "墨尔本", "基督城", "凯恩斯", "悉尼", "黄金海岸", "罗托鲁瓦", "霍巴特", "艾尔利滩", "蒂阿瑙", "法兰士·约瑟夫", "布里斯班", "乌鲁鲁", "惠灵顿", "特卡波", "珀斯", "陶波", "但尼丁", "阿德莱德", "瓦纳卡", "汉密尔顿岛(昆士兰州)", "凯库拉", "库克山", "南迪", "白日梦岛", "福克斯小镇", "格雷茅斯", "林肯港", "道格拉斯港", "玛塔玛塔小镇", "奥马鲁", "杰拉尔顿", "堪培拉", "派希亚", "尼尔森", "哈密尔顿", "布兰尼姆", "陶波湖", "汤斯维尔", "朗塞斯顿", "因弗卡吉尔", "蓝山"],
      },
    ],
    listDataone: {
      "route_title": "澳新全部线路609条",
      "route_ingUrl": "https://assets.tourscool.com/uploads/inn/2019/02/19/952/HJDYykoflNtujpLXyWukGDfBjSc.png",
      "title": "热门目的地",
      "Destination": [
        {
          "name": "悉尼",
          "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/AqVPXo_c0d8_elmLOqFifnj8qUs.jpg"
        },
        {
          "name": "皇后镇",
          "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/Nhk5qqFBlFzrb7IBGofdxpUgsxE.jpg"
        },
        {
          "name": "墨尔本",
          "imgUrl": "https://assets.tourscool.com/uploads/inn/2019/01/26/952/rxrWrnWW8IbDEcNeZl6nDXXN0g8.jpg"
        }
      ],
      "alltitle": "全部目的地",
      "Alladdress": ["皇后镇", "奥克兰", "墨尔本", "基督城", "凯恩斯", "悉尼", "黄金海岸", "罗托鲁瓦", "霍巴特", "艾尔利滩", "蒂阿瑙", "法兰士·约瑟夫", "布里斯班", "乌鲁鲁", "惠灵顿", "特卡波", "珀斯", "陶波", "但尼丁", "阿德莱德", "瓦纳卡", "汉密尔顿岛(昆士兰州)", "凯库拉", "库克山", "南迪", "白日梦岛", "福克斯小镇", "格雷茅斯", "林肯港", "道格拉斯港", "玛塔玛塔小镇", "奥马鲁", "杰拉尔顿", "堪培拉", "派希亚", "尼尔森", "哈密尔顿", "布兰尼姆", "陶波湖", "汤斯维尔", "朗塞斯顿", "因弗卡吉尔", "蓝山"],
    },
    // 商品详情数据
    DetailData: '',
    // 地址栏数据;
    num: 0,
    address: [{
      username: "dsads",
      userpwd: "19746",
      useraddress: "重庆九龙坡",
      useremail: "527429286@qq.com",
      loc: [
        {
          text: "河北",
          num: -1
        },
        {
          text: "秦皇岛",
          num: -1
        },
        {
          text: "北戴河",
          num: -1
        }
      ],
    }
    ],
  },
  getters: {
    // 计算结算页面里面的数据
    allshop(state) {
      // 商品总价
      let allnuminfo = 0;
      let allnum = 0;
      state.ccartdate.forEach((a) => {
        allnuminfo += a.ollpric * a.num;
      })
      allnum = allnuminfo;
      return {
        allnum,
      }
    }
  },
  mutations: {
    // 详情页数据方法
    DetailMut(state, obj) {
      state.DetailData = obj;
    },
    // 购物车页面
    addcart(state) {
      window.localStorage.setItem('list1', JSON.stringify(state.ccartdate));
      let bool = true;
      let storage = window.localStorage.getItem("list1");
      let date = storage == "null" ? [] : JSON.parse(storage);
      state.ccartdate.forEach((obj) => {
        if (obj.product_id === state.DetailData.product_id) {
          obj.num++;
          bool = false;
          return false;
        }
      })
      if (bool) {
        Vue.set(state.DetailData, 'num', 1);
        state.ccartdate.push(state.DetailData);
        window.localStorage.setItem('list1', JSON.stringify(state.ccartdate));
      }
    },
    // 删除购物车所选的数据
    cartdel(state, i) {
      window.localStorage.setItem('list1', JSON.stringify(state.ccartdate));
      let storage = window.localStorage.getItem("list1");
      let date = storage == "null" ? [] : JSON.parse(storage);
      date.splice(i, 1);
      state.ccartdate = date;
      window.localStorage.setItem('list1', JSON.stringify(state.ccartdate));
    },
    // 列表数据方法
    Listn(state, n) {
      state.listDataone = state.listData[n];
    },
    //操作地址栏数据
    address(state, obj) {
      console.log(obj);
      state.address.push(obj);
    },
    // 获取修改数组的下标
    idx(state, i) {
      state.num = i;
      console.log(state.num);
    },
    // 编辑新数据
    editaddress(state, obj) {
      state.address[state.num] = obj;
    }
  }
})
