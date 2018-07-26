<template>
    <div>
        <go-back></go-back>
        <div class="list-container">
            <div class="flex-movie-list-box" v-for="(item, index) in gameList" :key="index">
                <div class="flex-cell-left">
                    <img v-lazy="item.img_url" alt="">
                </div>
                <div class="flex-cell-center">
                     <p class="title-year">
                        <span>{{ item.game_name }}</span>
                        <span style="color: #999">({{ item.post_year }})</span>
                    </p>
                    <p class="introduce">{{ item.summary }}</p>
                </div>
                <div class="flex-cell-right">
                    <button class="start_game" @click="openStart(item.game_id)">Open</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoBack from '../../basicComponents/top_header'
import { mapState } from 'vuex'
export default {
    components : {
        GoBack
    },
    computed : mapState({
        gameList : state => state.other.gameList
    }),
    methods : {
        openStart (game_id) {
            this.$tool.initToastAlert ('游戏还未上线 ～' , false, 1500)
        }
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
        padding: .4rem 0rem;
        width: 100%;
        .flex-cell-left {
            width: 23%;
            img {
                width: 95%;
                height: 75px;
                border-radius: 12px;
            }
        }
        .flex-cell-center {
            width : 60%;
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
        .flex-cell-right {
            width: 17%;
            button.start_game{
                float: right;
                margin-top: 1rem;
                border: none;
                border-radius: 6px;
                padding: .52rem .5rem;
                font-size: .8rem;
                background-color: #ffac38;
                color: white;
            }
        }
    }
}
</style>
