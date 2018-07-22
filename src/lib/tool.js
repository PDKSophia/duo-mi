import { Toast, Dialog } from 'vant'

export default {
    /**
     * sessionStorage 
     * mask : 是否显示背景蒙层
     * time : 展示时长(ms)，值为 0 时，toast 不会消失
    */

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
    }
}