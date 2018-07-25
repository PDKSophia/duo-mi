<template>
    <div>
        <div class="dm-search">
            <van-search placeholder="搜索热门内容" @search="onSearch" v-model="value" />
        </div>
        <div class="dm-story">
            <a href="https://github.com/PDKSophia" target="_blank">
                <div class="dm-content">
                    <div class="dm-cover">
                        <img src="../assets/img/art4.jpeg">
                    </div>
                    <h3 class="dm-title">面试总结 | 七牛云与京东的面试</h3>
                    <p class="forward">大三，专业为软件工程，自学前端与后端差不多一年，由于大三很多小伙伴都外出实习，于是 “ 博主 ” 也想投简历试试，如果运气好，没准能得个offer ?  事实证明，运气还是差了点...</p>
                </div>
                <div class="md-author">
                    <i class="fa fa-graduation-cap" style="color:#88d356"></i><span class="name">BY 彭道宽</span>
                    <span class="right_label">Github | PDKSophia</span>
                </div>
            </a>
        </div>
        <div style="height:.5rem;background:#efeff4"></div>
        <flex-cell></flex-cell>
        <div style="height:.5rem;background:#efeff4"></div>
        <div class="dm-story">
            <a href="https://github.com/PDKSophia" target="_blank">
                <div class="dm-content">
                    <div class="dm-cover">
                        <img src="../assets/img/art4.jpeg">
                    </div>
                    <h3 class="dm-title">面试总结 | 七牛云与京东的面试</h3>
                    <p class="forward">大三，专业为软件工程，自学前端与后端差不多一年，由于大三很多小伙伴都外出实习，于是 “ 博主 ” 也想投简历试试，如果运气好，没准能得个offer ?  事实证明，运气还是差了点...</p>
                </div>
                <div class="md-author">
                    <i class="fa fa-graduation-cap" style="color:#88d356"></i><span class="name">BY 彭道宽</span>
                    <span class="right_label">Github | PDKSophia</span>
                </div>
            </a>
        </div>
        <div style="height:.5rem;background:#efeff4"></div>
        <div class="dm-story">
            <a href="https://github.com/PDKSophia" target="_blank">
                <div class="dm-content">
                    <div class="dm-cover">
                        <img src="../assets/img/art4.jpeg">
                    </div>
                    <h3 class="dm-title">面试总结 | 七牛云与京东的面试</h3>
                    <p class="forward">大三，专业为软件工程，自学前端与后端差不多一年，由于大三很多小伙伴都外出实习，于是 “ 博主 ” 也想投简历试试，如果运气好，没准能得个offer ?  事实证明，运气还是差了点...</p>
                </div>
                <div class="md-author">
                    <i class="fa fa-graduation-cap" style="color:#88d356"></i><span class="name">BY 彭道宽</span>
                    <span class="right_label">Github | PDKSophia</span>
                </div>
            </a>
        </div>
        <div style="height:.5rem;background:#efeff4"></div>
        <div class="dm-story">
            <a href="https://github.com/PDKSophia" target="_blank">
                <div class="dm-content">
                    <div class="dm-cover">
                        <img src="../assets/img/art4.jpeg">
                    </div>
                    <h3 class="dm-title">面试总结 | 七牛云与京东的面试</h3>
                    <p class="forward">大三，专业为软件工程，自学前端与后端差不多一年，由于大三很多小伙伴都外出实习，于是 “ 博主 ” 也想投简历试试，如果运气好，没准能得个offer ?  事实证明，运气还是差了点...</p>
                </div>
                <div class="md-author">
                    <i class="fa fa-graduation-cap" style="color:#88d356"></i><span class="name">BY 彭道宽</span>
                    <span class="right_label">Github | PDKSophia</span>
                </div>
            </a>
        </div>
        <div style="height:.5rem;background:#efeff4"></div>
        <div class="dm-story last-story">
            <a href="https://github.com/PDKSophia" target="_blank">
                <div class="dm-content">
                    <div class="dm-cover">
                        <img src="../assets/img/art4.jpeg">
                    </div>
                    <h3 class="dm-title">面试总结 | 七牛云与京东的面试</h3>
                    <p class="forward">大三，专业为软件工程，自学前端与后端差不多一年，由于大三很多小伙伴都外出实习，于是 “ 博主 ” 也想投简历试试，如果运气好，没准能得个offer ?  事实证明，运气还是差了点...</p>
                </div>
                <div class="md-author">
                    <i class="fa fa-graduation-cap" style="color:#88d356"></i><span class="name">BY 彭道宽</span>
                    <span class="right_label">Github | PDKSophia</span>
                </div>
            </a>
        </div>
        <div style="height:.5rem;background:#efeff4"></div>
        <footer-tab-bar></footer-tab-bar>
    </div>
</template>

<script>
import FlexCell from './basicComponents/flex_cell'
import FooterTabBar from './basicComponents/tab_bar'
import { mapState, mapActions } from 'vuex'

export default {
    components : {
        FlexCell,
        FooterTabBar
    },
    data () {
        return {
            value : ''
        }
    },
    methods : {
        ...mapActions([
            'setMusicList'
        ]),
        initApiAxios () {
            this.$api.onelist().then((res1)=>{
                this.$api.onemusiclist().then((res2)=>{
                    this.setMusicList(res2.data.data.concat(res1.data.data))
                })
            })
        },
        onSearch () {
            this.$tool.initLoading(`搜索中`, false, 1500)
        }
    },
    created () {
        this.$tool.initLoading('正在初始化', false, 1500)
        this.initApiAxios()
    }
}
</script>

<style scoped lang="scss">
.van-search{
    height: 3.2rem;
}
.last-story {
    margin-bottom: 3rem;
}
.dm-story {
    display: block;
    padding: 20px 20px 15px 0;
    margin-left: 20px;
    position: relative;
    color: #494949;
    .dm-content {
        overflow: hidden;
        margin-bottom: 10px;
        .dm-cover{
            position: relative;
            width: 25.6%;
            margin-left: 25px;
            float: right;
            img{
                width: 100%;
                height: 5.5rem;
            }
        }
        h3.dm-title{
            text-align: justify;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
            color: #494949;
            margin-bottom: 6px;
            word-wrap: break-word;
            margin: 0;
            padding: 0;
        }
        p.forward{
            text-align: justify;
            color: #aaa;
            font-size: .8rem;
            line-height: 1.6;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            margin: 0;
            margin-top: .2rem;
        }
    }
    span.name{
        font-size: 12px;
        color: #ccc;
        margin-left: 6px;
    }
    span.right_label{
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-size: 11px;
        color: #ccc;
    }
    img{
        height:50px; 
        width: 50px;
    }
}
</style>
