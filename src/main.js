import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import tool from './lib/tool'
import city from './lib/city'
Object.defineProperty(Vue.prototype, '$api', {value: api})
Object.defineProperty(Vue.prototype, '$tool', {value: tool})
Object.defineProperty(Vue.prototype, '$city', {value: city})

import store from './store'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  attempt: 1
})
// 引入Vant框架
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
