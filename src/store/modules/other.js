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
    isRequireWeather : true
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