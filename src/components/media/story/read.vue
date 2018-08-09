<template>
    <div>
        <go-back></go-back>
        <div class="text-detail" v-if="requireShow">
            <h2>{{ context.hp_title }}</h2>
            <hr class="sort-separate-line sort-separate-line15">
            <p class="text-author">文 / {{ context.author[0].user_name }}</p>
            <div class="content-detail" v-html="context.hp_content"></div>
            <p class="text-editor">{{ context.hp_author_introduce}} {{ context.editor_email }}</p>
            <p class="page-sparate-title">作者</p>
            <hr class="sort-separate-line sort-separate-line15">
            <div class="content_author_box">
                <img :src="context.author[0].web_url" alt="author">
                <div class="content_author_desc">
                    <p class="user-name">{{ context.author[0].user_name }}</p>
                    <p class="user-summary">{{ context.author[0].summary }}</p>
                </div>
            </div>
            <p class="page-sparate-title">评论内容</p>
            <hr class="sort-separate-line sort-separate-line15">
            <div class="page-table">
                <div class="comment-box" v-for="(rm, index) in remarklist" :key="index" :class="{'last' : index == remarklist.length-1}" >
                    <div class="box-left">
                        <img :src="rm.user.web_url" :alt="rm.user.user_name">
                    </div>
                    <div class="box-right">
                        <div class="comment-content-box">
                            <p class="remark-name">{{ rm.user.user_name }}</p>
                            <p class="remark-time">{{ rm.input_date }}</p>
                        </div>
                        <div class="comment-content-box">
                            <p class="remark-content">
                                {{ rm.content }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <p class="page-sparate-title">猜你喜欢</p>
            <hr class="sort-separate-line sort-separate-line15"> -->
        </div>
    </div>
</template>

<script>
import GoBack from '../../basicComponents/top_header'
export default {
    components : {
        GoBack
    },
    data () {
        return {
            context : {},
            requireShow : false,
            remarklist : []
        }
    },
    watch : {
        context : {
            handler(newValue, oldValue) {
                this.$nextTick(()=>{
                    console.log('update')
                    // console.log(newValue)
                })
            }
        }
    },
    created() {
        this.$api.getWhichOneStroy(this.$route.query.item_id).then((res1)=>{
            this.context = JSON.parse(JSON.stringify(res1.data.data))
            this.$api.getOneStoryRemak(this.$route.query.item_id).then((res2)=>{
                for(let i = 0 ; i < res2.data.data.data.length; i++) {
                    this.remarklist.push(res2.data.data.data[i])
                }
                this.requireShow = true
                // console.log(this.remarklist)
            })
        })
    },
}
</script>

<style lang="scss">
.text-detail {
    padding: 24px 20px;
    p.text-author{
        color: #555;
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .content-detail{
        line-height: 2.3rem;
        margin-top: 14px;
        p{
            margin-bottom: 20px !important;
            text-justify: justify;
        }
        img{
            margin: 15px 0;
            height: auto !important;
            width: 100% !important;
            text-align: center;
        }
    }
    p.text-editor{
        color: #808080;
        font-style: oblique;
        margin: 30px 0;
        font-size: .78rem;
    }
    p.page-sparate-title {
        font-size: 15px;
        margin-top: 50px;
        margin-bottom: 0;
        color: #333;
    }
    .content_author_box {
        margin-top: 1rem;
        height: 4.2rem;
        img {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
            float: left;
        }
        .content_author_desc{
            line-height: 1.46rem;
            float: left;
            margin-left: .54rem;
            padding-top:.3rem;
            p.user-name {
                font-size: .92rem;
                color: #333;
            }
            p.user-summary {
                font-size: .72rem;
                color: #8e8e8e;
            }
        }
    }
    .page-table{
        color: #333;
        width: 100%;
        .comment-box{
            margin-top: 1rem;
            display: flex;
            padding-bottom: 1rem;
            border-bottom: 1px solid #f5f5f5;
            width: 100%;
            flex-wrap: wrap;
            .box-left{
                width: 8%;
                img {
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    float: left;
                }
            }
            .box-right{
                width: 92%;
                .comment-content-box{
                    margin-left: .54rem;
                    padding-top:.18rem;
                    p.remark-name{
                        color: #555;
                        font-size: .78rem;
                        float: left;
                    }
                    p.remark-time{
                        color: #8e8e8e;
                        font-size: .66rem;
                        float: right;
                    }
                    p.remark-content{
                        margin-top: 30px;
                        line-height: 1.3rem;
                        font-size: .78rem;
                        color: #555;
                    }
                }
            }
        }
    }
}
.sort-separate-line{
    margin: 10px 20px;
    width: 70px;
    border: 2px solid #000;
}
.sort-separate-line15 {
    margin-top: 15px;
    margin-left: 0;
}
.last{
    border-bottom: none !important;
}
</style>
