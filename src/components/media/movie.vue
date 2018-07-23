<template>
    <div>
        <go-back></go-back>
        <div class="media-movie">
            <div class="md-main-box">
                <div class="media-header">
                    <p class="md-titles">正在热议</p>
                    <p class="md-more">更多<i class="fa fa-angle-right"></i></p>
                </div>
                <div class="discuss">
                    <div class="discuss-idea">
                        <p><span style="color:#fc1d2f">189123</span> 人讨论《我不是药神》<span style="color:#999;font-size:0.8rem">9.6分</span></p>
                    </div>
                    <div class="author">
                        <span style="color:#fc1d2f"><i class="fa fa-comment"></i></span>
                        <div class="remark-content">
                            <p>“ 要想战胜恶魔，首先要成为恶魔本身 ”</p>
                            <p class="post-date">BY 彭道宽<span>2018-7-6</span></p>
                        </div>
                    </div>
                </div>
                <div class="discuss last-discuss">
                    <div class="discuss-idea">
                        <p><span style="color:#fc1d2f">119311</span> 人讨论《西部世界》<span style="color:#999;font-size:0.8rem">9.2分</span></p>
                    </div>
                    <div class="author">
                        <span style="color:#fc1d2f"><i class="fa fa-comment"></i></span>
                        <div class="remark-content">
                            <p>综合特效剧情，到底该给几分？</p>
                            <p class="post-date">By Sophia<span>2018-6-9</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md-main-box" v-if="ApiFinish">
                <div class="media-header">
                    <p class="md-titles">正在上映</p>
                    <p class="md-more" @click="hanleMore('hot')">更多<i class="fa fa-angle-right"></i></p>
                </div>
                <single-movie :DataList="MovieHotList"></single-movie>
            </div>
            <div class="md-main-box" v-if="ApiFinish">
                <div class="media-header">
                    <p class="md-titles">豆瓣TOP / 前20</p>
                    <p class="md-more" @click="hanleMore('top')">更多<i class="fa fa-angle-right"></i></p>
                </div>
                <single-movie :DataList="MovieTopList"></single-movie>
            </div>
        </div>
    </div>
</template>

<script>
import GoBack from '../basicComponents/top_header'
import SingleMovie from '../basicComponents/single_movie'
import { mapState, mapActions } from 'vuex'

export default {
    computed : mapState({
        requestApiFlag : state => state.global.requestApiFlag,
        MovieHotList : state => state.global.MovieHotList,
        MovieTopList : state => state.global.MovieTopList,
    }),
    components : {
        GoBack,
        SingleMovie
    },
    data () {
        return {
            ApiFinish : false
        }
    },
    methods : {
        ...mapActions ([
            'changeRequestApi',
            'setMovieHotList',
            'setMovieTopList'
        ]),
        initTotalMovie () {
            this.$api.getMovieHotList().then((res)=>{
                this.setMovieHotList(res.data)
            })
            this.$api.getMovieTopList().then((res)=>{
                this.setMovieTopList(res.data)
            })
            if(Array.isArray(this.MovieHotList).length!==0) {
                this.ApiFinish = true
            } else {
                this.$tool.initLoading('拼命加载中...', false, 3000)
                setTimeout(()=>{
                    if(this.MovieHotList == '' || this.MovieTopList == '') {
                        this.$tool.initDialogAlert('获取失败，骚后再试试吧', false)
                    }
                }, 3000)
            }
            this.changeRequestApi(false)
        },
        hanleMore (type) {
            this.$router.push({
                path : `/media/movie_more/${type}`
            })
        }
    },
    created () {
        if(this.requestApiFlag) {
            this.$tool.initLoading('拼命加载中...', false, 1000)
            this.initTotalMovie()
        } else {
            this.ApiFinish = true
        }
    }
}
</script>

<style scoped lang="scss">

.media-movie {
    .md-main-box {
        padding: 3%;
        padding-bottom: 0;
        border-bottom: 1px solid #aaa;
    }
    .media-header {
        height: 2.3rem;
        width: 100%;
        p{
            font-size: 1rem;
            letter-spacing: 1px;
            margin-left: .3rem;
            color: #333;
        }
        p.md-titles {
            float: left;
        }
        p.md-more {
            float: right;
            i {
                margin-left: .4rem;
                font-size: 1rem;
            }
        }
    }
    .discuss {
        position: relative;
        border-radius: 5px;
        height: 5.5rem;
        background-color: #F5F5F5;
        border: 1px solid #aaa;
        font-size: .88rem;
        opacity: .9;
        padding: .6rem .8rem;
        margin-bottom: 1.3rem;
        .discuss-idea{
            padding-left: .5rem;
	        padding-bottom: .6rem;
	        border-bottom: 1px solid #999;
            p{
                font-size: .92rem;
                font-weight: 550;
            }
        }
        .author {
            padding-top: .5rem;
            padding-left: .4rem;
            span{
                float: left;
                font-size: .92rem;
            }
            .remark-content {
                float: left;
                overflow: hidden;
                width: 90%;
                margin-left: .6rem;
                p {
                    font-size: .88rem;
                    margin-bottom: .4rem;
                }
                p.post-date {
                    color: #999;
                    font-size: .7rem;
                    span {
                        font-size: .7rem;
                        float: right;
                    }
                }
            }
        }    
    }
}
</style>
