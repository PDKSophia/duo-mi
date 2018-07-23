<template>
    <div>
        <go-back></go-back>
        <list-more v-if="$route.params.movie_type == 'hot'" :List="MovieHotList"></list-more>
        <list-more v-else-if="$route.params.movie_type == 'top'" :List="MovieTopList"></list-more>
    </div>
</template>

<script>
import GoBack from '../basicComponents/top_header'
import ListMore from '../basicComponents/listmore'
import { mapState } from 'vuex'

export default {
    computed : mapState({
        MovieHotList : state => state.global.MovieHotList,
        MovieTopList : state => state.global.MovieTopList
    }),
    components : {
        GoBack,
        ListMore
    },
    mounted () {
        console.log(this.$route.params.movie_type)
        console.log(this.MovieHotList)
    }
}
</script>

<style scoped lang="scss">

</style>
