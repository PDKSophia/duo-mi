<template>
    <div class="market-commodity-box">
        <div class="commodity-box">
            <div class="cricle-back" @click="handleGoBack">
                <span class="back-icon"><van-icon name="arrow-left" /></span>
            </div>
            <van-swipe :autoplay="1500" id="swiper">
                <van-swipe-item v-for="(image, index) in Images" :key="index">
                    <img :src="image" class="swipe-img"  />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="detail-commodity">
            <p class="com-price">
                <span class="icon-money">¥</span>
                <span class="count-money">198</span>
                <van-tag plain type="danger" class="tag">ZARA</van-tag>
                <van-tag plain type="danger" class="tag">春熙路</van-tag>
            </p>
            <p class="com-title">
                ZARA男装 基本款纯色牛仔白色休闲短裤 055754332950
            </p>
            <p class="com-address">
                地址 : 成都
            </p>
        </div>
        <div style="height: 0.6rem; background: rgb(241, 241, 241);"></div>
        <div class="detail-commodity other-info">
            <p class="com-base"><span>服务</span> 无忧退货 · 订单险 · 支持退款<span class="arrow">></span></p>
            <p class="com-base"><span>类型</span> 服装服饰 <span class="arrow">></span></p>
            <p class="com-base"><span>卖家</span> 彭道宽<span class="arrow">></span></p>
        </div>
        <div style="height: 0.6rem; background: rgb(241, 241, 241);"></div>
        <div class="detail-commodity other-info">
            <p class="com-base"><span>商品描述</span> <span class="arrow">查看全部 ></span></p>
            <p class="com-description">ZARA男装 基本款纯色牛仔白色休闲短裤，正品，全新，纯棉，地址在四川省成都市武侯区世豪广场1F层</p>
        </div>
        <div style="height: 0.6rem; background: rgb(241, 241, 241);"></div>
        <van-goods-action>
            <van-goods-action-mini-btn class="icon-width" icon="shop" text="店铺" @click="handleShopHome" />
            <van-goods-action-mini-btn class="icon-width" icon="like" style="color: red" text="取消关注" v-if="IsAttention" @click="handleAttention('unattention')" />
            <van-goods-action-mini-btn class="icon-width" icon="like-o" text="关注" v-else @click="handleAttention('attention')"/>
            <van-goods-action-big-btn text="立即下单" primary @click="showDialog" />
        </van-goods-action>
        <van-sku
            v-model="showPopDialog"
            :sku="sku"
            :goods="goods"
            :goods-id="goodsId"
            :hide-stock="sku.hide_stock"
            :close-on-click-overlay="closeOnClickOverlay"
            >
            <!-- 自定义 sku actions -->
            <template slot="sku-actions" slot-scope="props">
                <div class="van-sku-actions">
                <van-button bottom-action @click="showDialog">容我再考虑一下</van-button>
                <van-button type="primary" bottom-action @click="handleComfirmBuy">立即下单</van-button>
                </div>
            </template>
        </van-sku>
        <nav-title :Label="label"></nav-title>
        <water-fall :defaultData="likeList"></water-fall>
    </div>
</template>

<script>
import GoBack from '../../basicComponents/top_header'
import NavTitle from '../../basicComponents/navtitle'
import WaterFall from '../../basicComponents/waterfall'
import { mapState } from 'vuex'
import { Toast } from 'vant'
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
            label : '猜你喜欢',
            selectCommodityId : '',
            likeList : [],
            IsAttention : false,
            Images : [
                'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-3.png',
                'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-4.png',
            ],
            showPopDialog : false,
            closeOnClickOverlay : true,
            goodsId : 7,
            goods: {
                // 商品标题
                title: 'ZARA男装 基本款纯色牛仔白色休闲短裤',
                // 默认商品 sku 缩略图
                picture: 'http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/B-4.png'
            },
            sku: {
                tree: [
                    {
                        k: '颜色', // skuKeyName：规格类目名称
                        v: [
                            {
                                id: '30349', // skuValueId：规格值 id
                                name: '红色', // skuValueName：规格值名称
                                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                            },
                            {
                                id: '1215',
                                name: '蓝色',
                                imgUrl: 'https://img.yzcdn.cn/2.jpg'
                            }
                        ],
                        k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                price: '198.00', // 默认价格（单位元）
                stock_num: 1, // 商品总库存
                collection_id: 1, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: true, // 是否无规格商品
                hide_stock: true // 是否隐藏剩余库存
            },
            
        }
    },
    methods : {
        handleGoBack () {
            this.$router.go(-1)
        },
        showDialog() {
            this.showPopDialog = !this.showPopDialog
        },
        handleComfirmBuy () {
            this.showToastDialog('下单成功~')
            setTimeout(()=>{
                this.showDialog()
            }, 2500)
        },
        showToastDialog (text) {
            Toast.loading({
                message : '请骚等...',
                duration : 1500
            })
            setTimeout(()=>{
                Toast.success({
                    message : text,
                    duration : 1000
                })
            }, 1500)
        },
        handleAttention (type) {
            let text = (this.IsAttention) ? '已取消关注~' : '关注成功~'
            this.showToastDialog(text)
            setTimeout(()=>{
                this.IsAttention = !this.IsAttention
            }, 2100)
        },
        handleShopHome () {
            this.$tool.initToastAlert('暂无店铺信息', false, 1500)
        }
    },
    mounted() {
        let count = this.$tool.RandomSizeCount(4, this.shoplist.length)
        console.log(count)
        for(let i = 0; i < count.length; i++) {
            this.likeList.push({
                id : this.shoplist[count[i]].id,
                title : this.shoplist[count[i]].title,
                content : this.shoplist[count[i]].content,
                price : this.shoplist[count[i]].price,
                address : this.shoplist[count[i]].address,
                img_url : this.shoplist[count[i]].img_url,
                user : this.shoplist[count[i]].user,
                kind : this.shoplist[count[i]].kind,
                time : this.shoplist[count[i]].time,
                state : this.shoplist[count[i]].state
            })
        }
    },
    created () {
        this.selectCommodityId = this.$route.params.id
    }
}
</script>

<style scoped lang="scss">
.cricle-back{
    width: 2.6rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: #8e8e8e;
    position: relative;
    top: 3%;
    left: 3%;
    z-index: 1000;
    padding-top: .8rem;
    span.back-icon{
        color: white;
        margin-left: 0.7rem;
    }
}
.market-commodity-box {
    margin-bottom: 4rem; 
}
.commodity-box{
    background-color: #acacac;
    height: 18rem;
    #swiper {
        height: 16rem;
    }
    img.swipe-img{
        width: 100%;
        height: 15.8rem;
    }
}
.detail-commodity {
    padding: 8px 10px;
    p.com-price{
        color: #FF0036;
        margin: 0;
        margin-top: .5rem;
        span.icon-money{
            font-size: .66rem;
            margin-right: .2rem;
        }
        span.count-money{
            font-size: 1.2rem;
            margin-right: 1rem;
        }
        .tag {
            margin-right: .5rem;
        }
    }
    p.com-title{
        margin-top: .4rem;
        font-size: .88rem;
        margin-bottom: 0;
        color: rgb(20, 19, 19);
        font-weight: 500;
        line-height: 1.5rem;
    }
    p.com-address {
        margin-top: .4rem;
        font-size: .68rem;
        color: #858080;
        margin-bottom: 0.3rem;
    }
    p.com-base {
        font-size: .68rem;
        color: rgb(20, 19, 19);
        span{
            color: #858080;
            margin-right: .8rem;
        }
    }
    span.arrow{
        float: right
    }
    p.com-description {
        padding:0px 8px;
        margin-top: .4rem;
        font-size: .88rem;
        color: rgb(20, 19, 19);
    }
}
.other-info{
    line-height: 1.8rem;
}
.icon-width{
    width: 25%;
}
</style>
