import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import homeStore from "./modules/homeStore"
import firstpageStore from "./modules/firstpageStore"

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        firstpageStore: firstpageStore,
        homeStore: homeStore,
    }
})