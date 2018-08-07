<template>
    <div>
        <div class="goback-header">
            <div class="cricle-back" @click="$router.go(-1)">
                <span class="back-icon"><van-icon name="arrow-left" /></span>
            </div>
        </div>
        <div id="calendar">
            <!-- 年月 -->
            <div class="year-month">
                <ul>
                    <li class="arrow" @click="pre_month()"><van-icon name="arrow-left" /></li>
                    <li class="year-and-month">
                        <span class="choose-year">{{ currentYear }}</span>
                        <span class="choose-month">{{ currentMonth }} 月</span>
                    </li>
                    <li class="arrow" @click="next_month()"><van-icon name="arrow" /></li>
                </ul>
            </div>
            <!-- 星期 -->
            <ul class="weekdays">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <!-- 日期 -->
            <ul class="days">
                <li v-for="(item, index) in AllLiArray" :key="index">
                    <span class="common" v-if="item.self_class == 'online'" :class="item.self_class">  
                        {{ item.li }}
                    </span>
                    <span class="common" :class="item.self_class" v-else>{{ item.li }}</span>
                </li>
            </ul>
        </div>
        <div class="today-something" v-for="(sch, index) in schedulelist" :key="index">
            <div class="schedule-cell">
                <div class="cells">
                    <div class="circle" :class="sch.self_class"></div>
                </div>
                <div class="content">
                    <p>{{ sch.title }}</p>
                </div>
            </div>
        </div>
        <div class="new-schedule" @click="$router.push({path:'/duomi/calendar/schedule'})">
            <p class="news">+</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            currentYear : '2018',
            currentMonth : '8',
            AllLiArray : [],        // 所有的Li标签
            DaysLiDom : [],         // 添加的空li标签
            iNow : 0, 
        }
    },
    computed : mapState({
        schedulelist : state => state.user.ScheduleList
    }),
    methods : {
        initDate (n) {
            let cur_date = new Date()
            let cur_month = cur_date.setMonth(cur_date.getMonth() + n)      // 设置当前月份

            let year = cur_date.getFullYear()
            let month = cur_date.getMonth()
            let day = cur_date.getDate()

            // 月份数组
            let DayArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            // 获得当前月份所在数组
            let allDay = DayArray[month];           // month = 0 ， 代表一月。DayArray[0] 是一月份的天数

            // 计算闰年， 1 代表 2月
            if(month == 1){
                if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
                    allDay = 29
                }
            }
            cur_date.setDate(1)                         // 时间调到本月1号
            let week = cur_date.getDay()                // 0 - 6  星期日 - 星期六

            // 每次都要清空月份的数组
            this.AllLiArray = []
            // 加入 week = 4 说明今天星期四， 说明前面有4个空的li
            for(let i = 0; i < week; i++)
            {
                this.AllLiArray.push({ 'li' : '' , 'self_class' : ''})
            }
            for(let i = week + 1; i <= allDay + week; i++)
            {
                if(month == new Date().getMonth()) {        // 排除每个月的今天同样会有一样的样式
                    if(day == i-week) {
                        this.AllLiArray.push({
                            'li' : i - week,
                            'self_class' : 'online'
                        })
                    } else {
                        this.AllLiArray.push({
                            'li' : i - week,
                            'self_class' : ''
                        })
                    }
                    for(let d = 0; d < this.schedulelist.length; d++) {
                        let sch_day = this.$tool.subdate(this.schedulelist[d].time) 
                        if(i-week == parseInt(sch_day)) {
                            this.AllLiArray[i-1].self_class = this.schedulelist[d].self_class
                        }
                    }
                } else {
                    this.AllLiArray.push({
                        'li' : i - week,
                        'self_class' : ''
                    })
                }
                
            }
            for(let i = 0; i < 6; i++)
            {
                this.AllLiArray.push({ 'li' : '' , 'self_class' : '' })
            }
            this.currentYear = year
            this.currentMonth = month +  1
        },
        // 上个月
        pre_month : function()
        {
            this.iNow --
            this.initDate(this.iNow)
        },
        // 下个月
        next_month : function()
        {
            this.iNow ++ 
            this.initDate(this.iNow)
        }
    },
    created() {
        this.initDate(0)
    },
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
/* 日历 */
#calendar {
    width: 90%;
    margin: 1rem auto;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
    .year-month{
        width: 100%;
        background: #f2f2f2;
        ul{
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            .year-and-month {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                span.choose-year {
                    font-size: 1.5rem;
                    margin-top: .8rem;
                    color: #555;
                    margin-bottom: .5rem;
                }
                span.choose-month {
                    margin-top: 0;
                    font-size: 1.5rem;
                    color: #555;
                    margin-bottom: .8rem;
                }
            }
            .arrow{
                padding: 1.3rem;
                margin-top: 1rem;
                font-size: 1.5rem;
                color: #555;
            }
        }
    }
    .weekdays {
        margin: 0;
        display: flex;
        color: #555;
        font-size: .88rem;
        padding: .78rem 0rem;
        border-top: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;
        background-color: #f2f2f2;
        width: 100%;
        flex-wrap : wrap;
        justify-content: space-around;  /* justify-content属性定义了项目在主轴上的对齐方式。*/
    }
    .days {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            width: 14%;
            color: #555;
            text-align: center;
            font-size: 1rem;
            padding: .8rem 0rem;
            margin: .3rem 0rem;
        }
    }
}
.today-something {
    width: 90%;
    margin: 1rem auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
    .schedule-cell {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .cells {
            width: 10%;
            .circle {
                width: 8px;
                height: 8px;
                margin-left: 50%;
                border-radius: 50%;
                margin-top: .22rem;
            }
        }
        .content {
            width: 90%;
            p{
                font-size: .88rem;
                color: #555;
            }
        }
    }
}
.new-schedule {
    position: fixed;
    bottom: 3%;
    right: 5%;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    background: #f9bdbe;
    .news{
        font-size: 1.8rem;
        padding-top: .18rem;
        margin-left: .6rem;
        color: white;
    }
}
.common {
    border-radius: 50%;
    padding: .52rem .68rem;
}
.online {
    background: #f9bdbe;
    color: #fff;
}
.style-0 {
    background: #f9dcac;
    color: #fff;
}
.style-1 {
    background: #a8fb9f;
    color: #fff;
}
.style-2 {
    background: #aed7d3;
    color: #fff;
}
.style-3 {
    background: #edb9cf;
    color: #fff;
}
</style>
