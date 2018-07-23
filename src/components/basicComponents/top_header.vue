<template>
    <div class="goback-header">
        <div class="cricle-back" @click="handleGoBack">
            <span class="back-icon"><van-icon name="arrow-left" /></span>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        handleGoBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
.goback-header {
    height: 3rem;
    background: #f2f2f2;
    padding-top: .6rem;
}
.cricle-back{
    width: 2rem;
    height: 1.5rem;
    border-radius: 50%;
    // float: left;
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
</style>
