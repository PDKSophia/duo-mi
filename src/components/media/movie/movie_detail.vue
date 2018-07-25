<template>
    <div>
        <div class="top-nav-bar">
            <i class="fa fa-chevron-left" @click="$router.go(-1)"></i>
        </div>
        <div class="movie-images">
            <img class="img_class" :src="MovieIntro.pic" alt="">
        </div>
        <div class="introduce">
            <div class="intro-flex-box">
                <div class="cell-left">
                    <p class="pro_title">{{ MovieIntro.title }}</p>
                    <button type="button" class="db_select">豆瓣精选</button>
                    <div class="movie-introduce">
                        <p>年份 : {{ MovieIntro.year }}</p>
                        <p>类型 : <span v-for="(gen, index) in MovieIntro.genres" :key="index">{{ gen }} <span v-if="index+1 != MovieIntro.genres.length">/</span> </span></p>
                        <p>原名 : {{ MovieIntro.original_title}}</p>
                        <p>导演 : {{ MovieIntro.directors }}</p>
                    </div>
                </div>
                <div class="cell-right">
                    <div class="square">
                        <p class="score">豆瓣评分</p>
                        <p class="get_score">{{ MovieIntro.score }}</p>
                        <Sstar :count="MovieIntro.count" max="5"></Sstar>
                        <p class="score" style="margin-top:.5rem">{{ MovieIntro.talk }} 人</p>
                    </div>
                </div>
            </div>
            <div class="summary">
                <p class="intro_title">简介</p>
                <p class="content" id="summary_content">{{ MovieIntro.summary }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState , mapActions } from 'vuex'
import Sstar from '../../basicComponents/star'
export default {
    components : {
        Sstar
    },
    data () {
        return {
            m_id : '',
            MovieIntro : {}
        }
    },
    methods : {
        getMovieIntroduce () {
            this.$api.getMovieIntroduce(this.m_id).then((res)=>{
                this.MovieIntro = Object.assign({}, res.data)
                this.MovieIntro.count = this.$tool.MarkScoreToStar(this.MovieIntro.score)
            })
        }
    },
    created () {
        this.m_id = this.$route.params.m_id
        this.getMovieIntroduce()
        this.$tool.initLoading('加载中', false, 1500)
    }
}
</script>

<style scoped lang="scss">
.top-nav-bar {
    background-color: #5c452f;
    height: 3.5rem;
    i{
        font-size: 1.6rem;
        color: white;
        margin-top: 1rem;
        margin-left : .8rem;
    }
}
.movie-images {
    height: 16rem;
    background-color: #5c452f;
    padding-top: 1rem;
    text-align: center; 
    img.img_class{
        width: 10rem;
        height: 14.5rem;
    }
}
.introduce {
    background-color: rgba(250, 238, 238, 0.966);
    padding: 1.2rem;
    padding-bottom: 3rem;
    .intro-flex-box {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding-bottom: 1.4rem;
        border-bottom: .5px solid #999;
        .cell-left {
            width: 60%;
            button.db_select {
                margin-top: .6rem;
                background-color: rgb(231, 188, 135);
                border: none;
                padding: .3rem .4rem;
                color: rgb(170, 103, 21);
                font-size: .72rem;
                border-radius: 4px;
            }
            p.pro_title{
                font-size: 1.15rem;
                color: black;
                font-weight: 600;
            }
            .movie-introduce {
                font-size: .72rem;
                color: #999;
                margin-top: .8rem;
                p{
                    line-height: 1.2rem;
                }
            }
        }
        .cell-right {
            width: 40%;
            .square {
                float: right;
                margin-top: .43rem;
                width: 88px;
                height: 106px;
                background-color: white;
                text-align: center;
                padding: .66rem;
                padding-top: .33rem;
                p.score{
                    color: #999;
                    margin-top: .3rem;
                    font-size: .78rem; 
                    margin-bottom: .3rem;
                }
                p.get_score{
                    color: black;
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-top: .6rem;
                    margin-bottom: .6rem;
                }
                p.score_icon{
                    color:#ffac38;
                    font-size:.4rem;
                    margin-bottom: .6rem;
                }
            }
        }
    }
    .summary {
        padding-top : 1rem;
        margin-bottom: 1rem;
        p.intro_title{
            color: #999;
            font-size: .8rem;
            margin-bottom: .68rem;
        }
        p.content {
            color: rgb(54, 54, 54);
            font-size: .8rem;
            line-height: 1.2rem;
            width: 100%;
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 360px){
    .introduce {
        padding-bottom: 2rem;
    }
}
@media screen and (min-width: 360px) and (max-width: 380px){
    .introduce {
        padding-bottom: 8rem;
    }
}
</style>
