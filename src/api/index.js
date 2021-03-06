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
        method: 'get',
        url: `${config.pdk_url}/MovieRanking`,
        params: {
          type: 'hot'
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
        method: 'get',
        url: `${config.pdk_url}/MovieRanking`,
        params: {
          type: 'top'
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
        method: 'get',
        url: `${config.pdk_url}/ProductToDoShow`,
        params: {
          type: 'movie',
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
        method: 'get',
        url: `${config.one_music_list}`
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
     * 获得one接口中的文章(阅读)列表
     * @returns {*}
    */
    onelist: () => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `${config.one_list}`
            })
            .then((res)=>{
                console.log(res)
                resolve(res)
            })
            .catch((err)=> {
                reject(err)
            })
        })
    },

    /**
     * 获取one最新的idlist
     * json 字段中的 data 字段的每个值是将作为一个参数传入下个 url 中的，以获取今日或往日的 onelist 信息，data[0]是当日，data[1]昨日
     * @returns {*}
    */
    get_one_new_id_list : () => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `${config.one_get_which_day}`
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
     * 获得onelist的天数
     * params DayId : 传入获取哪天的onelist
     * @returns {*}
    */
    getWhichDayList : (dayid) => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `http://v3.wufazhuce.com:8000/api/onelist/${dayid}/0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
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
     * 具体一篇文章的信息
     * params item_id : 传入获取哪篇文章的item_id
     * @returns {*}
    */
    getWhichOneStroy : (item_id) => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `http://v3.wufazhuce.com:8000/api/essay/${item_id}?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
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
     * 具体一篇文章的评价
     * params item_id : 传入获取哪篇文章的item_id
     * @returns {*}
    */
    getOneStoryRemak : (item_id) => {
        return new Promise((resolve, reject) => {
            axios({
                method : 'get',
                url : `http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/${item_id}/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
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
   * 调用魅族天气API，返回城市天气信息
  */
  getCityWeather : (url) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        timeout: 100000,
        url : `${url}`
        // url : `http://aider.meizu.com${url}`
      }).then((res) => {
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
        method: 'get',
        url: `${url}`
        // url: `http://blog.pengdaokuan.cn:4001/blog${url}`
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
  getWallPaper: (url) => {
    return new Promise((resolve, reject)=>{
      axios({
        method: 'get',
        // url: `http://service.picasso.adesk.com/v1/vertical${url}`
        url: `${url}`
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
        method: 'get',
        url : `${url}`
        // url : `http://service.picasso.adesk.com/v1/vertical${url}`
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

