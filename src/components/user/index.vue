<template>
    <div>
        <div class="user-header">
            <div class="bg-mask">
                <img src="http://image.wufazhuce.com/FpebHlW68X5IoBuyB9CjUcNkVGui" class="avatar-image" alt="avatar" >
            </div>
            <div class="avatar-username">
                <img src="http://image.wufazhuce.com/FpebHlW68X5IoBuyB9CjUcNkVGui" class="avatar-image" alt="avatar" >
                <p class="username">彭道宽</p>
            </div>
            <div class="ability-box">
                <div v-for="(item, index) in UserOtherIcon" :key="index" :class="[index+1 == UserOtherIcon.length ? 'last-cell' : '']">
                    <div class="cell" @click="handleTolink(item.type)">
                        <div class="icon-left">
                            <img :src="item.icon_url" class="icon-image" alt="index">
                        </div>
                        <div class="text-center">
                            <p class="label-text">{{ item.label }}</p>
                        </div>
                        <div class="arrow-right">
                            <span>></span>
                        </div>
                    </div>
                </div> 
            </div>
            <footer-tab-bar></footer-tab-bar>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import FooterTabBar from '../basicComponents/tab_bar'

export default {
    components : {
        FooterTabBar
    },
    computed : mapState({
        UserOtherIcon : state => state.user.UserOtherIcon
    }),
    data () {
        return {
            TabList : ['']
        }
    },
    methods : {
        handleTolink (type) {
            if(type == 'weather' || type == 'album' || type == 'game' || type == 'shop') {
                this.$router.push({
                    path : `/user/${type}`
                })
            } else {
                this.$tool.initToastAlert('还未开放此专区', false, 1000)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.last-cell {
    margin-bottom: 6.2rem;
}
.user-header {
    height: 15rem;
    position: relative;
    .bg-mask {
        position: absolute;
        z-index : 100;
        width: 100%;
        -webkit-filter: blur(4px); /* Chrome, Safari, Opera */
        filter: blur(4px);
        img{
            width: 100%;
            height: 15rem;
        }
    }
    .avatar-username {
        position: absolute;
        width: 100%;
        z-index: 200;
        padding-top: 3rem; 
        text-align: center;
        img{
            height: 7.2rem;
            width: 7.2rem;
            border-radius: 50%;
        }
        p.username {
            font-size: 1.1rem;
            margin-top: .8rem;
            color: #333;
        }
    }
    .flex-box {
        padding-top: 15rem;
    }
    .ability-box {
        padding-top: 15rem;
        .cell {
            padding: 3% 5%;
            color: #858080;
            display: flex;
            width: 90%;
            flex-wrap: wrap;
            border-bottom: 1px solid #f1f1f1;
            .icon-left {
                width: 15%;
                text-align: center;
                img.icon-image {
                    width: 2rem;
                    height: 2rem;
                }
            }
            .text-center {
                width: 70%;
                p.label-text {
                    margin: .5rem 0;
                    font-size: .98rem;
                }
            }
            .arrow-right {
                width: 15%;
                text-align: center;
                margin-top: .6rem;
                font-size: 1.18rem;
            }
        }
    }
}

</style>
