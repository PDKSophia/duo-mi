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
import DuoMiUserAlbumPage from '@/components/user/album/album'
import DuoMiUserWallPaperPage from '@/components/user/album/wallpaper'
import DuoMiUserWallViewPage from '@/components/user/album/view'
import DuoMiUserGameRoutePage from '@/components/user/game/route'
import DuoMiUserGameListPage from '@/components/user/game/list'
import DuoMiShopRoutePage from '@/components/user/shop/route'
import DuoMiShopIndexPage from '@/components/user/shop/index'
import DuoMiShopCommodityPage from '@/components/user/shop/commodity'
import DuoMiShopContactPage from '@/components/user/contact/contact'

// import home files
import DuoMiCalendarPage from '@/components/home/calendar/calendar'
import DuoMiSchedulePage from '@/components/home/calendar/schedule'
import DuoMiBlogPage from '@/components/home/blog/blog'

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
            path : '/duomi/calendar',
            name : 'calendar',
            component : DuoMiCalendarPage
        },
        {
            path : '/duomi/calendar/schedule',
            name : 'schedule',
            component : DuoMiSchedulePage
        },
        {
            path : '/duomi/blog',
            name : 'blog',
            component : DuoMiBlogPage
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
                },
                {
                    path : 'album',
                    name : 'album',
                    component : DuoMiUserAlbumPage,
                    meta : {
                        keepAlive : false
                    }
                },
                {
                    path : 'album/wallpaper',
                    name : 'wallpaper',
                    component : DuoMiUserWallPaperPage
                },
                {
                    path : 'album/wallpaper/view',
                    name : 'wallview',
                    component : DuoMiUserWallViewPage
                },
                {
                    path : 'game',
                    name : 'gameroute',
                    component : DuoMiUserGameRoutePage,
                    redirect : '/user/game/list',
                    children : [
                        {
                            path : 'list',
                            name : 'gamelist',
                            component : DuoMiUserGameListPage
                        }
                    ]
                },
                {
                    path : 'shop',
                    name : 'shoproute',
                    component : DuoMiShopRoutePage,
                    redirect : '/user/shop/index',
                    children : [
                        {
                            path : 'index',
                            name : 'shopindex',
                            component : DuoMiShopIndexPage
                        },
                        {
                            path : 'commodity/:id',
                            name : 'commodity',
                            component : DuoMiShopCommodityPage
                        }
                    ]
                },
                {
                    path : 'contact',
                    name : 'contact',
                    component : DuoMiShopContactPage,
                    meta : {
                        keepAlive : false
                    }
                }
            ]
        }
    ]
})