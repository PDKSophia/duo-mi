<template>
    <div>
        <go-back></go-back>
        <div class="album-box" v-for="(item, index) in MusicList" :key="index">
            <img v-lazy="item.img_url" alt="">
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
        MusicList : state => state.global.MusicList
    }),
    created () {
        console.log(this.MusicList)
    }
}
</script>

<style scoped lang="scss">
.album-box {
    padding: .5rem;
    padding-bottom: 0;
    img {
        width: 100%;
    }
}
</style>
