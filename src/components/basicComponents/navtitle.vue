<template>
    <div class="nav-title">
        <p class="type-label">- {{Label}}  -</p>
    </div>
</template>

<script>
export default {
    props : {
        Label : {
            type : String,
            default : '校内闲置共享平台'
        }
    },
    mounted() {
    },
}
</script>

<style scoped lang="scss">
.nav-title {
    width: 100%;
    height: 1.8rem;
    padding-top: .6rem;
    p.type-label{
        margin: 0;
        text-align: center;
        font-size: .7rem;
        color : #999;
    }
}
</style>
