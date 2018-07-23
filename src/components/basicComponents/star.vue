<template>
    <div class="star">
        <p style="font-size: .8rem">
            <i class="fa fa-star" v-for="(item, index) in StarList" :key="index" :class="item ? 'star' : 'unstar' "></i>
            <span style="color:#CFCFCF;padding-left:6px;">{{ score }}</span>
        </p>
    </div>
</template>

<script>
export default {
    props: ['count', 'max', 'score'],
    data () {
        return {
            StarList : []
        }
    },
    mounted () {
    },
    created () {
        let all = parseInt(this.max)
        let full = parseInt(this.count) < all ? Math.abs(parseInt(this.count)) : all || 0 // 满
        let empty = all - full // 空
        this.StarList = new Array(full).fill(1).concat(new Array(empty).fill(0))
        // console.log(this.StarList)
    }
}
</script>

<style scoped lang="scss">
i.star {
    color : #ffac38;
}
i.unstar {
    color : rgb(233, 232, 232);
}
</style>
