import Vue from 'vue'
import Router from 'vue-router'
import DuoMiIndexPage from '@/components/index'

// import media files
import DuoMiMediaRoutePage from '@/components/media/route'
import DuoMiMediaMAreaPage from '@/components/media/area'
import DuoMiMediaMoviePage from '@/components/media/movie'
import DuoMiMediaMusicPage from '@/components/media/music'
import DuoMiMediaStoryPage from '@/components/media/story'
import DuoMiMediaDetailPage from '@/components/media/movie_detail'
import DuoMiMediaMorePage from '@/components/media/movie_more'

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
                    component : DuoMiMediaMoviePage,
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
                    component : DuoMiMediaDetailPage
                },
                {
                    path : 'movie_more/:movie_type',
                    name : 'movie_type',
                    component : DuoMiMediaMorePage
                }
            ]
        }
    ]
})