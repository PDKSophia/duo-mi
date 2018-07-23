<template>
    <div>
        <div class="list-container">
            <div class="flex-movie-list-box" 
                v-for="(item,index) in List" :key="index" 
                :class="index+1 == List.length ? 'last-cell' : ''" 
                @click="handleViewMovie(item.m_id)"
            >
                <div class="flex-cell-left">
                    <img v-lazy="item.pic" alt="">
                </div>
                <div class="flex-cell-right">
                     <p class="title-year">
                        <span>{{ item.title }}</span>
                        <span style="color: #999">({{ item.year }})</span>
                    </p>
                    <sstar :count="item.count" max="5" :score="item.score"></sstar>
                    <p class="introduce">{{ item.year }} / 豆瓣精选</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sstar from './star'

export default {
    props : {
        List : {
            type : Array,
            default : []
        }
    },
    methods : {
        handleViewMovie (m_id) {
            this.$router.push({
                path : `/media/movie_detail/${m_id}`
            })
        }
    },
    components : {
        Sstar
    },
    mounted() {
        console.log(this.List)
    }
}
</script>

<style scoped lang="scss">
.last-cell {
    border-bottom:none !important;
}
.list-container {
    padding: 0rem 1rem;
    .flex-movie-list-box {
        display: flex;
        border-bottom: 1px solid #999;
        padding: .8rem 0rem;
        width: 100%;
        .flex-cell-left {
            width: 30%;
            img {
                width: 92%;
                height: 120px;
                border-radius: 12px;
            }
        }
        .flex-cell-right {
            width : 70%;
            padding: .5rem 0rem 0rem .5rem;
            p.title-year {
                font-size: 1.1rem;
                margin-bottom: .4rem;
            }
            p.introduce {
                color: #999;
                font-size: .72rem;
                margin-top: .4rem;
            }
        }
    }
}
</style>
