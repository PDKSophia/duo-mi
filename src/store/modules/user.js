import * as types from '../types'

const state = {
    UserOtherIcon : [
        {
            icon_url : require('../../assets/weather.png'),
            label : '多米天气',
            type : 'weather'
        },
        {
            icon_url : require('../../assets/tab/pic.png'),
            label : '多米壁纸',
            type : 'album'
        },
        {
            icon_url : require('../../assets/game.png'),
            label : '多米游戏',
            type : 'game'
        },
        {
            icon_url : require('../../assets/tab/shop.png'),
            label : '多米商城',
            type : 'shop'
        },
        {
            icon_url : require('../../assets/news.png'),
            label : '多米社区',
            type : 'community'
        },
        {
            icon_url : require('../../assets/detail.png'),
            label : '使用手册',
            type : 'handbook'
        },
    ],
    ScheduleList : [] 
}

const actions = {
    set_schedule_list ({commit}, JsonData) {
        commit(types.SET_SCHEDULE_LIST, {data:JsonData})
    }
}

const mutations = {
    [types.SET_SCHEDULE_LIST] (state, payload) {
        state.ScheduleList.push(payload.data)
    }
}

export default {
    state,
    actions,
    mutations
}