<template>
    <div class="entry-box">
        <div class="media-type" @click="handleToMediaType(EntryArea.type)">
            <div class="cell">
                <img :src="EntryArea.mainIcon" alt="">
            </div>
            <div class="cell context">
                <p class="text">{{ EntryArea.text }}</p>
            </div>
            <div class="cell">
                <img :src="EntryArea.arrowIcon" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        EntryArea : {
            type : Object,
            default : {
                mainIcon : require('../../assets/tab/times.png'),
                text : '多米电影',
                arrowIcon : require('../../assets/tab/hot.png'),
                type : 'movie'
            }
        }
    },
    methods : {
        handleToMediaType (media_type) {
            this.$router.push({
                path: `/media/${media_type}`
            })
        }
    }
}
</script>

<style scoped lang="scss">
.entry-box {
    padding: 3% 5%;
    .media-type {
        width: 100%;
        display: flex;
        border: 1px solid rgb(242, 242, 242);
        padding: 1.5rem 0;
        flex-wrap: wrap;
	    display: -webkit-flex; /* Safari */
        .cell {
            text-align: center;
            display: block;
            /*四个居中的代码*/
            -webkit-box-flex: 1;
            flex: 1;
            img{
                width: 1.8rem;
                height: 1.8rem;
            }
            p.text {
                color : #333;
                font-size: .88rem;
                margin-top: .3rem;
            }
        }
        .context {
            flex : 3;
            text-align: start;
        }
    }
}
</style>
