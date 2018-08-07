<template>
    <div>
        <go-back></go-back>
        <div class="duo-mi-music" v-for="(item, index) in List" :key="index">
            <div class="music-label">- 音乐 -</div>
            <div class="music-header">
                <p class="story-title">{{ item.title }}</p>
                <p class="story-author">文 / {{ item.author }}</p>
            </div>
            <div class="songlist">
                <div class="bg-image-box">
                    <div class="image-file">
                        <img :class="{'rotates' : index == playMp3Obj.index && Mp3Playing == true }" v-lazy="item.img_url" alt="">
                    </div>
                    <div class="fixed-icon" :id="index">
                        <img src="http://image.wufazhuce.com/music-detail-play.png" alt="" class="play-icon" @click="handlePlayMusic(item.mp3_id, index)" />
                        <img src="http://image.wufazhuce.com/music-detail-pause.png" alt="" class="pasue-icon" @click="handlePauseMusic(item.mp3_id, index)" />
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
        NoContent,
    },
    computed : mapState({
        Mp3Playing : state => state.global.Mp3Playing,
        MusicList : state => state.global.MusicList,
        playMp3Obj : state => state.global.playMp3Obj
    }),
    data () {
        return {
            List : [],
            frist : false,      // 为了解决重进而封面旋转问题
        }
    },
    methods : {
        ...mapActions([
            'change_music_play',
            'change_music_pause',
            'track_play_music'
        ]),
        handlePlayMusic(mp3_id, index) {
            this.change_music_play()
            let jsondata = {
                id : mp3_id,          
                index : index,
                mp3_url : `http://music.163.com/song/media/outer/url?id=${mp3_id}.mp3`,       
                playing : true,    
            }
            let childs = event.path[1].childNodes
            console.log(childs)
            childs[0].classList.add('active')
            this.track_play_music(jsondata)
            this.frist = true
        },
        handlePauseMusic (mp3_id, index) {
            console.log('暂停音乐')
            this.change_music_pause()
            console.log(this.Mp3Playing)
        }
    },
    created () {
        this.List = this.MusicList.slice()
        let al_id = this.$tool.getMusicAlbumId()
        this.$api.getMusicList(al_id).then((res)=>{
            let arr = this.$tool.RandomSizeCount(this.MusicList.length, res.data.length)
            for(let i = 0; i < arr.length; i++) {
                this.List[i].mp3_id = res.data[arr[i]].id
            }
        })
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
.rotates {
    -webkit-transform: rotate(360deg);
    animation: rotation 10s linear infinite;
    -moz-animation: rotation 10s linear infinite;
    -webkit-animation: rotation 10s linear infinite;
    -o-animation: rotation 10s linear infinite;
}
@-webkit-keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
}
.pasue-icon {
    display: none;
}
.playing {
    display: block;
}
.play-icon {
    display: block;
}
.pausing {
    display: none;
}
</style>
