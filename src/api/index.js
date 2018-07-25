import axios from 'axios'

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
        return axios.get(`${config.pdk_url}/MovieRanking`, {
            params : {
                type : 'hot'
            }
        })
    },

    /**
     * 获取TOP排行前20电影
     * @returns {*}
    */
   getMovieTopList: () => {
        return axios.get(`${config.pdk_url}/MovieRanking`, {
            params : {
                type : 'top'
            }
        })
    },

    /**
     * 获取电影详情
     * @returns {*}
    */
   getMovieIntroduce: (m_id) => {
        return axios.get(`${config.pdk_url}/ProductToDoShow`, {
            params : {
                type : 'movie',
                id : m_id
            }
        })
    },

    /**
     * 获得one接口中的音乐列表
     * @returns {*}
    */
    onemusiclist : () => {
        return axios.get(`${config.one_music_list}`)
    },

    /**
     * 获得one接口中的文章列表
     * @returns {*}
    */
    onelist : () => {
        return axios.get(`${config.one_list}`)
    },

    /** 
     * 调用魅族天气API，返回城市天气信息
    */
    getCityWeather : (cityid) => {
        return axios.get(`/m_api/listWeather?cityIds=${cityid}`, {})
    }
}