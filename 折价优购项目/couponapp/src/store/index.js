import Vue from 'vue'
import Vuex from 'vuex'

import homeStore from "./modules/homeStore"
import hotStore from "./modules/hotStore"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  // 管理需要共享的数据
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	  // home模块需要管理的数据
	  home:homeStore,
	  // hot模块需要管理的数据
	  hot:hotStore
  }
})
