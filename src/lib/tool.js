import { Toast, Dialog } from 'vant'
import AllCity from './city'
export default {
    /**
     * loading 加载框
     * mask : 是否显示背景蒙层
     * time : 展示时长(ms)，值为 0 时，toast 不会消失
    */
    initLoading : (context, mask=true, time = 1000) => {
        Toast.loading({
            message : context,
            mask : mask,        
            duration: time,       
            forbidClick: true, 
            loadingType: 'spinner',
        })
    },

    /**
     * 弹出框
     * message : 内容
     * overlay : 是否展示蒙层 
    */
    initDialogAlert : (message, overlay=true) => {
        Dialog.alert({
            message: message,
            overlay : overlay
        })
    },

    /**
     * 根据分数给星星
    */
    initToastAlert : (message, mask=true, time) => {
        Toast({
            message: message,
            mask : mask,
            duration : time
            
        })
    },
    /**
     * 根据分数给星星
    */
    MarkScoreToStar : (score) => {
        return (score / 2)
    },
   
    /**
     * 查找城市
     * citytext : 城市名
    */
    SearchCityName : (citytext) => {
        let res = {}
        AllCity.D_City.cities.map((item)=>{
            if(item.city == citytext) {
                res = Object.assign({}, item)
            } 
        })
        return res;
    }
}