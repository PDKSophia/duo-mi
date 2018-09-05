<template>
    <div class="single-movie">
        <div class="movie-box">
            <div class="movie-cell" v-for="(item, index) in DataList" :key="index" @click="hanleViewMovie(item.m_id)" v-if="index < 9">
                <img v-lazy="item.pic" alt="">
                <p>{{ item.title }}</p>
                <Sstar :count="item.count" max="5" :score="item.score"></Sstar>
            </div>
        </div>
    </div>
</template>

<script>
import Sstar from './star'
export default {
    components : {
        Sstar
    },
    props : {
        DataList : {
            type : Array,
            default : [{
                pic : '',
                title : '行尸走肉第八季',
                score : 9.6
            }]
        }
    },
    data () {
        return {
        }
    },
    methods : {
        hanleViewMovie (m_id) {
            console.log('点击电影等m_id : ' + m_id)
            this.$router.push({
                path : `/media/movie_detail/${m_id}`
            })
        }
    },
    mounted () {
    }
}
</script>

<style scoped lang="scss">
.movie-box {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    display: -webkit-flex; /* Safari */
    .movie-cell {
        text-align: center;
        width: 31%;
        padding: 1%;
        padding-top: 0;
        margin-bottom: 1rem;
        img {
            width: 100%;
            height: 10rem;
        }
        p {
            font-size: .82rem;
            color: #333;
            margin-top: .1rem;
            margin-bottom: .1rem;
        }
    }
}
</style>
