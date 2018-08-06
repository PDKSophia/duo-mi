<template>
    <div>
        <div class="goback-header">
            <div class="cricle-back" @click="handleGoBack">
                <span class="back-icon"><van-icon name="arrow-left" /></span>
            </div>
            <div class="wall-paper-title">
                <p>{{ $route.query.type }}</p>
            </div>
        </div>
        <div class="flex-box">
            <div class="flex-cell" v-for="(item, index) in CateWallPaper" :key="index" @click="ViewWallPaper(item.id, item.img)"> 
                <img v-lazy="item.img" :alt="item.atime">
            </div>
        </div>
        <no-content></no-content>
    </div>
</template>

<script>
import NoContent from '../../basicComponents/no_content'
import { ImagePreview } from 'vant'
import { mapActions } from 'vuex'
export default {
    components : {
        NoContent
    },
    data () {
        return {
            CateWallPaper : [],
        }
    },
    methods : {
        ...mapActions([
            'setDownLoadPaper'
        ]),
        ViewWallPaper (_id, _img) {
            this.setDownLoadPaper({
                paper_id : _id,
                paper_img : _img
            })
            this.$router.push({
                path : '/user/album/wallpaper/view'
            })
        },
        handleGoBack () {
            this.$router.go(-1)
        }
    },
    mounted () {
        this.$api.getOneCateWallPaper(`/wallpaper/category/${this.$route.query.id}/vertical?limit=45&adult=false&first=1&order=new`).then((res)=>{
            console.log(res)
            this.CateWallPaper = res.data.res.vertical
        })
    }
}
</script>

<style scoped lang="scss">
.goback-header {
    height: 3rem;
    background: #f2f2f2;
    padding-top: .6rem;
    .wall-paper-title {
        margin-left: 3.5rem;
        color: #8e8e8e;
        margin-top: .45rem;
        font-size: 1.1rem;
    }
}
.cricle-back{
    width: 2rem;
    height: 1.5rem;
    border-radius: 50%;
    float: left;
    background-color: #8e8e8e;
    position: relative;
    top: 5%;
    left: 3%;
    z-index: 1000;
    padding-top: .5rem;
    span.back-icon{
        color: white;
        margin-left: 0.4rem;
    }
}
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
            height: 10rem;
            border-radius: 5px;
        }
    }
}
</style>
