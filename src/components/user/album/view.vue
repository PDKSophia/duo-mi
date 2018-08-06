<template>
    <div>
        <div class="wallpaper-image">
            <div class="cricle-back" @click="$router.go(-1)">
                <span class="back-icon"><van-icon name="arrow-left" /></span>
            </div>
            <img :src="DownLoadPaper.paper_img" alt="">
            <div class="down-load">
                <div class="btn-cell" @click="handlepreview"> 
                    <img src="../../../assets/eyes.png" class="icon-img" alt="">
                    <p class="icon-label">预览</p>
                </div>
                <div class="btn-cell" @click="handleload">
                    <img src="../../../assets/download.png" class="icon-img" alt="">
                    <p class="icon-label">下载</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed : mapState({
        DownLoadPaper : state => state.global.DownLoadPaper
    }),
    methods : {
        handlepreview () {
            this.$tool.initToastAlert('无法预览该壁纸', false, 1000)
        },
        handleload () {
            this.$tool.initLoading('正在下载中', false, 1000)
            setTimeout(()=>{
                this.$tool.ToastMsgContent('fail', '暂不支持下载', 1500)
            }, 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.wallpaper-image {
    position: absolute;
    width: 100%;
    height: 100%;
    .cricle-back{
        width: 2rem;
        height: 1.5rem;
        border-radius: 50%;
        float: left;
        background-color: #8e8e8e;
        position: absolute;
        margin-top: 1rem;
        left: 3%;
        z-index: 200;
        padding-top: .5rem;
        span.back-icon{
            color: white;
            margin-left: 0.4rem;
        }
    }
    img{
        width: 100%;
        position: absolute;
        z-index: 100;
        height: 100%;
    }
    .down-load {
        width: 100%;
        position: absolute;
        bottom: 3%;
        z-index: 200;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .btn-cell{
            color:white;
            width: 50%;
            font-size: .88rem;
            img.icon-img{
                width: 2rem;
                height: 2rem;
                margin-left: -1rem;
            }
            p.icon-label{
                margin-top:2.5rem;
            }
        }
    }
}
</style>
