<template>
    <div>
        <div class="water-fall" v-if="!ShowTemplate">
            <div class="item cell-height" v-for="(item, index) in defaultData" :key="index" >
                <div class="commodity" @click="handleView(item.id)" :class="(index+1 == defaultData.length) ? 'last-class' : ''">
                    <img v-lazy="item.img_url" alt="logo">
                    <p class="commodity-label">{{ item.title }}</p>
                    <p style="margin:0">
                        <span class="price">¥ {{ item.price }}</span>
                        <span class="address">{{ item.address }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
    props : {
        defaultData : {
            type : Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            ShowTemplate : true,
            page : 0,
            isLoading : true
        }
    },
    methods : {
        _initToDo() {
            Toast.loading({
                mask: false,
                message : '加载中...',
                duration : 1000,
                loadingType: 'spinner',
                forbidClick: true, 
            })
            setTimeout (() => {
                this.ShowTemplate = false
            }, 1000)
        },
        handleView (id) {
            this.$router.push({
                path : '/user/shop/commodity/' + id,
            })
        }
    },
    mounted() {
        this._initToDo()
    },
}
</script>

<style scoped lang="scss">
.water-fall{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgb(247, 247, 247);
    padding-bottom: 4%;
    justify-content: center;
    .item {
        width: 44%;
        padding: 4% 3%;
        padding-bottom: 0;
        .commodity {
            background-color: white;
            padding: 10px;
            height: 13.6rem;
            img {
                width: 100%;
                height: 10rem;
            }
            p.commodity-label {
                font-size: .9rem;
                margin-top: .4rem;
                margin-bottom: .4rem;
                font-weight: 600;
                overflow: hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
                color: #4F4F4F;
            }
            span.price{
                font-size: .6rem;
                color: red;
                float: left;
            }
            span.address {
                font-size: .4rem;
                color: #4F4F4F;
                float: right;
            }
        }
    }
    button.btn-more, .modal-loadding {
        margin-top: 4%;
        font-size: .88rem;
    }
}
</style>
