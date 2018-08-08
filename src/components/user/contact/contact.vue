<template>
    <div>
        <top-header></top-header>
        <div class="introduce-box">
            <img src="https://user-gold-cdn.xitu.io/2017/9/12/c24acb16ce6ab6b89dcb83cdc1fc68f4?imageView2/1/w/90/h/90/q/85/format/webp/interlace/1" alt="">
            <h2>彭道宽</h2>
            <span>2019应届生</span>
            <ul class="icon-box">
                <li><i class="fa fa-weibo"></i></li>
                <li><i class="fa fa-github"></i></li>
                <li><i class="fa fa-podcast"></i></li>
            </ul>
        </div>
        <div class="content-box">
            <van-tabs swipeable>
                <van-tab title="个人简介">
                    <div class="self-introduce">
                        <div class="cell">
                            <p class="h_title">基本信息 : </p>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-graduation-cap"></i></div>
                                <div class="h_right">学校 : 湖南科技大学</div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-bullseye"></i></div>
                                <div class="h_right">专业 : 软件工程</div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-map-marker"></i></div>
                                <div class="h_right">籍贯 : 海南 · 海口</div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-cube"></i></div>
                                <div class="h_right">爱好 : 吉他 / 舞蹈 / 篮球 / 旅游</div>
                            </div>
                        </div>
                        <div class="cell">
                            <p class="h_summary">嗨，很高兴你能看到这里，也很感谢你能用到我做的这个应用。互相认识一下吧~ 97年，男，双子座，目前是一名在校的大三学生。</p>
                            <p class="h_summary">喜欢拍照，但是技术却是三流的，也喜欢舞蹈，可是跳得却很糟糕，花了半年自学了吉他，目前仍脱离不了新手水平 ~ 偶尔心血来潮，就会自己一个人背个书包，买张火车票，到处乱跑，喜欢旅行，喜欢爬山，目前爬过最美的山，就属湖南邵阳的莨山了。</p>
                            <p class="h_summary">喜欢打游戏，技术却也一般，喜欢上网，但不会沉迷其中，也喜欢约三两好友，去唱个歌，释放一下压力。所以，很高兴认识你</p>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="联系方式">
                    <div class="self-introduce">
                        <div class="cell">
                            <p class="h_title">联系方式 : </p>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-github"></i></div>
                                <div class="h_right"><a href="https://github.com/PDKSophia" target="_blank">github : PDKSophia</a></div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-heart-o"></i></div>
                                <div class="h_right"><a href="https://juejin.im/user/594ca8a35188250d892f4139/posts" target="_blank">掘金 : 彭道宽</a></div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-weibo"></i></div>
                                <div class="h_right"><a href="https://weibo.com/u/2971991985?refer_flag=1001030101_" target="_blank">微博 : 彭道宽</a></div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-wechat"></i></div>
                                <div class="h_right">微信 : PPPengDK</div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-envelope-o"></i></div>
                                <div class="h_right">邮箱 : 1063137960@qq.com</div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="相关链接">
                    <div class="self-introduce">
                        <div class="cell">
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-unlink"></i></div>
                                <div class="h_right"><a href="http://blog.pengdaokuan.cn:4001" target="_blank">博客 : http://blog.pengdaokuan.cn:4001</a></div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-unlink"></i></div>
                                <div class="h_right"><a href="http://zhaike.pengdaokuan.cn/YunResume" target="_blank">云简历平台 : http://zhaike.pengdaokuan.cn/YunResume</a></div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-unlink"></i></div>
                                <div class="h_right"><a href="http://www.pengdaokuan.cn" target="_blank">个人简历 : http://www.pengdaokuan.cn</a></div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-unlink"></i></div>
                                <div class="h_right"><a href="http://www.pengdaokuan.cn/DuApp" target="_blank">嘟嘟v1版本 : http://www.pengdaokuan.cn/DuApp</a></div>
                            </div>
                            <div class="h_content">
                                <div class="h_left"><i class="fa fa-envelope-o"></i></div>
                                <div class="h_right"><a href="http://zhaike.pengdaokuan.cn" target="_blank">宅客 : http://zhaike.pengdaokuan.cn</a></div>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import TopHeader from '../../basicComponents/top_header'
export default {
    components : {
        TopHeader,
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
.introduce-box {
    height: 13.4rem;
    padding-top: 3rem;
    text-align: center;
    img {
        height: 5.5rem;
        width: 5.5rem;
        border-radius: 50%;
    }
    h2 {
        margin-top: .52rem;
        margin-bottom: .38rem;
    }
    span{
        font-size: .98rem;
        color: #72777b;
    }
    ul.icon-box {
        padding-top: .78rem;
        display: flex;
        width: 40%;
        justify-content:space-around;
        margin: auto;
        color: #909090;
        height: 2rem;
        li{
            flex: 1;
        }
    }
}
.content-box {
    .self-introduce {
        color: #555;
        padding: .5rem .88rem;
        .cell {
            margin-bottom: 2rem;
            line-height: 1.3rem;
            margin-top: .4rem;
            p.h_title {
                font-size: .78rem;
            }
            p.h_summary {
                margin-top: .1rem;
                font-size: .72rem;
                line-height: 1.2rem;
            }
            .h_content {
                font-size: .72rem;
                margin-top: .46rem;
                display: flex;
                width: 100%;
                .h_left {
                    width: 8%;
                    font-size: .78rem;
                    padding-top: .15rem;
                    padding-left: .18rem;
                }
                .h_right {
                    width: 92%;
                }
            }
        }
    }
}
.scale-half {
    height: 1px;
    transform: scaleY(0.5);
    background-color:#909090;
}
a {
    color: #555;
}
@media screen and (min-width: 360px) and (max-width: 414px){
    .introduce-box {
        ul.icon-box {
            width: 30%;
        }
    }
}
</style>
