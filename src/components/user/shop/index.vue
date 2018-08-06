<template>
    <div>
        <go-back></go-back>
        <nav-title :Label="title"></nav-title>
        <water-fall :defaultData="shoplist"></water-fall>
    </div>
</template>

<script>
import GoBack from '../../basicComponents/top_header'
import NavTitle from '../../basicComponents/navtitle'
import WaterFall from '../../basicComponents/waterfall'
import { mapState } from 'vuex'
export default {
    components : {
        GoBack,
        NavTitle,
        WaterFall
    },
    computed : mapState({
        shoplist : state => state.other.shoplist
    }),
    data () {
        return {
            title : '多米商城'
        }
    },
    mounted() {
        console.log(this.shoplist)
    },
}
</script>

<style>

</style>
