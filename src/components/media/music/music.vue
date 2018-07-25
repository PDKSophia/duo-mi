<template>
    <div>
        <go-back></go-back>
        <div class="duo-mi-music" v-for="(item, index) in MusicList" :key="index">
            <div class="music-label">- 音乐 -</div>
            <div class="music-header">
                <p class="story-title">{{ item.title }}</p>
                <p class="story-author">文 / {{ item.author }}</p>
            </div>
            <div class="songlist">
                <div class="bg-image-box">
                    <div class="image-file">
                        <img v-lazy="item.img_url" alt="">
                    </div>
                    <div class="fixed-icon">
                        <img src="http://image.wufazhuce.com/music-detail-play.png" alt="">
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
import { mapState, mapActions } from 'vuex'

export default {
    components : {
        GoBack,
        NoContent
    },
    computed : mapState({
        MusicList : state => state.global.MusicList
    }),
    created () {
        
    }
}
</script>

<style scoped lang="scss">
.duo-mi-music {
    padding: .6rem .8rem;
    border-bottom: 8px solid  #ebebeb;
    .music-label{
        width: 100%;
        color: rgba(43, 43, 43, 0.6);
        font-size: .88rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    .music-header {
        padding-bottom: 18px;
        border-bottom: 2px solid #f2f2f2;
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
        height: 280px;
        border-bottom: 2px solid #f2f2f2;
        text-align: center;
        .bg-image-box {
            width: 100%;
            height: 280px;
            border-radius: 50%;
            background-repeat:no-repeat;
            background-size : cover;
            text-align: center;
            .image-file {
                padding-top: 25px;
                img{
                    width: 230px;
                    height: 230px;
                    border-radius: 50%;
                }
            }
            .fixed-icon {
                position: relative;
                top: -50%;
                left: 45%;
                width: 40px;
                height: 40px;
                img{
                    width: 40px;
                    height: 40px;;
                }
            }
        }
    }
    .summary-time {
        font-size: .82rem;
        margin-top: .6rem;
        line-height: 1.8rem;
        color: rgba(43, 43, 43, 0.6);
    }
}
</style>
