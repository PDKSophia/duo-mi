import Vue from 'vue'
import Router from 'vue-router'
import DuoMiIndexPage from '@/components/index'

// import media files
import DuoMiMediaRoutePage from '@/components/media/route'
import DuoMiMediaMAreaPage from '@/components/media/area'
import DuoMiMediaMMoviePage from '@/components/media/movie/movie'
import DuoMiMediaMDetailPage from '@/components/media/movie/movie_detail'
import DuoMiMediaMMorePage from '@/components/media/movie/movie_more'
import DuoMiMediaMusicPage from '@/components/media/music/music'
import DuoMiMediaStoryPage from '@/components/media/story/story'

// import user files
import DuoMiUserRoutePage from '@/components/user/route'
import DuoMiUserIndexPage from '@/components/user/index'
import DuoMiUserWeatherPage from '@/components/user/weather/weather'
Vue.use(Router)

export default new Router({
    routes : [
        {
            path : '/',
            name : 'index',
            component : DuoMiIndexPage,
            meta : {
                keepAlive : true
            }
        },
        {
            path : '/media',
            name : 'media',
            component : DuoMiMediaRoutePage,
            redirect : '/media/m_area',
            children : [
                {
                    path : 'm_area',
                    name : 'm_area',
                    component : DuoMiMediaMAreaPage,
                },
                {
                    path : 'movie',
                    name : 'movie',
                    component : DuoMiMediaMMoviePage,
                },
                {
                    path : 'music',
                    name : 'music',
                    component : DuoMiMediaMusicPage,
                },
                {
                    path : 'story',
                    name : 'story',
                    component : DuoMiMediaStoryPage,
                },
                {
                    path : 'movie_detail/:m_id',
                    name : 'detaile',
                    component : DuoMiMediaMDetailPage
                },
                {
                    path : 'movie_more/:movie_type',
                    name : 'movie_type',
                    component : DuoMiMediaMMorePage
                }
            ]
        },
        {
            path : '/user',
            name : 'userroute',
            component : DuoMiUserRoutePage,
            redirect : '/user/introduce',
            children : [
                {
                    path : 'introduce',
                    name : 'introduce',
                    component : DuoMiUserIndexPage,
                    meta : {
                        keepAlive : false
                    }
                },
                {
                    path : 'weather',
                    name : 'weather',
                    component : DuoMiUserWeatherPage,
                    meta : {
                        keepAlive : false
                    }
                }
            ]
        }
    ]
})