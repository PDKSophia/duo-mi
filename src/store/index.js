import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import user from './modules/user'
import blog from './modules/blog'
import other from './modules/other'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		global,
		user,
		blog,
		other
	}
})
