<template>
    <div>
        <go-back></go-back>
        <div class="flex-box">
            <div class="flex-cell" v-for="(item, index) in WallPaper" :key="index" @click="handleWallPaper(item.id, item.name)"> 
                <img v-lazy="item.cover" :alt="item.name">
                <p class="wall-label">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import GoBack from '../../basicComponents/top_header'
import { ImagePreview } from 'vant'
import { mapState, mapActions } from 'vuex'
export default {
    components : {
        GoBack,
    },
    data () {
        return {
            ImageArray : []
        }
    },
    computed : mapState({
        WallPaper : state => state.global.WallPaper
    }),
    methods : {
        handleWallPaper (_id, _name) {
            this.$router.push({
                path: '/user/album/wallpaper',
                query : {
                    id : _id,
                    type : _name
                }
            })
        }
    },
    mounted () {
    }
}
</script>

<style scoped lang="scss">
.flex-box{
    display: flex;
    width : 94%;
    padding: 2% 3%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .flex-cell {
        text-align: center;
        width: 30%;
        padding: .3rem;
        padding-bottom: .5rem;
        img {
            width: 100%;
            height: 7.5rem;
            border-radius: 10px;
        }
        p.wall-label {
            color: #e6e6e6;
            margin-top: -1.8rem;
            font-size: .88rem;
        }
    }
}
</style>
