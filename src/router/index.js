import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'
Vue.use(Router)

export default new Router({
    routes : [
        {
            path: '/',
            name: 'home',
            component: IndexPage,
            meta : {
                keepAlive : true
            }
        },
    ]
})