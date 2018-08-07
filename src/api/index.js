import axios from 'axios'
import qs from 'qs'

const config = {
    pdk_url : 'http://www.pengdaokuan.cn/DuApp/restful/public/index.php/index/Api',
    one_get_which_day : 'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
    one_list : 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
    one_music_list : 'http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
} 
export default {
    /**
     * 获取正在热映电影
     * @returns {*}
    */
    getMovieHotList: () => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `${config.pdk_url}/MovieRanking`,
                params : {
                    type : 'hot'
                }
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=> {
                reject(err)
            })
        })
    },

    /**
     * 获取TOP排行前20电影
     * @returns {*}
    */
   getMovieTopList: () => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `${config.pdk_url}/MovieRanking`,
                params : {
                    type : 'top'
                }
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=> {
                reject(err)
            })
        })
    },

    /**
     * 获取电影详情
     * @returns {*}
    */
   getMovieIntroduce: (m_id) => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `${config.pdk_url}/ProductToDoShow`,
                params : {
                    type : 'movie',
                    id : m_id
                }
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=> {
                reject(err)
            })
        })
    },

    /**
     * 获得one接口中的音乐列表
     * @returns {*}
    */
    onemusiclist : () => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `${config.one_music_list}`
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=> {
                reject(err)
            })
        })
    },

    /**
     * 获得one接口中的文章列表
     * @returns {*}
    */
    onelist : () => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `${config.one_list}`
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=> {
                reject(err)
            })
        })
    },

    /** 
     * 调用魅族天气API，返回城市天气信息
    */
    getCityWeather : (url) => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                headers : {
                    'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                timeout : 100000,
                url : url
            }).then((res)=>{
                resolve(res.data)
            }).catch((err)=>{
                reject(err)
            })
        })
    },

    /**
     * 调用个人博客接口
    */
    getBlogArticle : (url) => {
        return new Promise((resolve, reject)=>{
            axios({
                method : 'get',
                url : url
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },

    /**
     * 调用壁纸接口，获取不同种类的壁纸分类
    */
    getWallPaper : (url) => {
        return new Promise((resolve, reject)=>{
            axios({
                method : 'get',
                url : url
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },

    /**
     * 获取某类手机壁纸下壁纸
    */
    getOneCateWallPaper : (url) => {
        return new Promise((resolve, reject)=>{
            axios({
                method : 'get',
                url : url
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },

    /**
     * 下载手机壁纸 (废弃)
    */
    download_wallpaper : (id) => {
        return new Promise((resolve, reject)=>{
            axios({
                method : 'get',
                url : `http://img5.adesk.com/${id}`
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },

    /**
     * 获取音乐列表
     * 引入qs模块，因为这里的请求头content-type是application/json格式，需改变
    */
    getMusicList : (al_id) => {
        return new Promise((resolve, reject)=>{
            axios.post('http://www.pengdaokuan.cn/music/restful/api/list.php', qs.stringify({
                al_id : al_id
            }), {
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },

    /**
     * 获取某首歌曲的播放地址 (接口问题，已废弃)
    */
    getMp3Address : (mp3_id) => {
        return new Promise((resolve, reject)=>{
            axios.post('http://www.pengdaokuan.cn/music/restful/api/play.php', qs.stringify({
                song_id : mp3_id
            }), {
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

