import axios from 'axios'
import tool from '../lib/tool'

const config = {
    base_url : 'http://www.pengdaokuan.cn/DuApp/restful/public/index.php/index/Api'
}

export default {
    /**
     * 获取正在热映电影
     * @returns {*}
    */
    getMovieHotList: () => {
        return axios.get(`${config.base_url}/MovieRanking`, {
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
        return axios.get(`${config.base_url}/MovieRanking`, {
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
    return axios.get(`${config.base_url}/ProductToDoShow`, {
        params : {
            type : 'movie',
            id : m_id
        }
    })
},
}