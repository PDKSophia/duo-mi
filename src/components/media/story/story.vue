<template>
    <div>
        <go-back></go-back>
        <div class="duo-mi-story" v-for="(item, index) in storylist" :key="index" @click="handleWhichOne(item.item_id)">
            <div class="story-label">- 阅读 -</div>
            <div class="story-header">
                <p class="story-title">{{ item.title }}</p>
                <p class="story-author">文 / {{ item.author }}</p>
            </div>
            <div class="songlist">
                <div class="bg-image-box">
                    <div class="image-file">
                        <img v-lazy="item.img_url" alt="">
                    </div>
                </div>
            </div>
            <div class="summary-time">
                <p>{{ item.forward }}</p>
                <p>{{ item.post_date }}</p>
            </div>
        </div>
        <no-content></no-content>
    </div>
</template>

<script>
import GoBack from '../../basicComponents/top_header'
import NoContent from '../../basicComponents/no_content'
import { mapState } from 'vuex'
export default {
    components : {
        GoBack,
        NoContent,
    },
    computed : mapState({
        storylist : state => state.global.storylist
    }),
    methods : {
        handleWhichOne (item_id) {
            console.log(item_id)
            this.$router.push({
                path : '/media/story/read',
                query : {
                    item_id : item_id
                }
            })
        }
    },
    mounted() {
    },
}
</script>

<style scoped lang="scss">
.duo-mi-story {
    padding: .6rem .8rem;
    border-bottom: 8px solid  #ebebeb;
    .story-label{
        width: 100%;
        color: rgba(43, 43, 43, 0.6);
        font-size: .88rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    .story-header {
        padding-bottom: 12px;
        p.story-title {
            color: #333333;
            font-size: 1.1rem;
            line-height: 1.6rem;
        }
        p.story-author {
            font-size: .92rem;
            margin-top: .5rem;
            color: rgba(43, 43, 43, 0.6);
        }
    }
    .songlist {
        width: 100%;
        height: 13rem;
        text-align: center;
        .bg-image-box {
            width: 100%;
            background-repeat:no-repeat;
            background-size : cover;
            text-align: center;
            .image-file {
                img{
                    width: 100%;
                    height:12.5rem;
                }
            }
        }
    }
    .summary-time {
        font-size: .82rem;
        margin-top: .3rem;
        line-height: 1.8rem;
        color: rgba(43, 43, 43, 0.6);
    }
}
</style>
