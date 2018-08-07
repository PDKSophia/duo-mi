<template>
    <div>
        <div class="goback-header">
            <div class="cricle-back" @click="$router.go(-1)">
                <span class="back-icon"><van-icon name="arrow-left" /></span>
            </div>
        </div>
        <div>
            <form class="form-horizontal" role="form" id="uploadForm" name="uploadForm" enctype="multipart/form-data">               
                <van-cell-group>
                    <van-field
                        clearable
                        label="标题"
                        icon="question"
                        name="title"
                        id="title"
                        v-model.trim='schedule.title'
                        placeholder="请输入商品标题"
                        @click-icon="$toast('标题最少两个字符')"
                    />
                </van-cell-group>
                <van-cell-group>
                    <div class="van-cell van-hairline van-field">
                        <div class="van-cell__title" style="max-width: 45px !important;">
                            <span>分类</span>
                        </div>
                        <div class="van-cell__value">
                            <div class="van-field__body">
                                <select name="kind" id="kind" v-model="schedule.kind" class="select-cate">
                                    <option value="出行">出行</option>
                                    <option value="工作">工作</option>
                                    <option value="约会">约会</option>
                                    <option value="约会">其他</option>
                                </select>
                                <div class="van-field__icon">
                                    <i class="van-icon van-icon-arrow"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-cell-group>
                <van-cell-group>
                    <div class="van-cell van-hairline van-field">
                        <div class="van-cell__title" style="max-width: 45px !important;">
                            <span>时间</span>
                        </div>
                        <div class="van-cell__value">
                            <div class="van-field__body">
                                <div class="row">
                                    <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-cell-group>
                <van-cell-group>
                    <div class="van-cell van-hairline van-field">
                        <div class="van-cell__title" style="max-width: 45px !important;">
                            <span>操作</span>
                        </div>
                        <div class="van-cell__value" style="text-align:left">
                            <button type="button" class="btn-new" @click="handle_schedule">新增</button>
                            <button type="button" class="btn-cancle" @click="handle_cancle">取消</button>
                        </div>
                    </div>
                </van-cell-group>
            </form>
        </div>
    </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        'date-picker': myDatepicker
    },
    data () {
        return {
            schedule : {
                title : '晚上8点，阿里第二轮面试',
                kind : '约会',
            },
            startTime: {
                time: '2018-08-10'
            },
            option: {
                type: 'day',
                week: ['一', '二', '三', '四', '五', '六', '七'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD',
                placeholder: '何时开始?',
                inputStyle: {
                    'display': 'inline-block',
                    'line-height': '22px',
                    'font-size': '14px',
                    'border': '2px solid #fff',
                    'border-radius': '2px',
                    'color': '#5F5F5F'
                },
                color: {
                    header: '#ccc',             // 头部颜色
                    headerText: 'white'        // 文字颜色
                },
                buttons: {
                    ok: '确定',
                    cancel: '取消'
                },
                overlayOpacity: 0.5, // 0.5 as default
                dismissible: true // as true as default
            },
            timeoption: {
                type: 'min',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'YYYY-MM-DD HH:mm'
            },
            multiOption: {
                type: 'multi-day',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format:"YYYY-MM-DD HH:mm"
            },
            limit: [{
                type: Array,
                defalut : function _default() {
                    return []
                }
            }]
        }
    },
    methods : {
        ...mapActions([
            'set_schedule_list'
        ]),
        handle_cancle () {
            this.$router.go(-1)
        },
        handle_schedule () {
            let jsondata = {
                title : this.schedule.title,
                kind : this.schedule.kind,
                time : this.startTime.time,
                self_class : `style-${Math.floor(Math.random()*4)}`
            }
            this.set_schedule_list(jsondata)
            this.$tool.initLoading('拼命加载中', false, 1500)
            setTimeout(()=>{
                this.$tool.ToastMsgContent("success", '新增成功', 1500)
            }, 1500)
            setTimeout(()=>{
                this.handle_cancle()
            }, 3000)
        }
    }
}
</script>

<style scoped lang="scss"> 
.goback-header {
    height: 3rem;
    background: #f2f2f2;
    padding-top: .6rem;
    .wall-paper-title {
        margin-left: 3.5rem;
        color: #8e8e8e;
        margin-top: .45rem;
        font-size: 1.1rem;
    }
}
.cricle-back{
    width: 2rem;
    height: 1.5rem;
    border-radius: 50%;
    float: left;
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
select.select-cate {
    width: 100%;
    font-size: 14px;
}
button{
    padding: .2rem .68rem;
    font-size: .68rem;
    color: #333;
    border:none;
    border-radius: 10px;
    margin-right: .6rem;
}
.btn-cancle{
    background-color:#edb9cf;
}
.btn-new{
    background-color: #aed7d3;
}
</style>
