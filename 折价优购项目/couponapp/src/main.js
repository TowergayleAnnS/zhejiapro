import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);

// axios 请求包
import axios from "axios"
// 将axios添加到Vue原型链对象上，这样的话每一个组件都可以使用这个属性
axios.defaults.withCredentials = true
Vue.prototype.http = axios

// 将携带参数转化为json数据
import urlcode from "urlcode-json";
Vue.prototype.urlcode = urlcode;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
