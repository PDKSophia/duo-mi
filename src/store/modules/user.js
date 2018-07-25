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
            label : '多米相册',
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
    ]
}

const actions = {

}

const mutations = {

}

export default {
    state,
    actions,
    mutations
}