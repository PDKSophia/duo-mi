<template>
    <div>
        <p class="arrow-back">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
            <van-icon name="location" class="location" @click="handleDialog"><p class="changeCity">切换</p></van-icon>
        </p>
        <van-dialog
            v-model="showDialog"
            :close-on-click-overlay="clickOverlay"
            :before-close="beforeClose"
            :confirm-button-text="confirmText"
            >
            <van-field
                v-model="CityText"
                label="选择城市 : "
                placeholder="例如 : 北京 "
            />
            </van-dialog>
        <div class="bg-weather">
            <p class="cate">强风暴雨</p>
            <p class="city">成都市</p>
            <p class="num">33°</p>
        </div>
        <div class="after-day-weather">
            <div class="weather-cell">
                <p class="which-day">星期二</p>
                <p class="temperature">
                    <span><img src="../../../assets/weather.png" alt=""></span>10° ～ 15°
                </p>
            </div>
        </div>
        <div class="after-day-weather">
            <div class="weather-cell">
                <p class="which-day">星期二</p>
                <p class="temperature">
                    <span><img src="../../../assets/weather.png" alt=""></span>10° ～ 15°
                </p>
            </div>
        </div>
        <div class="after-day-weather">
            <div class="weather-cell">
                <p class="which-day">星期二</p>
                <p class="temperature">
                    <span><img src="../../../assets/weather.png" alt=""></span>10° ～ 15°
                </p>
            </div>
        </div>
        <div class="after-day-weather">
            <div class="weather-cell">
                <p class="which-day">星期二</p>
                <p class="temperature">
                    <span><img src="../../../assets/weather.png" alt=""></span>10° ～ 15°
                </p>
            </div>
        </div>
        <div class="after-day-weather">
            <div class="weather-cell">
                <p class="which-day">星期二</p>
                <p class="temperature">
                    <span><img src="../../../assets/weather.png" alt=""></span>10° ～ 15°
                </p>
            </div>
        </div>
        <div class="after-day-weather">
            <div class="weather-cell">
                <p class="which-day">星期二</p>
                <p class="temperature">
                    <span><img src="../../../assets/weather.png" alt=""></span>10° ～ 15°
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        handleDialog () {
            this.showDialog = true
        },
        CityApi (datas) {
            console.log('请求数据，获取 : ' + datas.city + '天气')
        },
        beforeClose(action, done) {
            if (action === 'confirm') {
                let result = this.$tool.SearchCityName(this.CityText)
                // console.log(result)
                if(result.cityid) {
                    this.$tool.initLoading('切换中', false, 1000)
                    // api请求
                    this.CityApi(result)
                } else {
                    this.$tool.initToastAlert('抱歉，请输入市级城市哦～', false, 1500)
                }
                setTimeout(done, 1000);
            } else {
                done();
            }
        }
    },
    data () {
        return {
            showDialog : false,          // 是否显示弹窗
            CityText : '海口',      
            clickOverlay : true,         // 点击蒙层时是否关闭弹窗	
            confirmText : '切换'         // 确认按钮的文案
        }
    },
    created () {
    }
}
</script>

<style scoped lang="scss">
p.arrow-back{
    background: #1f5874;
    border: none;
    color: white;
    padding-top: 1rem;
    padding-left: .5rem;
    font-size: 1.5rem;
    padding-bottom: .5rem;
    i.location{
        float: right;
        margin-right: .8rem;
    }
    p.changeCity{
        font-size: 1rem;
        float: right;
        margin-left: .3rem;
        margin-top: .2rem;
    }
}
.bg-weather {
    background:#1f5874;
    height: 14rem;
    text-align: center;
    padding-top: 4.6rem;
    p.cate {
        font-size: 1.3rem;
        color : white;
        margin-bottom: .6rem;
    }
    p.city {
        font-size: 1.2rem;
        margin-bottom: .6rem;
        color : white;
    }
    p.num {
        font-size: 3rem;
        color : white;
        margin-left: 1rem;
    }
}
.after-day-weather {
    padding: 3% 5%;
    padding-bottom: 0;
    .weather-cell {
        height: 1.8rem;
        p.which-day {
            float: left;
            color: #555;
            font-size: 1.1rem;
            margin-top: .2rem;
        }
        p.temperature {
            float:right;
            color: #555;
            font-size: 1.2rem;
            img {
                width: 1.6rem;
                height: 1.6rem;
                margin-right: .5rem;
                margin-bottom: -0.2rem;
            }
        }
    }
}
</style>
