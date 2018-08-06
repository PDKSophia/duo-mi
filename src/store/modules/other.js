import * as types from '../types'

const state = {
    gameList : [
        {
            img_url : 'http://www.pengdaokuan.cn/DuApp/static/img/game1.02a7a4f.jpg',
            game_name : '王者荣耀',
            post_year : 2017,
            summary : '组团开黑，智取超神，victory ！',
            game_id : 1001
        },
        {
            img_url : 'http://www.pengdaokuan.cn/DuApp/static/img/game2.96ca40f.jpg',
            game_name : '绝地求生',
            post_year : 2018,
            summary : '正版吃鸡手游，全网开测',
            game_id : 1002
        },
    ],
    CityWeatherInfo : [
        // {
        //     city : '成都',                                                  // 城市名   
        //     alarms : [],                                                    // 天气预警
        //     indexes : [],                                                   // 其他一些预警信息
        //     pm25 : {},                                                      // pm2.5 信息
        //     provinceName : '四川省',                                         // 省份
        //     realtime : {},                                                  // 其他指数，如空气、风力大小
        //     weatherDetailsInfo : {                                          // 天气情况详情 
        //         publishTime : "2018-07-26 17:00:00",                        // 更新时间
        //         weather3HoursDetailsInfos : [{weather : '雷阵雨'}]           // 未来天气情况细节
        //     },
        //     weathers : {}                                                   // 未来七天天气情况
        // }
    ],
    isRequireWeather : true,
    shoplist : [
        {
            id : 1,
            title : '九阳电热水壶',
            content : '全新回答是淡爱上怕大家扫大街阿睡觉阿三等奖爱睡觉阿婆就啊跑就啊睡觉阿婆的就怕',
            price : 198,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-3.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'NORMAL'
        },
        {
            id : 2,
            title : 'MacBook Pro',
            content : '全新回答是淡爱上怕大家扫大街阿睡觉阿三等奖爱睡觉阿婆就啊跑就啊睡觉阿婆的就怕',
            price : 8888,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-4.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 3,
            title : '小米6 全新',
            content : '全新回答是淡爱上怕大家扫大街阿睡觉阿三等奖爱睡觉阿婆就啊跑就啊睡觉阿婆的就怕',
            price : 2988,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-5.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'TRANSTION'
        },
        {
            id : 4,
            title : 'Nike 空军一号 正品',
            content : 'kappa卡帕男运动短袖 休闲纯白棉t恤 圆领短袖男潮 2018早春t恤男',
            price : 799,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/A-4.png',
            user : '1505060201',
            kind : 'BOOK',
            time : '2018-07-17 21:00',
            state : 'NORMAL'
        },
        {
            id : 5,
            title : 'kappa卡帕男运动短袖 休闲纯白棉t恤 圆领短袖男潮 2018早春t恤男',
            content : 'kappa卡帕男运动短袖 休闲纯白棉t恤 圆领短袖男潮 2018早春t恤男',
            price : 499,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/A-1.png',
            user : '1505060201',
            kind : 'BOOK',
            time : '2018-07-17 21:00',
            state : 'NORMAL'
        },
        {
            id : 6,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/A-3.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 7,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-2.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 8,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-1.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 9,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-4.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 10,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-3.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 11,
            title : '九阳电热水壶',
            content : '全新回答是淡爱上怕大家扫大街阿睡觉阿三等奖爱睡觉阿婆就啊跑就啊睡觉阿婆的就怕',
            price : 198,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-3.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'NORMAL'
        },
        {
            id : 12,
            title : 'MacBook Pro',
            content : '全新回答是淡爱上怕大家扫大街阿睡觉阿三等奖爱睡觉阿婆就啊跑就啊睡觉阿婆的就怕',
            price : 8888,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-4.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 13,
            title : '小米6 全新',
            content : '全新回答是淡爱上怕大家扫大街阿睡觉阿三等奖爱睡觉阿婆就啊跑就啊睡觉阿婆的就怕',
            price : 2988,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-5.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'TRANSTION'
        },
        {
            id : 14,
            title : 'Nike 空军一号 正品',
            content : 'kappa卡帕男运动短袖 休闲纯白棉t恤 圆领短袖男潮 2018早春t恤男',
            price : 799,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/A-4.png',
            user : '1505060201',
            kind : 'BOOK',
            time : '2018-07-17 21:00',
            state : 'NORMAL'
        },
        {
            id : 15,
            title : 'kappa卡帕男运动短袖 休闲纯白棉t恤 圆领短袖男潮 2018早春t恤男',
            content : 'kappa卡帕男运动短袖 休闲纯白棉t恤 圆领短袖男潮 2018早春t恤男',
            price : 499,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/A-1.png',
            user : '1505060201',
            kind : 'BOOK',
            time : '2018-07-17 21:00',
            state : 'NORMAL'
        },
        {
            id : 16,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/A-3.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 17,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-2.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 18,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-1.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 19,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-4.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        },
        {
            id : 20,
            title : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            content : '迷彩七分裤男士短裤潮牌宽松夏季薄款运动休闲百搭加肥加大码7分',
            price : 299,
            address : '成都',
            img_url : 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-3.png',
            user : '1505060201',
            kind : 'GROCERY',
            time : '2018-07-17 21:00',
            state : 'FINISH'
        }
    ]
}

const actions = {
    NeedRequireWeather ({commit}) {
        commit(types.NEED_REQUIRE_WEATHWE)
    },
    setCityWeatherData ({commit}, jsonData) {
        commit(types.SET_CUR_CITY_WEATHER, {data: jsonData})
    }
}

const mutations = {
    [types.SET_CUR_CITY_WEATHER] (state, payload) {
        state.CityWeatherInfo = [].concat(payload.data)
        // console.log(state.CityWeatherInfo)
    },
    [types.NEED_REQUIRE_WEATHWE] (state) {
        state.isRequireWeather = false
    }
}

export default {
    state,
    actions,
    mutations
}