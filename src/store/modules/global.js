import * as types from '../types'
import tool from '../../lib/tool'

const state = {
    current_active : 0,
    requestApiFlag : true,
    MovieHotList : [],
    MovieTopList : [],
    MusicList : [],
    WallPaper : [],
    DownLoadPaper : {},
    Mp3Playing : false,
    playMp3Obj : {
        id : '',            // 歌曲id
        index : '',         // 在列表中的下标
        mp3_url : '',       // 播放地址
        playing : false,    // 是否正在播放
    }
}

const actions = {
    setCurrentActive ({commit}, active) {
        commit(types.SET_CURRENT_ACTIVE, active)
    },

    changeRequestApi ({commit}, values) {
        commit(types.CHANGE_REQUEST_API, values)
    },

    setMovieHotList ({commit}, JsonData) {
        commit(types.SET_HOT_MOVIE_LIST, {data: JsonData})
    },

    setMovieTopList ({commit}, JsonData) {
        commit(types.SET_TOP_MOVIE_LIST, {data: JsonData})
    },

    setMusicList ({commit}, JsonData) {
        commit(types.SET_ONE_MUSIC_LIST, {data: JsonData})
    },

    setWallPaper ({commit}, JsonData) {
        commit(types.SET_WALLPAPER_LIST, {data : JsonData})
    },

    setDownLoadPaper ({commit}, JsonData) {
        commit (types.SET_DOWN_LOAD_PAPER, {data : JsonData})
    },

    change_music_play ({commit}) {
        commit (types.CHANGE_MUSIC_PLAY)
    },

    change_music_pause ({commit}) {
        commit (types.CHANGE_MUSIC_PAUSE)
    },

    track_play_music({commit}, JsonData) {
        commit (types.TRACK_PLAY_MUSIC, {data : JsonData}) 
    }
}

const mutations = {
    [types.SET_CURRENT_ACTIVE] (state, active) {
        state.current_active = active
    },
    
    [types.CHANGE_REQUEST_API] (state, values) {
        state.requestApiFlag = values
    },

    [types.SET_HOT_MOVIE_LIST] (state, payload) {
        payload.data.map((item) => {
            state.MovieHotList.push({
                id : item.id,
                directors : item.directors,
                genres : item.genres,
                m_id : item.m_id,
                original_title : item.original_title,
                pic : item.pic,
                score : item.score,
                count : tool.MarkScoreToStar(item.score),
                summary :item.summary,
                talk : item.talk,
                title : item.title,
                type : item.tpye,
                year : item.year
            })
        })
    },

    [types.SET_TOP_MOVIE_LIST] (state, payload) {
        payload.data.map((item) => {
            state.MovieTopList.push({
                id : item.id,
                directors : item.directors,
                genres : item.genres,
                m_id : item.m_id,
                original_title : item.original_title,
                pic : item.pic,
                score : item.score,
                count : tool.MarkScoreToStar(item.score),
                summary :item.summary,
                talk : item.talk,
                title : item.title,
                type : item.tpye,
                year : item.year
            })
        })
    },

    [types.SET_ONE_MUSIC_LIST] (state, payload) {
        payload.data.map((item)=>{
            state.MusicList.push({
                title : item.title,
                author : item.author.user_name,
                forward : item.forward,
                img_url : item.img_url,
                post_date : ((item.post_date).substring(0, 10)).replace(/'-'/g, '/'),
                item_id : item.item_id,
                volume : item.item_id
            })
        })
    },

    [types.SET_WALLPAPER_LIST] (state, payload) {
        payload.data.map((item) => {
            state.WallPaper.push({
                ename : item.ename,
                atime : item.atime,
                name : item.name,
                cover : item.cover,
                id : item.id,
                count : item.count
            })
        })
    },

    [types.SET_DOWN_LOAD_PAPER] (state, payload) {
        state.DownLoadPaper = payload.data
    },

    [types.CHANGE_MUSIC_PLAY] (state) {
        state.Mp3Playing = true
    },

    [types.CHANGE_MUSIC_PAUSE] (state) {
        state.Mp3Playing = false
    },

    [types.TRACK_PLAY_MUSIC] (state, payload) {
        state.playMp3Obj.id = payload.data.id
        state.playMp3Obj.index = payload.data.index
        state.playMp3Obj.mp3_url = payload.data.mp3_url
        state.playMp3Obj.playing = payload.data.playing
    }
}

export default {
    state,
    actions,
    mutations
}