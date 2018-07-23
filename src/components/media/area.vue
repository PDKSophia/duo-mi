<template>
    <div>
        <div class="media-area">
            <div class="media-title-box">
                <p class="entry-text">书影音</p>
            </div>
        </div>
        <div class="media-summary">
            <h4>Duo-Mi / 入口选择</h4>
        </div>
        <media-entry :EntryArea="EntryMovie"></media-entry>
        <media-entry :EntryArea="EntryMusic"></media-entry>
        <media-entry :EntryArea="EntryStory"></media-entry>
        <footer-tab-bar></footer-tab-bar>
    </div>
</template>

<script>
import MediaEntry from '../basicComponents/media_entry'
import FooterTabBar from '../basicComponents/tab_bar'
export default {
    components : {
        MediaEntry,
        FooterTabBar
    },
    data () {
        return {
            EntryMovie : {
                mainIcon : require('../../assets/tab/movie.png'),
                text : '多米电影',
                arrowIcon : require('../../assets/tab/movie_arrow.png'),
                type : 'movie'
            },
            EntryMusic : {
                mainIcon : require('../../assets/tab/music.png'),
                text : '多米音乐',
                arrowIcon : require('../../assets/tab/music_arrow.png'),
                type : 'music'
            },
            EntryStory : {
                mainIcon : require('../../assets/tab/story.png'),
                text : '多米阅读',
                arrowIcon : require('../../assets/tab/story_arrow.png'),
                type : 'story'
            }
        }
    }
}
</script>

<style scoped lang="scss">
.media-title-box {
    height: 3.2rem;
    background : rgb(242, 242, 242);
    text-align : center;
    color : #333;
    p.entry-text {
        padding-top: 1rem;
        font-size: .88rem;
    }
}
.media-summary {
    padding: 6% 8% 5%;
    color : #5f5f5f;
}
</style>
